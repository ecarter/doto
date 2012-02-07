/**
 * Doto - read
 * Copyright (C) 2012 Erin Carter <hi@dnvsfn.com> (http://github.com/ecarter)
 * MIT Licensed
 */

/** Requires */
var fs = require('fs');

/**
 * Reads files to be parsed.
 *
 * @param {String} search File or Directory path
 * @param {Object} options Read options `{ recursive: true|false }`
 * @return {Array} Array of read files
 */

module.exports = function ( search, options, done ) {
  var self;
  
  self = self || this;
  search = search || './';
  options = options || {};
  options.recursive = options.recursive || false;
  options.ignore = options.ignore || [];
  options.hidden = options.hidden || false;
  
  var doRead = true;
  
  if ( options.hidden === false && /^\./.test( basename(search) ) ) {
    doRead = false;
  }
  
  // TODO: passes tests but needs review
  if ( Array.isArray( options.ignore ) ) {
    options.ignore.forEach( function (ignore) {
      if ( ~search.indexOf( ignore ) ) {
        doRead = false;
      }
    });
    
  } else if ( ~options.ignore.indexOf( search ) ) {
    doRead = false;
  }
  
  if ( doRead ) {
    fs.lstat( search, function ( err, stats ) {
    
      if ( stats.isDirectory() ) {
        fs.readdir( search, function ( err, dirFiles ) {
          dirFiles.forEach( function ( file ) {
            self.read( search + '/' + file, options, done );
          });
        });
      
      } else if ( stats.isFile() ) {
        self._found++;
      
        fs.readFile(search, function ( err, data ) {
          if (err) throw err;
        
          self._read++;
        
          self._files.push({
            file: search
          , content: data.toString()
          })
        
          if ( self._read === self._found ) {
            done(null, self._files);
          }
        
        });
      }
    });
  
  }
};


/**
 * Returns base name of path
 */

function basename ( path ) {
  path = path.split('/');
  return path[path.length-1];
}

