/**
 * Doto - parse
 * Copyright (C) 2012 Erin Carter <hi@dnvsfn.com> (http://github.com/ecarter)
 * MIT Licensed
 */

/**
 * Parses content for TO-DO comments
 *
 * @param {String} content Content to parse for TO-DO comments
 * @param {Object} options Parsing options
 * @return {Array} Array of TO-DO comments found in `content`
 */

module.exports = function ( content, options ) {
  
  var parsed
    , lines;
  
  options = options || {};
  parsed = [];
  
  options.pattern = options.pattern || /^(.*)\/\/\sTODO?:?(.*)$/;
  
  if ( typeof content !== 'string' ) {
    return new Error ('#parse() requires argument `content` {String}')
  }
  
  lines = content.split(/\r?\n/);
  
  lines.forEach( function (line, i) {
    
    var body
      , comment;
    
    if ( options.pattern.exec(line) ) {
      
      body = RegExp.$1;
      comment = RegExp.$2;
      
      parsed.push({
        line: i + 1
      , body: body.replace(/^\s/g,'').replace(/\s$/g,'')
      , comment: comment.replace(/^\s/g,'').replace(/\s$/g,'')
      });
    }
    
  });
  
  return parsed;
};

