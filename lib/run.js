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
    , self;
  
  options = options || {};
  options.search = options.search || './';
  self = self || this;
  self.file = options.file || null;
  
  output = '';
  
  // Header
  output += '# TO-DO';
  
  // Read files
  self.read( options.search, options, function ( err, files ) { // TODO: options {} ?
    
    // Each file
    files.forEach( function ( file ) {
      
      // Parse file
      var parsed = self.parse( file.content );
      
      if ( parsed.length > 0 ) {
        
        // Section Separator
        output += '\n\n---\n';
        
        // File header
        output += '\n## ';
        output += file.file.replace(options.search + '/', '').replace(/\//g, ' / ');
        output += '\n';
        
        parsed.forEach( function ( item ) {
        
          // To-do Comment & Line Number
          output += '\n* __[line ' + item.line + '](' + file.file + '#L' + item.line + ') ';
          output += item.comment;
          output += item.body ? ':' : '';
          output += '__ ';
        
          // To-Do body
          if ( item.body ) {
            output += ' ```' + item.body + '```' + '\n';
          }
        });
      
      }
      
    });
    
    output += '\n\n';
    
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

