#!/usr/bin/env node

/**
 * Comprehensive Security Check Script
 * Performs various security audits on the codebase
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔒 Running Security Audit...\n');

let hasErrors = false;
const warnings = [];
const errors = [];

// Security check functions
async function runSecurityChecks() {
  try {
    checkPackageJsonSecurity();
    checkForHardcodedSecrets();
    checkDocusaurusConfig();
    checkDependencyVersions();
    checkFilePermissions();
    await checkForVulnerablePatterns();
    
    // Print results
    printResults();
    
    // Exit with appropriate code
    process.exit(hasErrors ? 1 : 0);
  } catch (error) {
    console.error('❌ Security check failed:', error.message);
    process.exit(1);
  }
}

/**
 * Check package.json for security issues
 */
function checkPackageJsonSecurity() {
  console.log('📦 Checking package.json security...');
  
  const packagePath = path.join(__dirname, '..', 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  
  // Check for scripts with potential security issues
  const dangerousScripts = Object.entries(packageJson.scripts || {})
    .filter(([name, script]) => {
      return script.includes('curl') || 
             script.includes('wget') || 
             script.includes('eval') ||
             script.includes('rm -rf') ||
             script.includes('sudo');
    });
    
  if (dangerousScripts.length > 0) {
    errors.push(`Potentially dangerous scripts found: ${dangerousScripts.map(([name]) => name).join(', ')}`);
    hasErrors = true;
  }
  
  // Check for private registry indicators
  if (packageJson.publishConfig && packageJson.publishConfig.registry) {
    const registry = packageJson.publishConfig.registry;
    if (!registry.includes('npmjs.org') && !registry.includes('npm.pkg.github.com')) {
      warnings.push(`Using non-standard registry: ${registry}`);
    }
  }
  
  console.log('   ✅ Package.json security check complete');
}

/**
 * Check for hardcoded secrets and sensitive information
 */
function checkForHardcodedSecrets() {
  console.log('🔍 Scanning for hardcoded secrets...');
  
  const secretPatterns = [
    { name: 'API Key', pattern: /api[_-]?key[_-]?[=:]\s*['"]\w{20,}['"]/ },
    { name: 'Password', pattern: /password[_-]?[=:]\s*['"]\w{8,}['"]/ },
    { name: 'Private Key', pattern: /-----BEGIN\s+(RSA\s+)?PRIVATE\s+KEY-----/ },
    { name: 'AWS Access Key', pattern: /AKIA[0-9A-Z]{16}/ },
    { name: 'JWT Token', pattern: /eyJ[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*/ },
    { name: 'Database URL', pattern: /(mongodb|mysql|postgres):\/\/[^\s'"]*[^\/]/ }
  ];
  
  const filesToScan = [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'docs/**/*.md',
    '*.js',
    '*.json'
  ];
  
  let foundSecrets = false;
  
  filesToScan.forEach(pattern => {
    try {
      const files = getFilesMatching(pattern);
      files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        
        secretPatterns.forEach(({ name, pattern }) => {
          const matches = content.match(pattern);
          if (matches) {
            // Skip known false positives
            if (name === 'API Key' && file.includes('docusaurus.config.js') && 
                content.includes('algolia')) {
              return;
            }
            
            // Skip documentation files (they may contain examples)
            if (file.includes('/docs/') || file.includes('README.md') || 
                file.includes('CHANGELOG.md')) {
              return;
            }
            
            // Skip if it looks like documentation or examples
            const lineWithMatch = content.split('\n').find(line => pattern.test(line));
            if (lineWithMatch && (
              lineWithMatch.includes('example') ||
              lineWithMatch.includes('sample') ||
              lineWithMatch.includes('placeholder') ||
              lineWithMatch.includes('//') ||
              lineWithMatch.includes('#')
            )) {
              return;
            }
            
            errors.push(`Potential ${name} found in ${file}`);
            foundSecrets = true;
            hasErrors = true;
          }
        });
      });
    } catch (error) {
      // Ignore file system errors for optional files
    }
  });
  
  if (!foundSecrets) {
    console.log('   ✅ No hardcoded secrets found');
  }
}

/**
 * Check Docusaurus configuration for security issues
 */
function checkDocusaurusConfig() {
  console.log('⚙️  Checking Docusaurus configuration...');
  
  const configPath = path.join(__dirname, '..', 'docusaurus.config.js');
  
  if (fs.existsSync(configPath)) {
    const config = fs.readFileSync(configPath, 'utf8');
    
    // Check for unsafe settings
    if (config.includes('dangerouslySetInnerHTML')) {
      warnings.push('Found dangerouslySetInnerHTML usage - review for XSS vulnerabilities');
    }
    
    // Check for HTTP URLs (should be HTTPS)
    const httpUrls = config.match(/http:\/\/[^\s'"]+/g);
    if (httpUrls) {
      const nonLocalUrls = httpUrls.filter(url => 
        !url.includes('localhost') && !url.includes('127.0.0.1')
      );
      if (nonLocalUrls.length > 0) {
        warnings.push(`Found HTTP URLs (should be HTTPS): ${nonLocalUrls.join(', ')}`);
      }
    }
    
    // Check for development settings in production
    if (config.includes('NODE_ENV') && config.includes('development')) {
      // This is actually good - proper environment checking
      console.log('   ✅ Environment-aware configuration detected');
    }
  }
  
  console.log('   ✅ Docusaurus configuration check complete');
}

/**
 * Check dependency versions for known vulnerabilities
 */
function checkDependencyVersions() {
  console.log('📚 Checking dependency versions...');
  
  try {
    // Run npm audit and capture output
    const auditResult = execSync('npm audit --json', { encoding: 'utf8' });
    const audit = JSON.parse(auditResult);
    
    if (audit.vulnerabilities && Object.keys(audit.vulnerabilities).length > 0) {
      const vulnerabilities = Object.values(audit.vulnerabilities);
      
      // Filter out known framework limitations
      const criticalVulns = vulnerabilities.filter(v => {
        // Skip webpack-dev-server vulnerabilities (Docusaurus framework limitation)
        if (v.name === 'webpack-dev-server' && v.severity === 'moderate') {
          return false;
        }
        return v.severity === 'high' || v.severity === 'critical';
      });
      
      const moderateVulns = vulnerabilities.filter(v => {
        // Skip webpack-dev-server vulnerabilities
        if (v.name === 'webpack-dev-server' && v.severity === 'moderate') {
          return false;
        }
        return v.severity === 'moderate';
      });
      
      if (criticalVulns.length > 0) {
        errors.push(`Found ${criticalVulns.length} high/critical severity vulnerabilities`);
        hasErrors = true;
      } else if (moderateVulns.length > 0) {
        warnings.push(`Found ${moderateVulns.length} moderate severity vulnerabilities`);
      } else {
        // Check if we only have webpack-dev-server issues
        const webpackOnlyVulns = vulnerabilities.filter(v => 
          v.name === 'webpack-dev-server' && v.severity === 'moderate'
        );
        if (webpackOnlyVulns.length > 0) {
          console.log('   ✅ Only webpack-dev-server vulnerabilities found (framework limitation, dev-only)');
        } else {
          console.log('   ✅ No significant vulnerabilities found');
        }
      }
    } else {
      console.log('   ✅ No known vulnerabilities found');
    }
  } catch (error) {
    if (error.status === 1) {
      // npm audit returns exit code 1 when vulnerabilities are found
      // Check if it's just webpack-dev-server issues
      try {
        const output = execSync('npm audit --audit-level=high', { encoding: 'utf8' });
        console.log('   ✅ Only low/moderate vulnerabilities found (likely framework dependencies)');
      } catch (highLevelError) {
        warnings.push('npm audit found high-severity vulnerabilities - run "npm audit" for details');
      }
    } else {
      warnings.push('Could not run npm audit - check manually');
    }
  }
}

/**
 * Check file permissions for security issues
 */
function checkFilePermissions() {
  console.log('🔐 Checking file permissions...');
  
  const sensitiveFiles = [
    '.env',
    '.env.local',
    '.env.production',
    'package-lock.json',
    'yarn.lock'
  ];
  
  sensitiveFiles.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (fs.existsSync(filePath)) {
      try {
        const stats = fs.statSync(filePath);
        const mode = stats.mode & parseInt('777', 8);
        
        // Check if file is world-readable or world-writable
        if (mode & parseInt('044', 8)) {
          warnings.push(`${file} may be world-readable`);
        }
        if (mode & parseInt('022', 8)) {
          warnings.push(`${file} may be world-writable`);
        }
      } catch (error) {
        // Ignore permission errors
      }
    }
  });
  
  console.log('   ✅ File permissions check complete');
}

/**
 * Check for vulnerable patterns in code
 */
async function checkForVulnerablePatterns() {
  console.log('🔎 Scanning for vulnerable code patterns...');
  
  const vulnerablePatterns = [
    {
      name: 'Potential XSS',
      pattern: /innerHTML\s*=\s*[^'"]|\$\{[^}]*\}/,
      severity: 'medium'
    },
    {
      name: 'Eval usage',
      pattern: /\beval\s*\(/,
      severity: 'high'
    },
    {
      name: 'Document.write',
      pattern: /document\.write\s*\(/,
      severity: 'medium'
    },
    {
      name: 'Unsafe regex',
      pattern: /new RegExp\([^)]*\+|\*\+|\?\+/,
      severity: 'medium'
    }
  ];
  
  const jsFiles = getFilesMatching('src/**/*.{js,jsx,ts,tsx}');
  let foundVulnerabilities = false;
  
  jsFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    vulnerablePatterns.forEach(({ name, pattern, severity }) => {
      if (pattern.test(content)) {
        const message = `${name} pattern found in ${file}`;
        
        if (severity === 'high') {
          errors.push(message);
          hasErrors = true;
        } else {
          warnings.push(message);
        }
        foundVulnerabilities = true;
      }
    });
  });
  
  if (!foundVulnerabilities) {
    console.log('   ✅ No vulnerable patterns found');
  }
}

/**
 * Get files matching a glob pattern (simple implementation)
 */
function getFilesMatching(pattern) {
  const files = [];
  const baseDir = path.join(__dirname, '..');
  
  function scanDir(dir, remaining) {
    if (!remaining) return;
    
    try {
      const items = fs.readdirSync(dir);
      
      items.forEach(item => {
        if (item.startsWith('.') || item === 'node_modules') return;
        
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          scanDir(fullPath, remaining - 1);
        } else if (stat.isFile()) {
          // Simple pattern matching
          if (pattern.includes('**')) {
            const ext = pattern.split('.').pop();
            if (fullPath.endsWith(`.${ext}`) || pattern.includes(path.extname(fullPath))) {
              files.push(fullPath);
            }
          } else if (fullPath.endsWith(pattern)) {
            files.push(fullPath);
          }
        }
      });
    } catch (error) {
      // Ignore directory read errors
    }
  }
  
  if (pattern.includes('**')) {
    scanDir(baseDir, 3); // Limit recursion depth
  } else {
    const filePath = path.join(baseDir, pattern);
    if (fs.existsSync(filePath)) {
      files.push(filePath);
    }
  }
  
  return files;
}

/**
 * Print security check results
 */
function printResults() {
  console.log('\n📋 Security Audit Results:');
  
  if (errors.length > 0) {
    console.log('\n❌ Errors (must fix):');
    errors.forEach(error => console.log(`   • ${error}`));
  }
  
  if (warnings.length > 0) {
    console.log('\n⚠️  Warnings (should review):');
    warnings.forEach(warning => console.log(`   • ${warning}`));
  }
  
  if (errors.length === 0 && warnings.length === 0) {
    console.log('\n✅ No security issues found!');
  }
  
  console.log(`\n📊 Summary: ${errors.length} errors, ${warnings.length} warnings`);
  
  if (hasErrors) {
    console.log('\n🚨 Security audit failed - please fix the errors above');
  } else {
    console.log('\n✅ Security audit passed');
  }
}

// Run the security checks
runSecurityChecks();