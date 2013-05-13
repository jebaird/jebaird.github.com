--- 
created: 1250267095
title: Clearing a Firefox Session Manually
layout: post
tags: [firefox]
---
<p>Every once in a while I run in to a small issue with Firefox not loading correctly when i save my session.&nbsp; It seems to happen when I have multiple tabs open that have lots of JavaScript running in them.&nbsp; In my case I couldn't access the GUI like in the method shown <a href="http://webtoolsandtips.com/firefox/firefox-restore-session/" target="_blank">here</a> or <a target="_blank" href="http://kb.mozillazine.org/Session_Restore">here</a>.&nbsp; I had to manually delete the session file in my Firefox profile. Here's how to do it.</p>
<ul>
    <li>From <strong>My Computer</strong> navigate to <strong>C:\Documents and Settings</strong> and click on the folder that is named your windows xp user name Or hold the <strong>windows key</strong> and press the <strong>R </strong>key.&nbsp; I'll notice that the Run dialog pops up, now type in <strong>%appdata%</strong></li>
    <li>Find the folder named <strong>Mozilla</strong></li>
    <li>Click on the folder named <strong>Firefox</strong></li>
    <li>Click on the folder named <strong>Profiles</strong></li>
    <li>You should be in \Documents and Settings\YOURUSERNAMAE\Application Data\Mozilla\Firefox\Profiles\</li>
    <li>In this folder there might be more than once folder.&nbsp; Select the one that has the newest date modified.&nbsp; This should be your profile</li>
    <li>Find the file named<strong> sessionstore.js</strong> and delete it.</li>
</ul>
<p>&nbsp;</p>
