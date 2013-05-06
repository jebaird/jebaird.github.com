--- 
created: 1253394310
title: Get the fulll URL of the current page
layout: post
---
<p>Here is a simple function that will get the url of the current page.</p>
<pre class="brush: php">
/**
 * getFullCurrentURL()
 * @author Jesse Baird &lt;jebaird@gmail.com&gt;
 * @since 09/18/2009
 * @uses gets the full url of the current page
 * @return string | IE http://www.jebaird.com?var=val&amp;test=yes
 */
function getFullCurrentURL() {
    $url = 'http://';
    //are we in ssl?
    if(isset($_SERVER['HTTPS']))
        $url = 'https://';
    $url .= $_SERVER[&quot;HTTP_HOST&quot;].$_SERVER['PHP_SELF'];
    
    if($_SERVER['QUERY_STRING'])
        $url .= &quot;?&quot; . $_SERVER['QUERY_STRING'];
    return $url;
}
</pre>
<p>If you're looking to manipulate urls you should check out <a href="http://us2.php.net/manual/en/function.parse-url.php#92230" target="_blank">this class</a> posted on php.net</p>
