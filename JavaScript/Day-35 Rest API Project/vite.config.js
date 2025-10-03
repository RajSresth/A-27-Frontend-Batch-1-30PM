import { defineConfig } from 'vite'

export default defineConfig({
  // Default settings (usually omitted as they're applied automatically)
  root: './',              // Project root
  base: '/',               // Public base path
  publicDir: 'public',     // Static assets directory
  
  // Server configuration
  server: {
    port: 5173,            // Dev server port
    host: 'localhost',     // Dev server host
    open: true,           // Auto-open browser
    strictPort: false,     // Exit if port is in use
    cors: true             // Enable CORS
  },

  // Build configuration
  build: {
    outDir: 'dist',        // Output directory
    assetsDir: 'assets',   // Assets subdirectory
    sourcemap: false,      // Generate source maps
    minify: 'esbuild',     // Minification method
    target: 'es2015',      // Browser compatibility target
    rollupOptions: {}      // Rollup-specific options
  },

  // CSS configuration
  css: {
    modules: {},           // CSS modules options
    postcss: {},           // PostCSS options
    preprocessorOptions: {} // Sass/Less options
  }
})

