--- 
created: 1284154970
title: ShortScroll - A jQuery UI Google Wave style scroll bar
layout: post
tags: [jQuery UI, project]
---
<p>I have never been a fan of custom scroll bars. &nbsp;Most of the time they are  just eye candy and end up getting in the way. &nbsp;That was until I saw the  scroll bar in Google Wave. &nbsp;I thought it was the best UI feature in the  whole app. &nbsp;It added functionality and style making much better than  the browser default scroll bar. &nbsp;So I thought that I would create a  scroll bar like it as a jQuery UI widget.</p>
<!--break-->
<p><img width="232" height="261" align="right" src="/userfiles/image/widget%20test_1284162988268.png" alt="ShortScroll in action" /></p>
<ul>
    <li><a href="http://jebaird.com/dev/jquery-shortscroll/demo.htm">view a demo</a></li>
    <li><a href="http://github.com/jebaird/ShortScroll" target="_blank">Git Hub repo</a></li>
</ul>
<p>If you're going to support Internet Explorer and care about eye candy, plan on creating your own background images.&nbsp; I'm using css3 background gradients to do all of the fancy background stuff .</p>
<h3>Getting Started</h3>
<h4>Step 1</h4>
<p>Include the following files on your page</p>
<ul>
    <li>jQuery 1.4.2</li>
    <li>jQuery UI 1.8.4 - widget factory and draggable</li>
    <li>jquery.jb.shortscroll.css</li>
    <li>jquery.jb.shortscroll.js</li>
    <li>mousewheel.js - thanks to <a href="http://brandonaaron.net" target="_blank">Brandon Aaron</a> for this great plugin</li>
</ul>
<h4>Step 2</h4>
<p>Create an html element with a specified width and height, add some content to it</p>
<pre class="brush: html"><div style="width: 200px; height: 300px;" id="content">jquery is great and im going to tell you about it......... <div>&nbsp;</div></div></pre>
<p>Next, just Initiate the widget.</p>
<pre class="brush: js">
//really simple
$('#content').shortscroll();
//setting your own values for the parameters
$('#content').shortscroll({
scrollSpeed:200	
});
</pre>
<h3>Options</h3>
<table width="600" cellspacing="0" cellpadding="0" border="0">
    <thead>
        <tr>
            <th scope="col">parameter</th>
            <th scope="col">description</th>
            <th scope="col">default</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>scrollSpeed</td>
            <td>the multiplier at witch the content is scrolled when the mouse wheel is used</td>
            <td>100</td>
        </tr>
        <tr>
            <td>animationSpeed</td>
            <td>how fast the animation is when the user clicks on the up and down arrows</td>
            <td>150</td>
        </tr>
    </tbody>
</table>
<p>&nbsp;</p>
<h3>Events</h3>
<p>There is a special event that gets triggered when the scrollHeight is changed on the target. Just bind to the event named jbShortscrollUpdateMarker to add customization</p>
