--- 
created: 1351868996
title: Useful Plugins for Aptana Studio 3
layout: post
tags: [aptana studio]
---
<p>I  have been using Aptana Studio 3 for the past few years as my primary  IDE. But there are been features / plugins that I have wanted to  integrate into my setup. Since Aptana is based off of eclipse I thought  that finding plugins would be very easy. Turns out that I should have  been searching for Eclipse plugins instead of Aptana plugins. Here is my  plugin list / setup for Aptana.</p>
<p>In  case you didn&rsquo;t know, you can install new software in Aptana by going  to; Help &gt; Install new software &gt; and clicking on the add button</p>
<h3>Hunspell</h3>
<p>Url: <a href="http://hunspell4eclipse.googlecode.com/svn/trunk/com.lorands.hunspell4eclipse.updatesite/">http://hunspell4eclipse.googlecode.com/svn/trunk/com.lorands.hunspell4eclipse.updatesite/</a></p>
<p>This  will add a spelling service to Aptana. You will also need to download  the dictionary files for this plugin. I decided to use chromium&rsquo;s  dictionary files over the default. You can read about and download them from  here:</p>
<p><a href="http://dev.chromium.org/developers/how-tos/editing-the-spell-checking-dictionaries">http://dev.chromium.org/developers/how-tos/editing-the-spell-checking-dictionaries</a></p>
<p>At  minimum you will need an *.aff and *.dic fiile. To make it easy on you,  I have included the <a href="/media/2012-11-02-useful-plugins-for-apatan-studio-3/en_US.zip" target="_blank">en_US.zip</a> version of these files in this post.</p>
<p>After  you install the plugin you will need to go to Window &gt; Preferences  &gt; then General &gt; Editors &gt; Text Editors &gt; Spelling. And tell  the plugin where the dictionary files are.</p>
<h3>JsHint</h3>
<p>If you do front end development this is must.</p>
<p>Url: <a href="http://github.eclipsesource.com/jshint-eclipse/updates/">http://github.eclipsesource.com/jshint-eclipse/updates/</a></p>
<h3>Emmet</h3>
<p>I  just discovered this one. It aims to make your css html workflow  better, by allowing you to convert a css selector into markup. Its not  just for Aptana and or Eclipse. You can find the documentation and  installation instuctions here <a href="http://docs.emmet.io/">http://docs.emmet.io/</a>.</p>
<h3>jebaird / aptana-formatter-profiles</h3>
<p>I  started on creating a javascript code formatter profile that is as  close to the jQuery core style guide. You may or may not find it useful.  You can find it here: <a href="https://github.com/jebaird/aptana-formatter-profiles">https://github.com/jebaird/aptana-formatter-profiles</a></p>
<p>To  import this style guide, download it and go to Window &gt; Preferences  &gt; Aptana Stuido &gt; Formatter. Click the import button</p>

One of the most helpful things that I have found it is to search for eclipse plugins not aptana studio plugins. Since aptana is built on top of eclipse most of the plugins will work.
