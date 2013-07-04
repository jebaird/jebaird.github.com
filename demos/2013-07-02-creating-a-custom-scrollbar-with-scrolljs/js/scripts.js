/*
 * scoll js demo
 */
$(document).ready(function(){
	
	var $root = $('.demo'),
		$target = $root.find('.demo-target'),
		$track = $root.find('.demo-scroll-track'),
		$bar = $track.children('.demo-scroll-bar'),
		s = jebaird.scroll( $target[ 0 ] );
	
	
	/*
	 * when the mouse wheel is scrolled update the scroll bar
	 */
	$target.on('scroll mousewheel DOMMouseScroll', function(){
		var ratio = s.pixelRatioVert( $bar[ 0 ]) ;
		var dir = s.direction();
		$bar.css('top', s.scrollVert() / ratio );
	});
	
	/*
	 * pager buttons
	 */
	$root.on('click','.pager', function(){
		var method = 'pageUp';
		if( $( this ).hasClass('page-down') ){
			method = 'pageDown'
		}
		s[method]();
	})
	
	
});
