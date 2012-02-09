describe('#run()', function(){
  
  var Doto = require('../');
  
  var content = '# TO-DO\n\n---\n\n## file1\n\n* __[line 4](./test/test-project/file1#L4) to-do item in file1:__  ```* Sapiente ea accusamus vinyl brunch.```\n\n\n---\n\n## file2\n\n* __[line 6](./test/test-project/file2#L6) to-do item in file2 (1 of 2):__  ```Etsy locavore sartorial, irony assumenda dolore PBR art party fugiat quis +1. Eu helvetica pitchfork four loko freegan ullamco, vice marfa.```\n\n* __[line 8](./test/test-project/file2#L8) to-do item in file2 (2 of 2):__  ```Cosby sweater veniam raw denim vice letterpress, sustainable butcher aesthetic.```\n\n\n---\n\n## dir1 / file3\n\n* __[line 3](./test/test-project/dir1/file3#L3) to-do item in file3:__  ```## Mcsweeney\'s banksy PBR nulla.```\n\n\n---\n\n## dir1 / dir2 / file4\n\n* __[line 5](./test/test-project/dir1/dir2/file4#L5) to-do item in file4:__  ```### Consectetur pariatur keffiyeh, aliqua trust fund thundercats high life do irure vinyl exercitation tumblr. Williamsburg dolor nulla butcher ut, incididunt brunch lomo next level ad.```\n\n\n';
  
  it('should run Doto instance, parse files and generate output', function(done){
    Doto().run({
        search: './test/test-project'
      }, function (output) {
      output.should.eql(content);
      done();
    })
  })
  
})