module.exports = {
  setupFiles: [
    './configs/setupTests.ts',
  ],
  preset: 'ts-jest',
  moduleNameMapper: {
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^constants/(.*)$': '<rootDir>/src/constants/$1',
  },
  collectCoverageFrom: [
    "src/**/*.ts*"
  ],
  testEnvironment: 'node',
};
