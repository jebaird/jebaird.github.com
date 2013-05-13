--- 
created: 1248987696
title: Before you move to Voice over IP have these bases covered
layout: post
tags : [Opinion]
---
<p>EdgeCore just moved office buildings and I was put in charge of setting up the network and phone systems.  A couple of the guys recommended VoIP.  It sounded like a good idea at the time.  So I went along with the recommendation.  I got a quote from 8x8.com and everything looked good.  My next step was to call up the local utility company and get an internet connection that would support VoIP. The local utility company recommended the 8mb down and 1.5mb up for voice over IP for $80 a month.  I was told that many small businesses manager in the area use that many businesses in the area use the same connection to run VoIP.</p>
<p>So I ordered the phones from 8x8.com.  I got the connection installed and setup the network and started testing.  Everything was looking good and working.  I did multiple tests with 3 or 4 clients on the network while simulating 2 calls at once.  The down and down connection speed looked good as well as the packet loss.  The only thing that concerned me was the Jitter.</p>
<p><br />
After getting all other users onto the network and doing some more tests the network performance degraded very quickly.  The connection couldn't sustain a constant upload speed it kept dropping packets and the connection jitter was through the roof.  Needless to say we didn't stick with VoIP due to a crappy ISP connection.</p>
<p>Based on my experiences here are a few things that you should look into before getting VoIP for your small business.</p>
<p>&nbsp;</p>
<ul>
    <li>Pick your ISP wisely, see if you can do some tests on their network with some load on it to see if the connection holds up.  Try testing it during different times of the day to see if there connection speed varies</li>
    <li>Chat with the VoIP tech support to see if they recommend any specific network configurations.  Like using 2 VLANs. One for phones and one for PCs.</li>
    <li>Use a router that supports QoS (quality of service).  Configure the router so it puts priority on the VoIP connections.</li>
    <li>Use a squid proxy server to cache your user&rsquo;s http requests.  This will take some pressure off of your connection.</li>
</ul>
<p>And remember Murphy's Law always applies no matter how much testing you do</p>
