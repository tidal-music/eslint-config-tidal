# eslint-config-tidal 

[![Build Status](https://travis-ci.org/tidal-engineering/eslint-config-tidal.svg?branch=master)](https://travis-ci.org/tidal-engineering/eslint-config-tidal)
[![Codacy grade](https://img.shields.io/codacy/grade/e20818172062471ebc0c1b69e5ea0887.svg "Codacy grade")](https://www.codacy.com/app/karlsson/eslint-config-tidal)

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
