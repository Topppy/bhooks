module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  clearMocks: true,
  testPathIgnorePatterns: ["/.history/"],
  testEnvironment: "jsdom",
  modulePathIgnorePatterns: ["<rootDir>/package.json"],
  resetMocks: false,
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
};
