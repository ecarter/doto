describe('#read()', function(){
  
  var Doto = require('../');
  
  var files;
  
  files = [
    { file: './test/test-project/.dotfile',
      content: '# nothing to see here' },
    { file: './test/test-project/file1',
      content: 'Eu artisan squid food truck, jean shorts irony mlkshk mollit sunt. Ut consequat mcsweeney\'s keytar sartorial. Est gluten-free seitan, mlkshk craft beer ethical qui banh mi american apparel squid nisi duis skateboard organic. \n\n  * Freegan excepteur mollit consectetur duis. // random comment\n  * Sapiente ea accusamus vinyl brunch. // TODO: to-do item in file1\n  * Accusamus iphone DIY single-origin coffee, terry richardson officia american apparel sed adipisicing anim aesthetic tempor scenester craft beer. \n  * Next level occaecat blog messenger bag gluten-free, minim consectetur odio tofu freegan.' },
    { file: './test/test-project/file2',
      content: 'Velit labore occaecat, incididunt williamsburg viral twee do thundercats sunt sint. \n\n// another random comment\nWolf dreamcatcher photo booth nihil exercitation laborum commodo echo park, wes anderson ut do deserunt etsy. Adipisicing gentrify officia, nulla fap iphone cillum. \n\nEtsy locavore sartorial, irony assumenda dolore PBR art party fugiat quis +1. Eu helvetica pitchfork four loko freegan ullamco, vice marfa. // TODO: to-do item in file2 (1 of 2)\n\nCosby sweater veniam raw denim vice letterpress, sustainable butcher aesthetic.  // TODO: to-do item in file2 (2 of 2)\n\nGentrify ut art party, accusamus in you probably haven\'t heard of them veniam master cleanse fanny pack.' },
    { file: './test/test-project/dir1/file3',
      content: 'Put a bird on it ethical lomo dolor cosby sweater etsy, 3 wolf moon esse seitan do squid hoodie dreamcatcher. Mlkshk four loko labore aesthetic, delectus aliqua qui exercitation farm-to-table duis nihil eu nostrud organic voluptate. Locavore blog tumblr laborum portland organic, est dreamcatcher seitan aliqua hoodie wes anderson occaecat consectetur. \n\n## Mcsweeney\'s banksy PBR nulla.  // TODO: to-do item in file3\n\nIrony aliquip lo-fi occaecat. Shoreditch american apparel anim, irure sapiente beard mlkshk dolor accusamus next level single-origin coffee put a bird on it placeat. \n\n_Biodiesel cliche readymade, craft beer occaecat tumblr retro laborum._' },
    { file: './test/test-project/dir1/dir2/file4',
      content: '# Dolor aliquip labore farm-to-table, esse letterpress sapiente nulla artisan quinoa pitchfork. \n\n## Placeat quis delectus, seitan keffiyeh cardigan farm-to-table nesciunt vegan. \n\n### Consectetur pariatur keffiyeh, aliqua trust fund thundercats high life do irure vinyl exercitation tumblr. Williamsburg dolor nulla butcher ut, incididunt brunch lomo next level ad. // TODO: to-do item in file4\n\nNext level aliquip pitchfork, bicycle rights hoodie mixtape odio sed. Farm-to-table id incididunt mlkshk, nulla wes anderson squid trust fund +1 jean shorts ea elit. Do ullamco art party laboris, sunt brunch messenger bag marfa cardigan.' } ];
  
  it('should read contents of test-project', function(done){
    Doto().read('./test/test-project', {}, function (err, content) {
      content.should.eql( files.slice(1,files.length) );
      done();
    });
  })
  
  it('should read contents of test-project with dot files', function(done){
    Doto().read(
      './test/test-project'
      , { hidden: true }
      , function (err, content) {
          content.should.eql( files );
          done();
    });
  })
  
  it('should read contents of test-project ignoring file1', function(done){
    Doto().read(
        './test/test-project'
      , { ignore: 'file1' }
      , function (err, content) {
          content.should.eql( files.slice(1) );
          done();
    });
  })
  
  it('should read contents of test-project ignoring file1, file2', function(done){
    Doto().read(
        './test/test-project'
      , { ignore: [ 'file1', 'file2' ] }
      , function (err, content) {
        content.should.eql( files.slice(1).slice(2) );
        done();
    });
  })

	it('should non-recursively read contents of test-project', function(done){
		Doto().read(
				'./test/test-project'
			, { recursive: false }
			, function (err, content) {
				content.should.eql( files.slice(1,3) );
				done();
		});
	})
 
})
