/* eslint-disable */
export default {
  displayName: 'back-api',
  preset: '../../../jest.preset.js',
  testEnvironment: 'node',
  testMatch: ['**/*.e2e-spec.ts'],
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.e2e-spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
};
