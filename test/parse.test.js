describe('#parse()', function(){
  
  var Doto = require('../');
  
  var content
    , parsed;
  
  doto = Doto();
  
  content = "Marfa tofu blog, cred tumblr cosby sweater 8-bit. \n\nBicycle rights butcher quinoa, thundercats mixtape banksy PBR mcsweeney's farm-to-table seitan cosby sweater echo park artisan aesthetic yr. Farm-to-table whatever biodiesel marfa brooklyn aesthetic readymade tumblr hoodie trust fund.\n\n\t* Sartorial four loko aesthetic\n\t* next level quinoa freegan stumptown before they sold out. // TODO: this is to-do #1\n\t* Quinoa mcsweeney's mustache, high life keffiyeh fap locavore seitan american apparel chambray\n\t 8-bit butcher scenester, seitan tumblr whatever synth // TODO: this is to-do #2\n \n Master cleanse tofu terry richardson\n\t\taesthetic trust fund whatever pitchfork VHS raw\n\t\t\t\tdenim banksy before they sold out blog echo park viral mlkshk.\n\nand some stuff// TODO: this is to-do #3\nAustin lo-fi four loko cliche. Freegan cred tofu, Austin wolf next level bicycle rights twee.";
  
  parsed = [ { line: 6,
      body: '* next level quinoa freegan stumptown before they sold out.',
      comment: 'this is to-do #1' },
    { line: 8,
      body: ' 8-bit butcher scenester, seitan tumblr whatever synth',
      comment: 'this is to-do #2' },
    { line: 14,
      body: 'and some stuff',
      comment: 'this is to-do #3' } ];
  
  it('should parse // TODO comments in string', function(){
    Doto().parse(content).should.eql(parsed);
  })
  
  
})