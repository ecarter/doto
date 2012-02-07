/**
 * Doto - create
 * Copyright (C) 2012 Erin Carter <hi@dnvsfn.com> (http://github.com/ecarter)
 * MIT Licensed
 */

/**
 * Creates a new Doto instance.
 *
 * @param {Object} setup Doto configuration properties
 * @return {Object} new Doto instance
 */

module.exports = function ( setup ) {
  
  var instance;
  
  setup = setup || {};
  
  if ( !(setup instanceof Object) ) {
    return new Error ('create() requires argument `setup` {Object}');
  }
  
  // Pass defaults to setup
  setup.files = setup.files || [];
  setup.found = setup.found || 0;
  setup.read = setup.read || 0;
  
  instance = new this();
  instance.setup( setup );
  
  return instance;
};

