'use strict';
var path = require('path');

module.exports = function(filepath, ext) {
	var fileExt = path.extname(filepath).slice(1).toLowerCase();

	if (typeof ext === 'object') {
		// credits to sindresorhus https://github.com/sindresorhus/is-video/blob/master/index.js
		var exts = Object.create(null);

		ext.forEach(function (el) {
			exts[el.toLowerCase()] = true;
		});

		return fileExt.toLowerCase() in exts;
	} else {
		return (fileExt === ext.toLowerCase());
	}
};
