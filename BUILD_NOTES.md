# Build Notes

## Known Issues

### SSR Build Issue (Phase 3)
- The production build currently fails due to React import issues at the Docusaurus framework level
- Development server works correctly (`npm start`)
- Error: "ReferenceError: React is not defined at TitleFormatterProvider"
- This is a Docusaurus framework-level issue likely caused by dependency updates
- **STATUS**: Deployment fixes applied by temporarily disabling problematic components

### Applied Fixes
- Disabled ErrorBoundary and StructuredData components for SSR compatibility
- Added SSR guards to performance monitoring utilities
- Made browser-specific code conditional on `typeof window !== 'undefined'`
- Performance tracking temporarily disabled in production builds

### Workaround for Development
- Development server works correctly: `npm start`
- All Phase 3 features are functional in development mode
- Error handling and performance monitoring are temporarily disabled in production builds

### Long-term Resolution Required
- Investigate specific dependency causing SSR issues
- Consider Docusaurus version update to resolve framework-level React import issues
- Alternative: selective dependency rollback of packages that broke SSR