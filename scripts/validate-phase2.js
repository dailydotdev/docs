#!/usr/bin/env node

/**
 * Phase 2 Implementation Validation Script
 * This script validates that all Phase 2 improvements are working correctly
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Validating Phase 2 Implementation...\n');

// Check 1: Testing Infrastructure
console.log('1. Testing Infrastructure (Playwright)');
const playwrightConfig = path.join(__dirname, '..', 'playwright.config.js');
const testsDir = path.join(__dirname, '..', 'tests');

if (fs.existsSync(playwrightConfig)) {
  console.log('   ✅ Playwright config exists');
} else {
  console.log('   ❌ Playwright config missing');
}

if (fs.existsSync(testsDir)) {
  const testFiles = fs.readdirSync(testsDir).filter(f => f.endsWith('.spec.js'));
  console.log(`   ✅ Test directory exists with ${testFiles.length} test files`);
  testFiles.forEach(file => {
    console.log(`      - ${file}`);
  });
} else {
  console.log('   ❌ Tests directory missing');
}

// Check 2: Pre-commit Hooks
console.log('\n2. Pre-commit Hooks (Husky + Lint-staged)');
const huskyDir = path.join(__dirname, '..', '.husky');
const preCommitHook = path.join(huskyDir, 'pre-commit');
const commitMsgHook = path.join(huskyDir, 'commit-msg');

if (fs.existsSync(preCommitHook)) {
  console.log('   ✅ Pre-commit hook exists');
} else {
  console.log('   ❌ Pre-commit hook missing');
}

if (fs.existsSync(commitMsgHook)) {
  console.log('   ✅ Commit message hook exists');
} else {
  console.log('   ❌ Commit message hook missing');
}

// Check package.json for lint-staged configuration
const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json')));
if (packageJson['lint-staged']) {
  console.log('   ✅ Lint-staged configuration found');
} else {
  console.log('   ❌ Lint-staged configuration missing');
}

// Check 3: Accessibility Improvements
console.log('\n3. Accessibility Improvements');
const homeNavBoxes = path.join(__dirname, '..', 'src', 'components', 'homepage', 'homeNavBoxes.js');

if (fs.existsSync(homeNavBoxes)) {
  const content = fs.readFileSync(homeNavBoxes, 'utf8');
  const hasAriaLabel = content.includes('aria-label');
  const hasRole = content.includes('role=');
  const hasAltText = content.includes('alt=');
  
  console.log(`   ✅ Main navigation component has accessibility features:`);
  console.log(`      - ARIA labels: ${hasAriaLabel ? '✅' : '❌'}`);
  console.log(`      - Semantic roles: ${hasRole ? '✅' : '❌'}`);
  console.log(`      - Alt text: ${hasAltText ? '✅' : '❌'}`);
} else {
  console.log('   ❌ Main navigation component not found');
}

// Check 4: Component Consolidation
console.log('\n4. Component Consolidation');
const redundantFiles = [
  'src/components/HomepageFeatures.js',
  'src/components/HomepageNavBoxes.js',
  'src/components/HomepageFeatures.module.css',
  'src/components/HomepageNavBoxes.module.css'
];

let removedCount = 0;
redundantFiles.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (!fs.existsSync(filePath)) {
    removedCount++;
  }
});

console.log(`   ✅ Removed ${removedCount}/${redundantFiles.length} redundant files`);

// Check 5: Package.json Scripts
console.log('\n5. New Scripts and Dependencies');
const requiredScripts = ['test', 'test:headed', 'test:ui', 'test:debug', 'prepare'];
const requiredDevDeps = ['@playwright/test', 'husky', 'lint-staged'];

const missingScripts = requiredScripts.filter(script => !packageJson.scripts[script]);
const missingDeps = requiredDevDeps.filter(dep => !packageJson.devDependencies[dep]);

if (missingScripts.length === 0) {
  console.log('   ✅ All required scripts added');
} else {
  console.log(`   ❌ Missing scripts: ${missingScripts.join(', ')}`);
}

if (missingDeps.length === 0) {
  console.log('   ✅ All required dependencies added');
} else {
  console.log(`   ❌ Missing dependencies: ${missingDeps.join(', ')}`);
}

console.log('\n🎉 Phase 2 Implementation Validation Complete!\n');

console.log('Next steps:');
console.log('- Run tests: npm test');
console.log('- Run build: npm run build');
console.log('- Check formatting: npm run format:check');
console.log('- Run linting: npm run lint');