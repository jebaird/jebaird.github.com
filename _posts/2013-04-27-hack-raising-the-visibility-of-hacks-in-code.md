--- 
created: 1367092739
title: "@HACK, Raising the visibility of hacks in code"
layout: post
tags: [opinion]
---
<p>I recently read <a href="http://csswizardry.com/2013/04/shame-css/" target="_blank">shame.css</a> by Harry Roberts. I thought it was a very good article and touched on some points that we as developers have to deal with on daily basis. Hacks typically don't have enough visibility in the code base.</p>
<p>What if your project spans different languages? What works well with new and existing code? How do you set a standard for your development team to follow? I think @TODO is a pretty common way of marking a todo. So why not @HACK as a way of marking and documenting a solution that doesn't seem obvious.</p>
<h3>Example</h3>
<pre>
widget.js
----------------------
(function(){
	//@HACK using global var because reason x, reason y, reason z
	hasBeenRun = false;
	
	var = settings = {
		scroll: false
		.......
	};
})()

</pre>
<p>The important thing that is you raise the visibility of your hacks in your code base regardless of what technique you use.</p>

