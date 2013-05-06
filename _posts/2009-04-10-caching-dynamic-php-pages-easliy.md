--- 
created: 1239411920
title: Caching Dynamic PHP Pages Easliy
layout: post
---
<p>Over the past month or so I have been toying with the idea of developing a way to cache dynamic PHP pages with out a lot of overhead.&nbsp; I stumbled across this blog entry: <a href="http://papermashup.com/caching-dynamic-php-pages-easily">http://papermashup.com/caching-dynamic-php-pages-easily</a>&nbsp; the idea was so simple it was almost too easy.&nbsp; So I took it upon my self to turn the original code and some of the user comments code into a class.&nbsp; I have made some minor changes(cleaned up if statements, fixed a bug dealing with the cached version of the page not getting served out when it hadn't expired yet) to the code but for the most part its mostly the same.</p>
<h4>implementation</h4>
<pre class="brush: php">
  &lt;?php 
  require_once &quot;page_cache.class.php&quot;;
  $cache=new page_cache(120); //cache page for 2 hours
  //put 
  //page
  //content
  //here
  $cache-&gt;createCachedPage();
  ?&gt; 
</pre>
<p>&nbsp;</p>
