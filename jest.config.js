module.exports = {
  setupFiles: [
    './configs/setupTests.ts',
  ],
  preset: 'ts-jest',
  moduleNameMapper: {
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^constants/(.*)$': '<rootDir>/src/constants/$1',
    '^hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^lib/(.*)$': '<rootDir>/src/lib/$1',
  },
  collectCoverageFrom: [
    "src/**/*.ts*",
    "!src/**/stories.*"
  ],
  testEnvironment: 'node',
};
