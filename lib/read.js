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
  
  var self
    , doRead
    ;
  
  self = self || this;
  self._search = self._search || search;
  
  // Set Options
  options = options || {};
  options.search = options.search || options._search || './';
  options.sort = options.sort || true;
  options.recursive = options.recursive === false
                      ? false
                      : self._recursive || true;
  
  options.ignore = options.ignore || self._ignore || [];
  options.hidden = options.hidden || self._hidden || false;
   
  doRead = true;
  
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
  
  // TODO: file order causes errors in #read() test
  if ( doRead ) {
    fs.lstat( search, function ( err, stats ) {
    
      if ( stats.isDirectory() && ( search === self._search || options.recursive ) ) {
        fs.readdir( search, function ( err, dirFiles ) {
          dirFiles.forEach( function ( file ) {
            self.read( search + '/' + file, options, done );
          });
        });
      } else if ( stats.isDirectory() ) {
        return done;
        
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
            if ( options.sort ) {
              self._files.sort( function ( a, b ) {
                return a > b ? 1 : a < b ? -1 : 0;
              });
            }
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

