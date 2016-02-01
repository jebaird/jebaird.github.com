---
title: 3 Things Every Developer Should Know About Web Components And Html Imports
tags: [ JavaScript ]
crosspost: "[ONTRAPORT's engineering blog](https://ontraport.com/blog/engineering/3-things-every-developer-know-web-components-html-imports)"
layout: post
---

In a soon-to-be-released project, I decided to give web components a chance. Instead of using frameworks like x-tags or polymer, I went with the plain ol’ vanilla JavaScript web component APIs with little to no external dependencies.

Browser support for web components is pretty good, and with the use of [webcomponentsjs](https://github.com/webcomponents/webcomponentsjs) polyfills, I was able to get support for every browser we currently support in ONTRAPORT.

Along the way, I made a few discoveries. This post assumes that you have some knowledge of the APIs that make up web components. If you don’t, I would recommend reading:

* [Web components introduction](http://www.html5rocks.com/en/tutorials/webcomponents/shadowdom/)
* [Shadow roots](http://www.html5rocks.com/en/tutorials/webcomponents/shadowdom-301/)
* [HTML imports](http://webcomponents.org/articles/introduction-to-html-imports/)
* [currentScript](https://developer.mozilla.org/en-US/docs/Web/API/Document/currentScript)

### 1) Tracking Registered Elements

Registering an element with the document typically looks like this:

	var prototype = Object.create( HTMLElement.prototype );
	
	prototype.createdCallback = function() { this.style.color = “red” };
	
	document.registerElement( ‘my-button’, {
	prototype: prototype,
	});

Now any `<my-button></my-button>` on the page will render with red text. Say you wanted to create a new element that extended from `<my-button>`.  If it’s contained in the same script file, you can grab the variable prototype, create a new prototype, and start from there.

But say you want the extending element that lives in another import or script file. We have no way to easily grab the prototype from memory.

When I first started playing with this API, I was under the assumption that you could access your custom elements prototype via `document.registeredElements['my-button'].prototype`. Turns out that’s not the case. In the end, I had to build a small script to track our custom element:

	( function() {
	   var ontraport = window.ontraport || ( window.ontraport = {} );
	
	   /**
	    * track all of the custom element prototypes types registered with ontraport.registerElement
	    * @type {Object}
	    */
	   var _customElements = {};
	
	   /**
	    * Create a new object prototype from an existing element prototype
	    * optional if you don’t need to extend from an existing prototype, just use Object.create(HTMLElement.prototype)
	    * @param  {[type]} elementName [description]
	    * @return {[type]}             [description]
	    */
	   ontraport.createElement = function( elementName ) {
	       return Object.create( ontraport.getElement( elementName ).prototype );
	   };
	
	   /**
	    * Get an existing element prototype
	    * @param  {[type]} elementName [description]
	    * @return {[type]}             [description]
	    */
	   ontraport.getElement = function( elementName ) {
	       var proto = _customElements[ elementName ];
	       if ( !proto ) {
	           throw elementName + ‘ not found';
	       }
	       return proto;
	   }
	
	   /**
	    * register a new custom element with the document and store the prototype in ontraport._customElements
	    * @param  {[type]} name    name of the element 
	    * @param  {[type]} options any valid option for document.registerElement
	    * @return {prototype}         new prototype
	    */
	   ontraport.registerElement = function( name, options ) {
	       var proto = document.registerElement( name, options );
	       _customElements[ name ] = proto;
	
	       return proto;
	   };
	
	}() );

Sample usage for registering a new element:

	var prototype = Object.create( HTMLElement.prototype );
	
	ontraport.registerElement( ‘my-button’, {
	       prototype: prototype
	   } );

Sample usage for extending from an existing element:

	var prototype = ontraport.getElement( ‘my-button’ );
	
	// add a bunch of stuff
	ontraport.registerElement( ‘my-button-extended’, {
	       prototype: prototype
	   } );

Earlier in this post I mentioned that I didn’t use a framework, but undoubtedly some of you consider this a “framework.” It turns out, with a bit of hacking, you can get the element constructor of an element via `document.createElement(‘my-custom-element’).constructor`. From there you can create a new element that extends my-custom-element. I don’t think that’s ideal because you’re creating a new instance of an element that you have no intention of using. If that element had a “heavy” setup method, you could be taking on some performance issues.

### 2) Document.CurrentScript.OwnerDocument

I think two of the most important and powerful parts of HTML imports are:

	document.currentScript

and

	document.currentScript.ownerDocument.

`document.currentScript` refers to the current `<script>` block being processed.

`document.currentScript.ownerDocument` refers to the page that “owns” that block. Take the following code block as an example:

	my-button.html
	
	<link href=”icon.html” rel=”import”>
	<template >
	   <style> /* styles for this template */ </style>
	   <div class=’message’> hello world
	   </div>
	</template>
	<script>
	( function() {
	   // webcomponentsjs polyfills in the currentScript as document._currentScript
	   var _currentScript = document._currentScript || document.currentScript;
	
	   // omitted
	
	   newPrototype.createdCallback = function() {
	       var template = _currentScript.ownerDocument.querySelectorAll( ‘template’ )[ 0 ]
	
	       // now we can append the template
	   };
	}() );
	</script>

By using `_currentScript.ownerDocument` I have access to the whole HTML file. This is very powerful, because it allows us to grab only this component’s template(s), images, SVGs and other resources, and then inject them into the DOM or reference and manipulate them from within the script.

We could traverse into `icon.html` and access its contents via: _`currentScript.ownerDocument.querySelectorAll(‘[href="icon.html"]‘)[0].import`.

I’ve seen examples where the _currentScript is attached to the document, and that doesn’t work because if you have two components doing:

`document._currentScript = document._currentScript || document.currentScript; document._currentScript` will always reference the currentScript of the last component added. That’s because document refers to the main window, not the html import document.

### 3) Projecting Content With ShadowDom Is Somewhat Limited

The ShadowDom is very powerful and more so when used in conjunction with a template tag that contains a content tag. For example:

	<my-button>
	   <div class=”title”>hello world</div>
	   <div class=”body”>this is some sample text</div>
	   <div class=”inputName”>email</div>
	<my-button>

Sample `<template>` that my-button uses:

	<template>
	   <div class=”big-header”><content select=”.title”></content></div>
	   <div class=”big-body”><content select=”.body”></content></div>
	   <input type=”text” name=”<content select=”.inputName”></content>”>
	</template>

When a ShadowRoot is created on <my-button> the content from the `<div>`([view this in action](https://jsfiddle.net/jebaird/4vLgxj0a/)]) with body and title classes will be projected into the ShadowRoot([view this in action(https://jsfiddle.net/jebaird/4vLgxj0a/)]).

However, the input’s name attribute will still be `name=”<content select=”.inputName”></content>”`, which is a huge downer. Turns out I can’t project any content into an element’s attributes. If I was able to, it would be insanely useful for building custom form controls.

This isn’t a show stopper. A quick and simple workaround might look something like this:

	<template>
	   <input type=”text” name=”{inputName}”>
	</template>

Workaround script using [tweet sized templating engine](http://mir.aculo.us/2011/03/09/little-helpers-a-tweet-sized-javascript-templating-engine/):

	//http://mir.aculo.us/2011/03/09/little-helpers-a-tweet-sized-javascript-templating-engine/
	function t( s, d ) {
	   for ( var p in d )
	       s = s.replace( new RegExp( ‘{‘ + p + ‘}’, ‘g’ ), d[ p ] );
	   return s;
	}
	/*

create a new template tag

set the innerHTML of the new template tag to the src and replace any {} values

then import the templateInt.content into the document and append to the shadow dom

	
	var templateSrc = element.querySelector( ‘template’ ),
	   templateInst = document.createElement( ‘template’ );
	
	templateInst.innerHTML = t( templateSrc.innerHTML, {inputName: “email”} );
	
	document.querySelector( ‘my-button’ ).appendChild( document.importNode( templateInst.content, true ) );

It’s not ideal because you can’t leverage the power of projecting with the ShadowDom via <content>([demo](https://jsfiddle.net/jebaird/entpcrra/1/)), but it seems to solve most of the basic use cases([demo](https://jsfiddle.net/jebaird/entpcrra/1/)).

### Wrap-Up

I still don’t regret not using polymer or x-tags; it allowed me to better understand the APIs that make up web components.  Also, it has added benefits for ONTRAPORT and the Engineering department:

I won’t get stuck on an unsupported version of a framework or library because I’m using the APIs that the browser supplies directly.
I can take my generic elements and drop them into any site / app regardless of the framework they’re using and have them work with little to no extra work.
It cuts down the learning curve before engineers and designers can start working in our app because the end result is working with html.
So whatever framework you use, check out vanilla web components! You might like working with html again!
