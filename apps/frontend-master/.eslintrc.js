/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: ["../../.eslintrc.js", "next/core-web-vitals"],
    env: {
        browser: true,
        node: true,
        es2022: true,
    },
    ignorePatterns: ["next-env.d.ts"],
};
