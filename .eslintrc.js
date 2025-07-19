module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jsx-a11y',
  ],
  rules: {
    // Disable console in production
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    
    // React specific rules (relaxed for Docusaurus)
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    
    // Accessibility rules
    'jsx-a11y/alt-text': 'warn', // Warning instead of error for now
    
    // Code quality (relaxed for existing code)
    'no-unused-vars': ['warn', { 
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^(React|Link|Layout|Head|Suspense|Redirect)$' // Allow common React/Docusaurus imports
    }],
    'prefer-const': 'warn',
    'no-var': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: [
    'build/',
    'node_modules/',
    '.docusaurus/',
  ],
};