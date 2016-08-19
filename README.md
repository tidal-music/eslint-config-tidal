# eslint-config-tidal 

[![Build Status](https://travis-ci.org/tidal-engineering/eslint-config-tidal.svg?branch=master)](https://travis-ci.org/tidal-engineering/eslint-config-tidal)
[![Codacy grade](https://img.shields.io/codacy/grade/e20818172062471ebc0c1b69e5ea0887.svg "Codacy grade")](https://www.codacy.com/app/karlsson/eslint-config-tidal)
[![NPM downloads](https://img.shields.io/npm/dm/eslint-config-tidal.svg "NPM downloads")](https://www.npmjs.com/package/eslint-config-tidal)
[![NPM version](https://img.shields.io/npm/v/eslint-config-tidal.svg "NPM version")](https://www.npmjs.com/package/eslint-config-tidal)
[![Node version](https://img.shields.io/node/v/eslint-config-tidal.svg "Node version")](https://www.npmjs.com/package/eslint-config-tidal)
[![Dependency status](https://img.shields.io/david/tidal-engineering/eslint-config-tidal.svg "Dependency status")](https://david-dm.org/tidal-engineering/eslint-config-tidal)

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the TIDAL Code Style.

## Install

```
$ npm install --save-dev eslint eslint-config-tidal
```
## Usage

Put this in `.eslintrc`:

```
{
  "extends": "tidal"
}
```

You might also want to add these under "scripts" to your `package.json`:

```
"eslint": "eslint path/to/**/*.js",
"eslint-auto-fix": "eslint path/to/**/*.js --fix"
```
