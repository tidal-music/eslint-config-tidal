# eslint-config-tidal

[![NPM downloads](https://img.shields.io/npm/dm/eslint-config-tidal.svg 'NPM downloads')](https://www.npmjs.com/package/eslint-config-tidal)
[![NPM version](https://img.shields.io/npm/v/eslint-config-tidal.svg 'NPM version')](https://www.npmjs.com/package/eslint-config-tidal)


> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the TIDAL Code Style using the new [flat config format](https://eslint.org/docs/latest/use/configure/configuration-files-new).

## Usage

We export one ESLint configuration for your usage (including Prettier for formatting).

### eslint-config-tidal

TODO document new setup


## Philosophy

This package is pretty opinionated, if some rules are not suitable in your context they can be disable in your `eslint.config.js` or set to warnings instead of errors, if it makes sense to push for them eventually.

In this package however rules should (ideally) either be "error" or "off".


## Development:

In the package you want to lint: (assuming it is in a sibling folder)
`yarn link ../eslint-config-tidal`
