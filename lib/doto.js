/**
 * Doto
 * Copyright (C) 2012 Erin Carter <hi@dnvsfn.com> (http://github.com/ecarter)
 * MIT Licensed
 */

/** Exports */
exports = module.exports = Doto;

/**
 * Doto constructor
 *
 * @param {Object} setup Doto configuration properties
 * @return {Object} new Doto instance
 */

function Doto ( setup ) {
  if ( !(this instanceof Doto) ) {
    return Doto.create( setup );
  }
  return this;
}

Doto.create = require('./create');

Doto.prototype.parse = require('./parse');
Doto.prototype.read = require('./read');
Doto.prototype.run = require('./run');
Doto.prototype.save = require('./save');
Doto.prototype.setup = require('./setup');