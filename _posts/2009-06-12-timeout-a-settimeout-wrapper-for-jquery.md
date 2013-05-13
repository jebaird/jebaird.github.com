--- 
created: 1244821018
title: timeout, a setTimeout wrapper for jQuery
layout: post
tags : [Javascript, jQuery]
---
<p>Timeout is a simple jQuery plugin that allows you to delay the execution of code for a certain number of milliseconds.  It works like the jQuery delay plugin http://www.evanbot.com/article/jquery-delay-plugin/4 which i didn't know existed at the time I wrote this plugin.</p>
<p><strong>plugin code</strong></p>
<pre class="brush: js">
/*
timeout a setTimeout wrapper for jQuery
By: Jesse Baird - jebaird.com
6-12-2009
*/
(function($){  
	$.fn.timeout = function(options) {  
		var defaults = {timeout:'2000',callback:function(){return true;}}; 
		var options = $.extend(defaults, options);  
		return this.each(function() {
			var e=$(this)[0];
			setTimeout(function(){options.callback.call(e)},options.timeout);
		}); 
	}
})(jQuery); 
</pre>
<p><strong>usage</strong></p>
<pre class="brush:js">
//this will hide all of the anchor tags after 2 seconds
$('a').timeout({timeout:2000,callback:function(){$(this).hide(); }}); 

//hide the drop down menu after 2 seconds

			$(&quot;#topNav li ul&quot;).bind('mouseleave',function(){
				//$(this).hide();
        $(this).timeout({timeout:'2000',callback:function(elem){  
     	
		$(this).fadeOut(); 
		
		}});
</pre>
<p><strong>limitations and requirements</strong></p>
<ul>
    <li>jQuery 1.3.2</li>
    <li>Currently there is no way to clear the timeout</li>
</ul>
