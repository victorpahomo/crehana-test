module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  rootDir: "../../../",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$": "<rootDir>/src/testing/mocks/styleMock.js",
  },
  setupFilesAfterEnv: ["<rootDir>/src/testing/config/jest-setup.js"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": [
      "ts-jest",
      {
        tsconfig: "<rootDir>/src/testing/config/tsconfig.jest.json",
      },
    ],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
