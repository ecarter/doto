/**
 * Doto - setup
 * Copyright (C) 2012 Erin Carter <hi@dnvsfn.com> (http://github.com/ecarter)
 * MIT Licensed
 */

/**
 * Adds configuration properties to Doto instance.
 *
 * @param {Object} config Configuration properties
 * @return {Object} Doto instance
 */

module.exports = function ( config ) {
  
  if ( !(config instanceof Object) ) {
    return new Error ('#setup() requires argument `config` {Object}');
  }
  
  for ( var property in config ) {
    this[ '_' + property ] = config[ property ];
  }
  
  return this;
};

