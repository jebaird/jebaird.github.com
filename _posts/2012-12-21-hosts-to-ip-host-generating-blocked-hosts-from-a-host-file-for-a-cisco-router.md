--- 
created: 1356143845
title: Hosts to Ip Host, generating blocked hosts from a host file for a cisco router
layout: post
---
<p>I recently ditched add block plus for firefox because it was eating my machine alive. I switched to using hostsman witch is a great utility for windows. But I felt that there was a better way to block ads for my entire home network. Since I have a Cisco router I decided to set it up as a domain forwarder. I needed to setup a list of hosts to block. So I decided to make this script to pull the great hosts file from <a target="_blank" href="http://someonewhocares.org ">someonewhocares.org </a>(many thanks to them!)   But Cisco being Cisco didn't make it easy on me.</p>
<p>Here is the php script, feel free to fork and tweak to your hearts content!</p>
<p>Its possible you might get an error message stating that the nvram isnt big enough to hold the running the config when you try to copy it to the startup-config. Check out <a href="https://supportforums.cisco.com/docs/DOC-1841">https://supportforums.cisco.com/docs/DOC-1841</a> this to page to help fix the issue.</p>
<script src="https://gist.github.com/4357122.js"></script>
