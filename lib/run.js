/**
 * Doto - run
 * Copyright (C) 2012 Erin Carter <hi@dnvsfn.com> (http://github.com/ecarter)
 * MIT Licensed
 */

/**
 * Runs Doto instance, reads files, parses content for TO-DO comments
 */

module.exports = function ( options, done ) {
  
  var output
    , self
    , parseOptions;
  
  self = self || this;
  
  if ( arguments.length === 1 && typeof arguments[0] === 'function' ) {
    done = arguments[0];
  }
  
  // Set Options
  options = typeof options === 'function' ? {} : options;
  options.search = options.search || self._search || './';
  options.file = options.file || self._file || null;
  options.ignore = options.ignore || self._ignore || [];
  
  parseOptions = {};
  
  if ( options.pattern ) { // TODO: needs regexp validation
    parseOptions.pattern = options.pattern;
  }

  // TODO: formatting options should be configurable / templated
  
  output = ''; // Buffer
  
  // Header
  output += options.title || '# TO-DO';
  
  // Read files
  self.read( options.search, options, function ( err, files ) {
    
    // Each file
    files.forEach( function ( file ) {
      
      // Parse file
      var parsed = self.parse( file.content, parseOptions )
        , filename = file.file.replace(options.search + '/', '');

      if ( parsed.length > 0 ) {
        
        // Section Separator
        output += '\n';
        output += options.separator || '\n---\n';
        
        // File header
        output += '\n## ';
        output += filename.replace(/\//g, ' / ');
        output += '\n';
        
        parsed.forEach( function ( item ) {
          
          item.body = item.body.replace(/^\s+|\s+$/g, '') || '';
          
          // Comment & Line Number
          output += '\n* __[line ' + item.line + '](' + filename + '#L' + item.line + ') ';
          output += item.comment;
          output += item.body ? ':' : '';
          output += '__ ';
        
          // Body
          if ( item.body != '' && item.body != null ) {
            output += ' `' 
                    + item.body.replace(/^\s+|\s+$/g, '')
                    + '`' + '\n';
          }
        });
      
      }
      
    });
    
    output += '\n';
    
    self._generated = output; // TODO: potential memory / preformance issue
    
    // Save
    if ( options.file ) {
      self.save( output, { file: options.file }, function () {
        done.call(self, output);
      });
    
    // fire callback
    } else {
      done.call(self, output);
    }
    
  });
  
  return this;
};

