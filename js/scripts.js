/*
 * simple scripts
 */
(function(){
	

	 
 function drawHeader( options ){
	 var defaults =  {
    	images: [ 
			'/css/img/circle-1.png',
			'/css/img/circle-1.png',
			'/css/img/circle-1.png'
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
		numOfImg: 50,
		imgPlacement: function(drawingContext, target, image){
			var instance = this;
			
			var w = image.width * .50,
				h = image.height * .50,
				
				maxX = target.width - image.width,
				minX =  -w + 10,
				maxY = target.height,
				minY = 0,
				X = instance.rand( minX, maxX),
				Y = instance.rand( minY, maxY);
				
			drawingContext.drawImage(image, X, Y );
		
		}

	};
	
	
	var target = document.getElementById('header-graphic');
	
	target.width = document.body.clientWidth;
	new jebaird.canvasImageRandomizer( target, defaults);
}


drawHeader();



})();