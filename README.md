# eslint-config-tidal

[![NPM downloads](https://img.shields.io/npm/dm/eslint-config-tidal.svg 'NPM downloads')](https://www.npmjs.com/package/eslint-config-tidal)
[![NPM version](https://img.shields.io/npm/v/eslint-config-tidal.svg 'NPM version')](https://www.npmjs.com/package/eslint-config-tidal)


> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the TIDAL web frontend code style using the new [flat config format](https://eslint.org/docs/latest/use/configure/configuration-files-new).

## Usage

We export one ESLint configuration for your usage (including Prettier for formatting).

Install the package as a `devDependency`: `eslint-config-tidal` along with `eslint` (and possible any plugins/configs that should be project specific).

Add a root `eslint.config.js` file, similar to this:

```
import tidal from 'eslint-config-tidal';

/** @type { import("eslint").Linter.Config[] } */
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

This depends on your `package.json` including `"type": "module"`. If that is not possible, you can work around that by renaming your `eslint.config.js` to: `eslint.config.mjs` and launching it like this instead: `ESLINT_USE_FLAT_CONFIG=true eslint . --config eslint.config.mjs`. This means you will need to update any scripts that use `eslint` to be called this way though, like `lint-staged` and IDE integration (currently not possible for Webstorm: https://youtrack.jetbrains.com/issue/WEB-61117).

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
  "eslint.useFlatConfig": true
```
(This will auto-fix and auto format the files on save.)

PS: If you needed the workaround for not using `"type": "module"` above, you will also need:
```
"eslint.options": {
    "overrideConfigFile": "eslint.config.mjs"
  }
```

## Philosophy

This package is pretty opinionated, if some rules are not suitable in your context they can be disable in your `eslint.config.js` or set to warnings instead of errors, if it makes sense to push for them eventually.

In this package however rules should (ideally) either be "error" or "off".


## Development:

In the package you want to lint: (assuming it is in a sibling folder)
`pnpm|yarn|npm link ../eslint-config-tidal`

### Updating dependencies:
Normally handled by Renovate, but if you want to do it manually:
`pnpm update --interactive --latest`


### Publishing
Done locally for now (using `pnpm publish` and manual git tagging).
