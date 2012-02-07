describe('Doto Constructor', function(){
  
  var Doto = require('../');
  
  describe('new Doto()', function(){
    it('should return new instance of Doto', function(){
      var doto = new Doto();
      doto.should.be.instanceof(Doto);
      doto.should.respondTo('parse');
      doto.should.respondTo('read');
      doto.should.respondTo('setup');
    })
  })
  
  describe('Doto()', function(){
    it('should return new instance of Doto', function(){
      var doto = Doto();
      doto.should.be.instanceof(Doto);
      doto.should.respondTo('parse');
      doto.should.respondTo('read');
      doto.should.respondTo('setup');
    })
  })
  
  describe('Doto.create()', function(){
    it('should return new instance of Doto', function(){
      var doto = Doto.create();
      doto.should.be.instanceof(Doto);
      doto.should.respondTo('parse');
      doto.should.respondTo('read');
      doto.should.respondTo('setup');
    })
  })
  
})