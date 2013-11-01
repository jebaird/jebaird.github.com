(function(){
window.requestAnimFrame = (function(){   
	return window.requestAnimationFrame  ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame  ||
		window.msRequestAnimationFrame  ||
		function(/* function */ callback, /* DOMElement */ element){
			window.setTimeout(callback, 1000 / 60);
		};
})();  

function drawHeader( options ){
	 var defaults =  {
    	images: [ 
			'/css/img/circle-1.png',
			'/css/img/circle-2.png'
		],
		scale:{
			min: 25,
			max: 85
		},
		colors: [
			'#1EB9F2',
			'#88C90A',
			'#585365',
			'#CCCBD1'
		],
		numOfImg: 60,
		imgPlacement: function(drawingContext, target, image){
			var w = image.width * .50,
				h = image.height * .50,
				
				maxX = target.width - image.width,
				minX =  -w + -15,
				maxY = target.height - image.width,
				minY = -h + -30,
				X = this.rand( minX, maxX),
				Y = this.rand( minY, maxY);
				
			drawingContext.drawImage(image, X, Y );
		}

	};
	var target = document.getElementById('header-graphic');
	
	target.width = document.body.clientWidth;
	new jebaird.canvasImageRandomizer( target, defaults);
}
requestAnimFrame( drawHeader );


var targets = document.querySelectorAll("a[title='jebaird.fiddle-iframe']"),
	i = targets.length;
while( i-- ){
	jebaird.fiddle( targets[ i ] );
}

//debounced
var resizeTimer = null;
window.onresize = function(){
	clearTimeout( resizeTimer );
	resizeTimer = setTimeout( requestAnimFrame( drawHeader ), 300 );
}

})();