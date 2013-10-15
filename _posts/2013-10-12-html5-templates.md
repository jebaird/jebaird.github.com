---
layout: post
title: Fun with HTML5 templates and shadowDom API
tags: [html5]
---

I recently started playing around with the new `<template></template>` tag introduced in html5. On the surface it looks pretty plain, 
it appears to another template engine. But when combined with the shadowDom API it can be pretty powerful. Take this code example.

	<div id="target">
		<span class="label">Enter your name</span>
		<span class="name">name</span>
	</div>

	<template id="formInputTemplate">
	
		<style>
			input:focus{
				background: blue;			
			}
		</style>
	
		<label><content select=".label"></content></label>
		<input type="text" name="<content select='.name'></content>" placeholder="<content select='.label'></content>">
	
	</template>

The setting and rendering up the template looks like this. Bear in mind that this example will only work with webkit.

	<script>
		//create shadow root
		var shadow = document.querySelector('#target').webkitCreateShadowRoot();
		//grab the target
		var template = document.querySelector('#formInputTemplate');
		//clone the template content so we can reuse the template
		var tc = template.content.cloneNode(true);
		shadow.appendChild(tc);
	</script>

[view the code in action](/demos/2013-10-12-html5-templates)

### So whats going on under the hood?

When the browser renders the template you should see a label with the text *enter your name* and an input with the name of *name*

![content tag and shadow dom](/media/2013-10-12-html5-templates/shadowdom-innerworkings.png)

`<content select="selector"></content>` is an entry point for you to insert content. One caveat is they can only select 
elements that are immediate children of the host node. Meaning you can't target `select option`, but you can select `.label`. 
The "find and replace" is done auto-magically when you create for you when create a shadowRoot and append a template to it. 

One of the coolest things about html5 template api and shadowdom api is the ability to scope the css. So in this case 
regardless of the input styles on the page our inputs created with our template will always be #ccc on focus. This demo
is just scratching the surface, but the possibilities are endless.

### Further Reading
* [http://www.html5rocks.com/en/tutorials/webcomponents/shadowdom/#toc-projection](http://www.html5rocks.com/en/tutorials/webcomponents/shadowdom/#toc-projection)
* [http://blog.teamtreehouse.com/working-with-shadow-dom](http://blog.teamtreehouse.com/working-with-shadow-dom)
* [http://www.chromium.org/blink/web-components](http://www.chromium.org/blink/web-components)
