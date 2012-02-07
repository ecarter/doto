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
  output += '# TO-DO\n';
  
  // Read files
  self.read( options.search, {}, function ( err, files ) { // TODO: options {} ?
    
    // Each file
    files.forEach( function ( file ) {
      
      // Section Separator
      // output += '\n---\n';
      
      // File header
      output += '\n## ';
      output += file.file.replace(options.search + '/', '').replace(/\//g, ' / ');
      output += '\n';
      
      // Parse file
      var parsed = self.parse( file.content );
      parsed.forEach( function ( item ) {
        
        // Line Number
        output += '\n* line ' + item.line;
        
        // To-Do Comment
        output += ': ' + item.comment + '\n\n';
        
        // To-Do body
        output += '  ' + item.body + '\n';
      });
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

