## 4.0.0
* Big dependency update, ESLint 9, typescript-eslint 8, +++
* Drop XO as we do not want the Stylistic rules (we use Prettier for that)
* New rules include: alphabetical sorting of switch cases

## 3.2.0
* Update dependencies

## 3.1.0
* Switch code coverage ignore rule from Istanbul to V8 syntax (as we have switched)
* Fix running (Prettier) on Windows, as line-endings may be different (caused by git)
* Update dependencies, a Prettier change to nested ternaries is likely to cause errors

## 3.0.0
* Switch to new Eslint "flat" config format
* Only expose one rule-set
* Based on XO (like v1) but including some rules from v2 (like `eslint-plugin-jsx-a11y` and `confusing-browser-globals`) and rules from other repos
* Includes Prettier for formatting
* Enforces alphabetical sorting of most things, using `eslint-plugin-perfectionist`

## 2.0.0
* Rewrite based on AirBnB config
(Was never published to NPM, only used from GitHub)

## 1.x.x
* Initial shared Eslint configs
