describe('#save()', function(){
  
  var Doto = require('../')
    , fs = require('fs')
    , content
    , testFile
    , generatedFile
  
  before(function(){
    testFile = './test/TEST-TODO.md';
    generatedFile = './test/GENERATED-TEST-TODO.md';
    content = fs.readFileSync(testFile).toString();
  })
  
  after(function(){
    fs.unlinkSync('./test/GENERATED-TEST-TODO.md');
  })
  
  it('should save contents to file', function(done){
    Doto().run({
        search: './test/test-project'
      , file: generatedFile
      }, function () {
          fs.readFileSync(generatedFile).toString().should.eql(content);
          done();
      });
  })
  
})
