module.exports = {
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "\\.(css|scss)$": "identity-obj-proxy"
    },
    collectCoverageFrom: ["src/**/*.{ts,tsx}", "!src/index.tsx"],
    coverageThreshold: {
        global: {
            branches: 95,
            functions: 95,
            lines: 95,
            statements: 95,
        },
    },
    setupFilesAfterEnv: ["<rootDir>/scripts/setupTest.js"],
}
