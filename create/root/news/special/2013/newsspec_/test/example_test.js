require(['js/example'],
	//This is an example unit test...
	function(example) {
		QUnit.test( "public function test", function( assert ) {
			assert.equal( example.publicMethod(), true, "method returns true" );
		});
	} 
);