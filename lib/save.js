/**
 * Doto - save
 * Copyright (C) 2012 Erin Carter <hi@dnvsfn.com> (http://github.com/ecarter)
 * MIT Licensed
 */

/** Requires */
var fs = require('fs');

/**
 * Saves output to file.
 */

module.exports = function ( content, options, done ) {
  
  content = content || this._generated || '';
  options = options || {};
  options.file = options.file || this.file || 'TODO.md';
  
  if ( arguments.length === 1 && typeof arguments[0] === 'function' ) {
    done = arguments[0];
  } else if ( arguments.length === 2 && typeof arguments[1] === 'function' ) {
    done = arguments[1];
  }
  
  fs.writeFile( options.file, content, function (err) {
    if (err) throw err;
    if (done) done();
  });
  
};

