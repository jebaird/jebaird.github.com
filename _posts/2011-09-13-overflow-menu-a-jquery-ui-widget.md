--- 
created: 1315922233
title: Overflow menu a jQuery UI Widget
layout: post
tags: [jQuery UI, projects]
---
<p>I decided to turn an earlier post idea (See <a href="http://jebaird.com/blog/using-jquery-create-overflow-menu-seen-google-wave">http://jebaird.com/blog/using-jquery-create-overflow-menu-seen-google-wave</a> ) into a jQuery UI widget. Its based on the google wave menu.</p>
<ul>
    <li><a target="_blank" href="/dev/project/jb-overflow-menu/demo.htm">view the demo</a></li>
    <li><a target="_blank" href="https://github.com/jebaird/jquery-overflow-menu">GitHub repo</a></li>
</ul>
<h3>What It Does</h3>
<p>&nbsp;It detects which menu items are hidden in the parent element overflow. Takes the hidden items clones them and appends them to a secondary menu. The cloned items are visible in a drop down menu when the user clicks on the more link.</p>
<h3>Getting setup</h3>
<p>The suggested markup and css is as follows</p>
<pre class="brush: html">
 &lt;nav&gt;
      &lt;ul&gt;
          &lt;li&gt;&lt;a&gt;blah&lt;/a&gt;
      &lt;/ul&gt;
&lt;/nav&gt;</pre>
<p>&nbsp;</p>
<pre class="brush: css">
nav{
	height: 1em;
	width: 200px;
}
nav li{

 	display: block;

}</pre>
<pre class="brush: js">
$('nav').overflowmenu();
</pre>
<p><strong>For this widget to work your target(In my demo nav) needs to have a width and an a height that javascript can pick up on.</strong></p>
<h3>Options</h3>
<table width="700" height="137" cellspacing="0" cellpadding="0" border="0" style="">
    <thead>
        <tr>
            <th scope="col">parameter</th>
            <th scope="col">description</th>
            <th scope="col">default</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>items</td>
            <td>Selector, of the menu items</td>
            <td>&gt; *</td>
        </tr>
        <tr>
            <td>itemsParentTag</td>
            <td>by default the plugin assumes that the items are going to be in an unordered list, you might change this to div if this isn't the case</td>
            <td>ul</td>
        </tr>
        <tr>
            <td>guessHeight</td>
            <td>for this widget to work the target must have a width and height. It tries to guess the height of the target by using the outer height of the first item</td>
            <td>true</td>
        </tr>
        <tr>
            <td>refreshOn</td>
            <td>This is element upon resize the refresh method is called. If you have a special event plugin that detects elements rezise other than window you can change this from the default</td>
            <td>$(window)</td>
        </tr>
        <tr>
            <td>label</td>
            <td>controls what the more link says, can be text or html</td>
            <td>more</td>
        </tr>
    </tbody>
</table>
<h3>Methods</h3>
<table width="700" cellspacing="0" cellpadding="0" border="0" style="">
    <thead>
        <tr>
            <th scope="col">name</th>
            <th scope="col">description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>refresh</td>
            <td>you might call this if you added another item option to the target and you want it to show up in the secondary menu</td>
        </tr>
        <tr>
            <td>open</td>
            <td>show the secondary menu</td>
        </tr>
        <tr>
            <td>close</td>
            <td>hide the secondary menu</td>
        </tr>
        <tr>
            <td>toggle</td>
            <td>toggle the secondary menu</td>
        </tr>
    </tbody>
</table>
<h3>&nbsp;Events</h3>
<table width="700" cellspacing="0" cellpadding="0" border="0" style="">
    <thead>
        <tr>
            <th scope="col">name</th>
            <th scope="col">description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>change</td>
            <td>triggered after the refresh method has finished</td>
        </tr>
        <tr>
            <td>beforeChange</td>
            <td>triggered before the meat of the refresh method</td>
        </tr>
        <tr>
            <td>close</td>
            <td>triggered after the secondary menu is hidden</td>
        </tr>
        <tr>
            <td>open</td>
            <td>triggered after the secondary menu is shown</td>
        </tr>
    </tbody>
</table>
<p>&nbsp;</p>
