(function(){
	var setIframeContent = function( iframe, content ){
		iframe.src = "data:text/html;charset=utf-8," + encodeURI(content);
	}
	
	var applyTheme = function( theme, target ){
		//find the theme css and replace the targets css
		
	}
	
	var $root = $('.demo');
	
	$root.on('change','.step-1 textarea',function(){
		var $this = $(this);
		var val = $this.val();
		val = ( val ) ? val : 'Please paste in the form html code';
		
		setIframeContent( $this.parent().find('iframe')[0], val );
		
	});
	
	$root.on('submit', 'form', function(e){
		e.preventDefault();
		console.log('runnnings')
	})
	
	
})();
