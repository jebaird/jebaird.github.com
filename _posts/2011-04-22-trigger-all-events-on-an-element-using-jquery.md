--- 
created: 1303517397
title: Trigger all events on an element using jQuery
layout: post
tags: [jquery, events]
---
<p>triggerAll is a simple plugin that will allow you to trigger all the events attached to an element and or collection</p>
<pre class="brush: js">
(function($){
	$.fn.triggerAll = function(){
		return this.each(function(){
			var $this = $(this);
			$.each($this.data('events'),function( k, v){
				$this.trigger( k );
			})	
		});
	}
})(jQuery);</pre>
<p>&nbsp;</p>
