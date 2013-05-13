--- 
created: 1218742149
title: JW player with SWFObject
layout: post
tags : [JavaScript]
---
<p>Recently i was working on a project that required a flash media player.&nbsp; I was trying to integrate <a href="http://www.jeroenwijering.com/?item=JW_FLV_Media_Player" target="_blank">JW FLV Media Player</a> using <a href="http://blog.deconcept.com/swfobject/" target="_blank">SWFObject</a>.&nbsp; After losing a few hours of my life trying to pass a variable in a query string to a php script that generated a XML play list, I stumbled upon/discovered this solution.</p>
<p>the JW FLV Media Player documentation currently reads like this</p>
<pre class="brush: js">
&lt;p id=&quot;preview&quot;&gt;The player will show in this paragraph&lt;/p&gt;
&lt;script type='text/javascript' src='swfobject.js'&gt;&lt;/script&gt;
&lt;script type='text/javascript'&gt;
var s1 = new SWFObject('player.swf','player','400','300','9');
s1.addParam('allowfullscreen','true');
s1.addParam('allowscriptaccess','always');
s1.addParam('flashvars','file=video.flv');
s1.write('preview');
&lt;/script&gt;
</pre>
<p>here is the script that I had to use to get my id to pass to my php script</p>
<pre class="brush: js">
&lt;script type='text/javascript' src='swfobject.js'&gt;&lt;/script&gt;
&lt;script language=&quot;javascript&quot; type=&quot;text/javascript&quot;&gt;

var so = new SWFObject(&quot;flvplayer.swf&quot;, &quot;player&quot;, &quot;300&quot;, &quot;250&quot;, &quot;9&quot;); // Location of swf file.
so.addParam(&quot;quality&quot;, &quot;high&quot;);
so.addVariable('file', 'product_playlist.xml');
so.addVariable('autostart', 'true');
so.addVariable('screencolor', '0xfffffff'); 
so.addParam(&quot;wmode&quot;, &quot;transparent&quot;); so.write(&quot;player&quot;); 
&lt;/script&gt;
</pre>
<p>turns out using that addParam as stated in the documentation will not work.  You have to use the addVariable method for the &quot;file&quot; attribute and pass the file name and any other query string args (pid=1&amp;test=yes) to get it to work</p>
