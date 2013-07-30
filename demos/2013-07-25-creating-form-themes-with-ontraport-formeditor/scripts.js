(function(){
	var fixProtocol = function( content ){
		return content.replace(/\/\//ig,'http://')
	}
	var setIframeContent = function( iframe, content ){
		iframe.src = "data:text/html;charset=utf-8," + encodeURI(fixProtocol(content));
	}
	
	
	
	var applyTheme = function( theme, target ){
		//find the theme css and replace the targets css
		
		
		var classPrefix = 'moonray-form-',
			$theme = $( '<div/>' ).html(theme),
			$target = $( '<div/>' ).html(target);
			themeUid = $theme.find('[name=uid]').val(),
			targetUid = $target.find('[name=uid]').val();
			
		console.log( 'target uid ', targetUid, 'theme uid ', themeUid );
		
		$target.find('link[href*=' + targetUid+ ']')
			.replaceWith( $theme.find('link[href*=' + themeUid+ ']') );
		
		$target.find('.' + classPrefix + targetUid )
			.addClass( classPrefix + themeUid );
		
		return $target.html();
		
		
	}
	
	var previewTheme = function( iframe, content ){
		
		var content = ( content ) ? content : 'Nothing to preview, please paste in the form html code';
		setIframeContent( iframe, content );
	}
	
	var $root = $('.demo');
	
	$root.find('.step-1 textarea').each(function(){
		
		var $this = $(this);
		var val = $this.val();
		
		previewTheme( $this.parent().find('iframe')[0], val )
	})
	
	
	$root.on('change','.step-1 textarea',function(){
		var $this = $(this);
		var val = $this.val();
		
		previewTheme( $this.parent().find('iframe')[0], val )
		
	});
	
	$root.on('submit', 'form', function(e){
		e.preventDefault();
		console.log('runnnings')
		
		var source = applyTheme( $('#theme-source').val(), $('#target-source').val() )
		
		setIframeContent($('#output-preview')[0],source)
		$('#output-source').val( source );
		
		$root.children('.step')
			.hide()
			.filter('.step-2')
			.show();
			
		window.scrollTo(0);
		
	});
	
	$root.on('focus','#output-source', function(){
		var $this = $(this);
	    $this.select();
	
	    // Work around Chrome's little problem
	    $this.mouseup(function() {
	        // Prevent further mouseup intervention
	        $this.unbind("mouseup");
	        return false;
	    });
	})
	
	$root.on('click','.start-over', function(){
		$root.children('.step')
			.hide()
			.filter('.step-1')
			.show()
	})
	
	
})();
