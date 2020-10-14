module.exports = {
  setupFiles: [
    './configs/setupTests.ts',
  ],
  preset: 'ts-jest',
  moduleNameMapper: {
    '^constants/(.*)$': '<rootDir>/src/constants/$1',
  },
  collectCoverageFrom: [
    "src/**/*.ts*"
  ],
  testEnvironment: 'node',
};
