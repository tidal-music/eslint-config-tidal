# eslint-config-tidal

[![NPM downloads](https://img.shields.io/npm/dm/eslint-config-tidal.svg 'NPM downloads')](https://www.npmjs.com/package/eslint-config-tidal)
[![NPM version](https://img.shields.io/npm/v/eslint-config-tidal.svg 'NPM version')](https://www.npmjs.com/package/eslint-config-tidal)


> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the TIDAL web frontend code style using the new [flat config format](https://eslint.org/docs/latest/use/configure/configuration-files-new).

## Usage

We export one ESLint configuration for your usage (including Prettier for formatting).

Install the package as a `devDependency`: `@tidal-music/eslint-config-tidal` along with `eslint` (and possible any plugins/configs that should be project specific).

Add a root `eslint.config.js` file, similar to this:

```
import tidal from '@tidal-music/eslint-config-tidal';

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  ...tidal,
  {
    files: ['*.js', '**/*.js', '**/*.ts', '**/*.tsx'],
  },
  {
    ignores: [
      'node_modules/*',
      /* Build output folders, etc */
    ],
  },
  /* Add any overrides here */
];
```

For running from a shell you can add an entry in `package.json`s `scripts` like this:
```
"lint:code": "eslint . --cache --cache-strategy content",
```
(which will also cache results, so re-runs are faster)
### VSCode setup

Install the plugin: [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

And then ensure you have this in your workspace or user settings:
```
  "[javascript][typescript][typescriptreact][json]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.experimental.useFlatConfig": true
```
(This will auto-fix and auto format the files on save.)

## Philosophy

This package is pretty opinionated, if some rules are not suitable in your context they can be disable in your `eslint.config.js` or set to warnings instead of errors, if it makes sense to push for them eventually.

In this package however rules should (ideally) either be "error" or "off".


## Development:

In the package you want to lint: (assuming it is in a sibling folder)
`yarn link ../eslint-config-tidal`
