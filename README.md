# eslint-config-tidal

[![Build Status](https://travis-ci.org/tidal-engineering/eslint-config-tidal.svg?branch=master)](https://travis-ci.org/tidal-engineering/eslint-config-tidal)
[![Codacy grade](https://img.shields.io/codacy/grade/e20818172062471ebc0c1b69e5ea0887.svg 'Codacy grade')](https://www.codacy.com/app/karlsson/eslint-config-tidal)
[![NPM downloads](https://img.shields.io/npm/dm/eslint-config-tidal.svg 'NPM downloads')](https://www.npmjs.com/package/eslint-config-tidal)
[![NPM version](https://img.shields.io/npm/v/eslint-config-tidal.svg 'NPM version')](https://www.npmjs.com/package/eslint-config-tidal)
[![Node version](https://img.shields.io/node/v/eslint-config-tidal.svg 'Node version')](https://www.npmjs.com/package/eslint-config-tidal)
[![Dependency status](https://img.shields.io/david/tidal-engineering/eslint-config-tidal.svg 'Dependency status')](https://david-dm.org/tidal-engineering/eslint-config-tidal)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the TIDAL Code Style.

## Usage

We export six ESLint configurations for your usage.

### eslint-config-tidal

Our default export contains all of our base ESLint rules. It requires `eslint` and `eslint-plugin-import`.

1. Install the correct versions of each package, which are listed by the command:

```sh
npm info "eslint-config-tidal@latest" peerDependencies
```

If using **npm 5+**, use this shortcut

```sh
npx install-peerdeps --dev eslint-config-tidal
```

If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly.
Otherwise, run `npm info "eslint-config-tidal@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.

Which produces and runs a command like:

```sh
npm install --save-dev eslint-config-tidal eslint-plugin-import
```

2. Add `"extends": "tidal"` to your `.eslintrc`

### eslint-config/tidal/prettier

This entry point enables the linting rules for Prettier. To use, add `"extends": ["tidal", "tidal/prettier"]` to your `.eslintrc`.
Additional required packages: `eslint-config-prettier`.

### eslint-config/tidal/flow

This entry point enables the linting rules for Flow. To use, add `"extends": ["tidal", "tidal/flow"]` to your `.eslintrc`.
Additional required packages: `eslint-plugin-flowtype`.

### eslint-config/tidal/react

This entry point enables the linting rules for React (requires v16.8+). To use, add `"extends": ["tidal", "tidal/react"]` to your `.eslintrc`.
Additional required packages: `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-jest`, `eslint-plugin-jsx-a11y`.

### eslint-config/tidal/typescript

This entry point enables the linting rules for Typescript. To use, add `"extends": ["tidal", "tidal/react"]` to your `.eslintrc`.
Additional required packages: `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`.
