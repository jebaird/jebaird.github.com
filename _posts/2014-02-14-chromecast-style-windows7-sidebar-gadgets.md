---
title: Chromecast Style Windows 7 Sidebar Gadgets
layout: post
tags: [windows, projects]
---

I've had a Google Chromecast for a couple of months, one of the things that I really like about it is how the time was displayed in the bottom left corner. So I decided to create a set of windows sidebar gadgets that look like they would fit on the Chromecast display along with the time. 

![the default chomecast display](/media/2014-02-14-chromecast-style-windows7-sidebar-gadgets/chromecast.jpg)

The Chromecast default display when its turned on.


## Installation

You can download the *.gadget files [here](/media/2014-02-14-chromecast-style-windows7-sidebar-gadgets/chromecast-style-windows7-gadgets.zip).

If you have node installed you can clone / download from [https://github.com/jebaird/win7-chromecast-gadgets](https://github.com/jebaird/win7-chromecast-gadgets). From the target directory run `npm install` then `grunt copy`. Now add the gadget to your desktop. 

This is the best way to insure you have the latest version(s).

## Text

![screenshot of the text widget](/media/2014-02-14-chromecast-style-windows7-sidebar-gadgets/text.png)

Allows you to display any text you would like. I've found this quite useful for displaying custom shortcut keys and or reminders. 


## Date

![screenshot of the date widget](/media/2014-02-14-chromecast-style-windows7-sidebar-gadgets//date.png)

This gadget displays the current date in a non nonsense fashion.

## Weather

![screenshot of the weather widget](/media/2014-02-14-chromecast-style-windows7-sidebar-gadgets//weather.png)


Displays the current weather data from the [open weather map api](http://openweathermap.org/API).


## Pidglet

![screenshot of the Pidglet widget](/media/2014-02-14-chromecast-style-windows7-sidebar-gadgets//pidglet.png)

Displays a current list of your contacts that are online. Its an alternate display for this [plugin](https://code.google.com/p/pidglet/). Some of the code is borrowed from their gadget code.

It depends on this pidgin plugin being installed and working [https://code.google.com/p/pidglet/](https://code.google.com/p/pidglet/) Download and install it before trying to get this gadget to work.


## What about a clock?

[Presto's Sidebar Clock](http://prestonhunt.com/story/110) is one of the best windows gadgets avaliable. And can be easily configured to look like the other gadgets in this collection.





