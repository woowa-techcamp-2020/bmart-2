module.exports = {
  globDirectory: 'build/',
  globPatterns: ['**/*.{png,ico,html,js,css,json,txt}'],
  globIgnores: ['**/service-worker.js', 'node_modules/**/*'],
  swDest: 'build/service-worker.js',
  swSrc: './src/service-worker.js',
};
