module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
        "es6": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no--debugger": "off",
        "no-console": "off",
        "react/prop-types": "warn",
        "no-unused-vars": "warn",
    },
    "settings": {
        "react": {
            "version": "detect"
        },
        "node": {
            "version": "detect"
        }
    },
    "root": true,
};
