# webapps

- nextjs: https://nextjs.org/learn

- linting:
  - eslint: https://eslint.org/docs/user-guide/getting-started
  - prettier: https://prettier.io/docs/en/install.html
  - eslint-plugin-prettier
  - eslint-config-prettier
  - eslint-plugin-jsdoc
  - basic eslint file:

```json
{
  "env": { "es2021": true },
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:jsdoc/recommended"
  ],
  "overrides": [],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {}
}
```
