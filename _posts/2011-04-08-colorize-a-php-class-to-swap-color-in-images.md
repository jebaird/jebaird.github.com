--- 
created: 1302302174
title: Colorize -  a PHP class to swap color in images
layout: post
---
<p>Colorize is a simple PHP class that allows you to supply template / source images and easily replace color(s) in them and save them as copies. It could be useful if you are building a theme generator for a site or framework. Or if you have to replace the same colors in images with another color.</p>
<!--break-->
<p>Check out the <a href="https://github.com/jebaird/colorize" target="_blank">GitHub </a>repo</p>
<p>Colorize has a simple setup, it goes as follows</p>
<pre class="brush: php">
&lt;?php

require_once 'colorize.php';
//new instance with src images
$c =  new colorize(array(
    'src/red_arrow.png',
    'src/red_star.png'

));
//replace colors in the source
$c-&gt;replace(
    array('ED1C24', '000', 'e8d3d5'),
    array('7ADC4B', '4A4A4A'),
    'green'
);
?&gt;
</pre>
<p>Just supply the source / template images and tell it what colors to replace. And it will save them in the cache dir</p>
