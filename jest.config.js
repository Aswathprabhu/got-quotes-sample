const path = require('path');

module.exports = {
  testEnvironment: 'jsdom',
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.{ts,vue}',
    '!**/*.spec.ts',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 1,
      lines: 1,
      statements: 1,
    },
  },
  coverageReporters: ['text-summary', 'lcov'],
  moduleFileExtensions: ['js', 'vue'],
  moduleDirectories: ['node_modules', __dirname],
  cacheDirectory: '.jest-cache',
  bail: true,
  transform: {
    '.*\\.(vue)$': '@vue/vue2-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: ['**/__tests__/**/*.spec.js'],
};
