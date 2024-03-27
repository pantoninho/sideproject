# pantostack

## monorepo structure

- `apps/`: deployable applications
- `packages/`: reusable packages
- `.eslintrc`: base eslint configuration

## base linting

- [`eslint`](https://eslint.org/)
- [`prettier`](https://prettier.io/)
- [`eslint-plugin-prettier`]()
- [`eslint-config-prettier`]()
- [`eslint-plugin-jsdoc`]()

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

## apps

### `apps/web`: [`nextjs`](https://nextjs.org/learn) application

#### ui

- [`tailwindcss`](https://tailwindcss.com/docs): utility-first css classes
  - use `tailwindcss-intellisense` vscode plugin for better developer experience
  - use `eslint-plugin-tailwindcss` for linting
- [`shadcn`](https://ui.shadcn.com): unstyled tailwind component library
- [`v0`](https://v0.dev): AI generated prototypes of ui components that uses `shadcn`

#### data layer

- [`neon`](https://neon.tech): psql databases as service
- [`drizzle`](https://drizzle.team): query builder/ORM
