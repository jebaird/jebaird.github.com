---
title: Web Components - IowaJS, Oct 2013
layout: post
tags: [html5, iowajs]
---

Looking back, jQuery UI was my first experience with "web components". When I first discovered them I as amazed as to how easy it was to setup any widget. Just include jQuery and jQuery UI and just call the widget code. In the exsmaple below, `.button()` 

<iframe src="http://jqueryui.com/resources/demos/button/default.html" width="100%" height="150px"></iframe>


Setting up of an instance of button was / is as easy as: 

	<script>
	  $(function() {
	    $( "input[type=submit], a, button" )
	      .button()
	      .click(function( event ) {
	        event.preventDefault();
	      });
	  });
	  </script>


	<button>A button element</button>		

Say the requirements of your app changed or you need to inject a widget into a public facing site. How would you get your code work just like it does on a blank page with out interference from styles and or other javascript. Or Worse your code depends on xyz version of jQuery and the target site only supports abc version / vice versa. How do you handle that?

But what if you could just include another HTML file on your page and add an extra HTML tag and that would all of the heavy lifting? This is where web components comes into play.

## Web components are comprised of four parts:

1. Templates
2. Shadow DOM
3. Custom Elements
4. Packaging

Before we get started, most of these demo's should work in chrome you have the following flags enabled.

* Experimental WebKit Features/Enable experimental 
* Web Platform features flag.

## Templates

A new part of the HTML5 spec is the `<template></template>` tag. It provides some very basic tempting functionality.

[view the template demo](/demos/2013-10-31-web-components/template/index.html "jebaird.fiddle-iframe")

### Highlights

1. The template's contents are not rendered until its activated. Meaning
2. Assets(images,script,media, etc) are not loaded until the template is inserted into the dom
3. The template's content is excluded from the DOM, so if you did `document.getElementById('template')` the template's content wouldn't not show up as `.childNodes`
4. `<content></content>` acts as a "projection" spot if the template is rendered into a shadow root


### Gotchas

