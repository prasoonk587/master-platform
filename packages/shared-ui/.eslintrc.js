/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: ["../../.eslintrc.js"],
    env: {
        browser: true,
        es2022: true,
    },
    rules: {
        "react/react-in-jsx-scope": "off",
    },
};
