import nextJest from "next/jest";

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  clearMocks: true,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  moduleDirectories: ["node_modules", "<rootDir>"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};

export default createJestConfig(customJestConfig);