* There is no way to "pre-render" a templates assets, meaning anything linked in the template won't be loaded by the browser until the template content is inserted into the DOM 
* Templates can't be nested, meaning you can't have a `<template/>` tag inside of another. 
* Templates can be placed anywhere in `<head>` `<body>` `<frameset>` etc. WExcept the content model(it defines how elements are nested). You can read more about the content model [here](http://www.w3.org/TR/2011/WD-html5-20110525/content-models.html).
* When attaching the template to the DOM, if `template.contents.cloneNode(true)` isn't called, the template can't be inserted twice into the DOM because on the second insert it will be referencing the first instance.
* They are logic-less. But since they are a part of web components spec and are custom elements you could potentially extend the template element and shadowDOM prototype to additional functionality like simple loops or nested templates.
* Any javascript included with your template will be exposed to the global scope unless its inserted into a shadow root. 

So does your browser support the template tag? Here is a simple feature detection script that you might find handy.

	function supportsTemplate() {
		return 'content' in document.createElement('template');
	}
	
	if(supportsTemplate()){ ..use the template ..}



### Browser Support for the Template Tag

<iframe src="http://caniuse.com/template/embed" width="100%" height="360px" seamless frameboarder="0"></iframe>



## Shadow DOM

The best way I can describe the Shadow DOM is that it behaves like a document fragment that hides its internal DOM tree, even when inserted into its parent's DOM. Also its important to keep in mind that, The content is in the document, the presentation is in the Shadow DOM.

### Highlights

* Any element in the tree can host one or more shadow hosts.
* Shadow hosts can still have nodes in the DOM tree
* Shadow boundary, provides encapsulation for CSS and DOM queries. Meaning that the CSS and DOM look ups are "scoped" to that shadow root.


![source:http://www.sitepoint.com/the-basics-of-the-shadow-dom/](/media/2013-10-31-web-components/shadow-dom.png)

### Demo

In this demo, I'm show casing the power of shadow DOM when paired with the template and content tag. If the shadow host contains elements with class names and the template contains `<content selector="matching elements classname"><content>` the content will auto-magically be rendered in the target element. The content tag acts like an entry point for content, when the targets `<content/>` innerHTML changes its reflected in the template. Its setup like live bindings would be in any javascript framework. Click the button in the demo to see what I'm talking about (its just changing the innerHTML of a span, but its change is reflected in the template). 

[view the shadowDOM demo](/demos/2013-10-31-web-components/shadow-dom/index.html "jebaird.fiddle-iframe")

### Gotchas

* CSS rules don't cross the shadow boundary unless this is set `shadowRoot.applyAuthorStyles = true;`

### Browser Support for shadowDOM


<iframe src="http://caniuse.com/shadowdom/embed" width="100%" height="360px" seamless frameboarder="0"></iframe>

## Custom Elements

1. Allows you to define new HTML/DOM elements via document.register(), its an API that's exposed via in the browser
2. Create new elements that extend the native ones, this includes the markup and or their APIs
3. It allows you to bundle encapsulate/functionally with in a an element be that native or custom

When an element is extended or a new one is created there are a series of callbacks that are invoked, the are called the **the lifecycle callbacks**. This is where you add the "meat" of your element.

![from html5 rocks](/media/2013-10-31-web-components/life-cycle-callbacks.png)

### Creating a new Element

In this demo I've created a new element called `x-login-form` which contains a form with two input fields and submit button. I'm inserting these fields into the DOM by creating a shadow host on the element and appending the template contents to the shadow root. If you inspect the element you shouldn't be able to see the input tags and or the submit button just the `<x-login-form>` 

[view the create a new element demo](/demos/2013-10-31-web-components/elements/new.html "jebaird.fiddle-iframe")


### Extending an Existing Element

I've extended the button prototype to create a button named `x-button` that mocks the behavior of the jQuery UI button. It also adds a couple of methods onto the prototype that allow us to add / remove classes easier. Since were not using the shadow DOM API the demos document styles will apply to our new element. 

[view the extending the button demo](/demos/2013-10-31-web-components/elements/extend-button.html "jebaird.fiddle-iframe")

Also its important to note if your extending a native element, you will need to add `is="x-button"` to the HMTL tag to tell the browser to create an instance of your element instead of the native one.


## Packaging - HTMLImports

If I have a custom element that I would like to export to another app, now how do I share it and or include it on my page? The answer is HTMLImports. Its via a link tag, `<link rel="import" href="my-botton.html">`. Its works very similar as you would include javascript files in HTML documents. As of Oct. '13 it only works in chrome canary. Polymer and x-tags have a polly-fill for this feature since its the least supported of the four features that make up web components. You might find this [stackoverflow](http://stackoverflow.com/questions/17612405/import-html-document-using-html-link-rel) post useful. 

But the gist of most polly-fills, are they search for all the link tags that have the rel attr equal to input an create an XHR request and do a `document.write()` with the contents of the file to the DOM. That way the scripts are able to be parsed by the browser.


## Poly-fills and frameworks

* [x-tags](http://www.x-tags.org/) - from Mozilla
 * set of pre built custom elements and a core lib
 * custom elements
 * HTMLImports 
* [Polymer](http://www.polymer-project.org/) - from Google
 * UI tool kit
 * core lib
 * CustomElements
 * HTMLImports
 * PointerEvents
 * PointerGestures
 * Dom
 

## Further Reading and References

* http://www.html5rocks.com/en/tutorials/webcomponents/shadowdom/
* http://blog.teamtreehouse.com/working-with-shadow-dom
* http://www.polymer-project.org/platform/shadow-dom.html 
* http://www.sitepoint.com/html5-template-tag/
* http://www.html5rocks.com/en/tutorials/webcomponents/customelements/
* http://www.chromium.org/blink/web-components
* http://www.polymer-project.org/
* http://www.sitepoint.com/the-basics-of-the-shadow-dom/
* http://www.html5rocks.com/en/tutorials/webcomponents/template/
