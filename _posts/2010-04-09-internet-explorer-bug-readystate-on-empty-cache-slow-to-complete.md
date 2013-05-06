--- 
created: 1270837506
title: "Internet Explorer Bug: readyState on empty cache slow to == complete"
layout: post
---
<p>Recently I ran in to a small bug in Internet Explorer where on an empty cache it would take minutes for script.readyState to equal 'complete' after the script had been successfully loaded&nbsp; from the server. But if you refreshed the page , script.readyState would equal complete on page load.</p>
<pre class="brush: js">
var script=document.createElement('script');
script.setAttribute('type','text/javascript');
script.setAttribute('src',protocol+'//script.js');

//internet explorer
script.onreadystatechange=function(){
	if (script.readyState == 'complete') {
		alert('ie');
	}
}
//firefox
script.onload=function(){
	alert('ff');
}
document.getElementsByTagName(&quot;head&quot;)[0].appendChild(script);</pre>
<p>&nbsp;So the solution is to change the script.readyState to test for the loaded state.&nbsp; It seems that on an empty cache the state equals loaded right after the browser has loaded the script from the server.</p>
<pre class="brush: js">
//internet explorer
script.onreadystatechange=function(){
	if (/^(complete|loaded)$/.test(script.readyState)) {
		alert('ie');
	}
}</pre>
<p>Check out the attachments to see the bug in action.</p>
