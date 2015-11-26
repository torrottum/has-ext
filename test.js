'use strict';
import test from 'ava';
var hasExt = require('./');

test((t) => {
	t.assert(hasExt('file.txt', 'txt'));
	t.assert(hasExt('file.txT', 'tXt'));
	t.assert(hasExt('file.png', ['png', 'jpg']));
	t.assert(hasExt('file.jpg', ['png', 'jpg']));
	t.assert(!hasExt('file.png', 'txt'));
	t.assert(!hasExt('filetxt', 'txt'));
	t.assert(!hasExt('file.txt', ['png', 'jpg']));
	t.end();
});
