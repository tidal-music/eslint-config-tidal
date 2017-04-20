'use strict';

const path = require('path');

module.exports = {
  extends: path.join(__dirname, 'index.js'),
  env: {
		node: false,
    es6: false,
		browser: true
	}
};
