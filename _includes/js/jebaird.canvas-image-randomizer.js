/*
 * jebaird.canvasImageRandomizer - simple "framework" to randomly place scaled, rotated, color overlayed images on an html5 canvas
 * Jesse Baird <jebaird@gmail.com>
 * 5/14/2011
 * 
 * http://jebaird.com/blog/canvas-image-randomizer
 * 
 * 
 * 
 * USAGE
 * 
 * <canvas id="myDrawing" width="1260" height="375" style="border: 1px solid black">
            <p>Your browser doesn't support canvas.</p>
        </canvas>
 * 
 * //include this file
 * 
 * new jebaird.canvasImageRandomizer( document.getElementById('myDrawing'), {
        	images: [ 
				'nav_home_gray.png',
				'nav_about_green.png',
				'nav_projects_gray.png'
			],
 * 
 */
 
(function(){
	
	if( window.jebaird == undefined){
		window.jebaird = {};
	}
	
	/*
	 * poor mans extend
	 * im just using this for settings
	 */
	function extend( defaults, options ){
		var settings = {};
		for( var prop in defaults ){
			settings[ prop ] = ( options[ prop ] ) ? options[ prop ] : defaults[ prop ];
		}
		return settings;
	};
	
	/*
	 * target is canavs element
	 */
	 jebaird.canvasImageRandomizer = function( target, options ){
		
		if(!target && !target.getContext) {
			//console.log('boooo no canvas support');
			return false;
		}
		
		var self = this,
		defaults = {
					
			images: [],
			//colors - array of colors that you want to mask your images
			colors: [],
			//keep at 90 deg if you are rotating pngs, un less your images arent at 90 deg
			angles: [ 0, 90, 180, 270 ],
			//NOTE: i'm pretty sure you can scale images past 100% when using the mask feature
			scale: {
				min: 10,
				max: 100
			},
			numOfImg: 1,
			//default image placement will ramdomly place images on the canvas,
			imgPlacement: function(drawingContext, target, image){
				var instance = this;
				
				var w = image.width * .50,
					h = image.height * .50;
					
					var maxX = target.width + ( w ),
					minX = - w,
					
					maxY = target.height,
					minY = -h,
					
					X = instance.rand( minX, maxX),
					
					Y = instance.rand( minY, maxY);
					
					
					
				//	console.log('minX', minX, 'maxX ', maxX,  '  - ', X)
				//	console.log('minY', minY, 'maxY ', maxY,  '  - ', Y)
				
				
				drawingContext.drawImage(image, X, Y );
			
			}
		},
		config = extend( defaults, options),
		
		drawingContext = target.getContext('2d');
		
		
		drawingContext.globalAlpha = 1;
		
		
		var i = config.images.length,
		loadedImageCount = 0,
		imgPreload = [],
		
		processor = function(){
			
			if( loadedImageCount != imgPreload.length ){
				setTimeout( processor,5);
				return;
			}
			//clearInterval(interval);
			while( config.numOfImg-- ){
			
				
				config.imgPlacement.apply(self, [drawingContext, target,
					 
					self.getImage({
						image: imgPreload[ self.rand( 0, imgPreload.length -1 )],
						color: config.colors[ self.rand( 0, config.colors.length -1 )],
						rotate: config.angles[ self.rand( 0, config.angles.length -1 )],
						scale: self.rand( config.scale.min, config.scale.max) * .01
					})
				])
			}
		
		};;
		//pre load all of the images specified in the config, that way the getImage function doesnt need to do it every time
		while( i-- ){
			var img = new Image();
			img.onload = function(){
				loadedImageCount++;
				//console.log('img loaded')
			}
			img.src= config.images[i];
			
			imgPreload.push(img);
			
		}
		//console.log(imgPreload)
		processor.call();
		
		return this;
	}
	
	/*
	 * 
	 *  random number, between x and y
	 */
	jebaird.canvasImageRandomizer.prototype.rand = function( min, max ){
		//console.log('min', min, 'max', max,  Math.floor(Math.random() * (max - min+ 1) + min));
		
		return Math.floor(Math.random() * (max - min+ 1) + min);
	};

	/*
	 * return a canvas object with an image
	 */
	jebaird.canvasImageRandomizer.prototype.getImage = function( options ){
		var defaults = {
			//image is image resource new Image()
			image: '',
			//mask color
			color: '#000000',
			rotate: 0,// in degrees
			scale: 1
		},
		settings = extend( defaults, options ),
		buffer = document.createElement('canvas'),
		drawingContext = buffer.getContext('2d'),
		image = settings.image;
		
		var w = Math.ceil( image.width * settings.scale ),
		h = Math.ceil( image.height * settings.scale ),
		
		ww = w / 2,
		hh =  h / 2;
		
        
		
		buffer.width = w;
		buffer.height = h;
		//console.log(drawingContext, image)
        // fill offscreen buffer with the tint color
        drawingContext.fillStyle = settings.color;
        
        drawingContext.fillRect(0,0,buffer.width,buffer.height);
     	drawingContext.globalCompositeOperation = "destination-atop";
        //  drawingContext.globalCompositeOperation = "copy";
        
        drawingContext.globalAlpha = 1;
        
        drawingContext.translate( ww ,hh);
        //rotate 
        drawingContext.rotate( (Math.PI / 180) * settings.rotate);

        drawingContext.drawImage( image, -ww, -hh, w,h );
		return buffer
	}
	
	return window.jebaird = jebaird;
}());
