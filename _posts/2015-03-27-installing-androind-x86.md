---

title: Installing Android x86 on a Gateway LT21 Netbook
layout: post
tags: [ hardware, android ]
---

Quite a few years back I jumped on the netbook craze and bought one. I was pretty cool to have a small computer that actually had 8 hours of battery life. But in the last year or so, I found it unusable running windows and or linux desktop. Leaving it to collect dust on the shelf. Last month I re discovered the android x86 project, and decided that my netbook would work great with it installed on it. 

## Installation

1. On windows I used [rufus](https://rufus.akeo.ie/) to transfer the livecd image on to the hard drive

1. I used [easeUS partition master](http://www.easeus.com/partition-manager/epm-free.html) to shrink the size of the partition down to 450 megs

1. I created a new partition the with the remainder of the free disk space and formatted it with ext3

1. From there I was able to run boot from the hard drive and run the installation process. A couple notes
    * If android is the only os on then hard drive install grub boot loader
    * if the target partition is ext3 then android will be able to use the entire drive . Say the file system was fat32 then the installer would ask you to create a "sd card" image, which would max out at 2 gigs because that's the largest file size allowed with fat32.

## Things that work out of the box

* wifi
* suspend / resume
* mouse 
* keyboard
* screen brightness
* camera
* microphone
* sound, speakers, and headphone jack



### Apps

Right after I got a working install, all of of the following apps seemed to work as expected.

* google music
* google inbox
* hangouts
* google keep
* chrome
* netflix
	* local playback doesn't seem to work but casting does.

### keyboard shortcuts

| key | action |
|--- |---|
| esc| back|
| alt + left arrow| toggles cli and the x windows|
| windows key | home|
|menu key | home long press
| alt + tab| works just like windows  / linx alt + tab


On my gateway lt21 the following function / media keys work

* screen brightness
* mute
* volume up / down
* suspend

### mouse actions

| gesture| location | action |
|--- |---|---|
| two finger swipe up| * | swipe down|
| two finger swipe down | * | swipe up|
| two finger swipe left | * | swipe left|
| two finger swipe left | * | swipe right|


Its pretty cool to note that most of the keyboard short cuts that work for chrome on the desktop also work . 

Some of my favorites are

* ctrl + page up / down ,swap tabs
* ctrl + click, open link in a  new tab
* ctrl + t, new tab
* ctrl + w, close current tab



## Annoyances

### Battery status

Getting the battery to report the current percent of charge will require a bit of configuration. after reading the [documentation](http://www.android-x86.org/documents/howtoconfigurebatteryservice) On my install I had to do the following

* create this file structure /vendor/asus/system.prop
* vi /vendor/asus/system.prop

and pasted the following text into the newly created system.prop

	ro.sys.fs.power_supply.ac=/AC0
	ro.sys.fs.power_supply.bat=/BAT0
	ro.sys.fs.power_supply.ac.feature.online=/online
	ro.sys.fs.power_supply.bat.feature.status=/status
	ro.sys.fs.power_supply.bat.feature.present=/present
	ro.sys.fs.power_supply.bat.feature.capacity.now=/charge_now
	ro.sys.fs.power_supply.bat.feature.capacity.full=/charge_full
	ro.sys.fs.power_supply.bat.feature.voltage.now=/voltage_now
	ro.sys.fs.power_supply.bat.feature.voltage.full=/voltage_full
	ro.sys.fs.power_supply.bat.feature.tech=/technology
	#ro.sys.fs.power_supply.bat.features.bat.health is not supported
	#ro.sys.fs.power_supply.bat.features.bat.temperature is not supported

And restart, the battery should now report its status correctly. However I have noticed some times when you power off / on it still will report as 0% charged randomly, but all thats needed to fix it is another restart.


### Mouse cursor / I beam


![](http://i.imgur.com/AW0AEEU.png)

 Upon installation when typing with most apps the I-beam isn't visible when typing. Which makes it quite hard to see where you are in a sentence. You can fix this with

* installing [Null keyboard](https://play.google.com/store/apps/details?id=com.wparam.nullkeyboard&hl=en)
* adding it to the input settings via `settings -> input settings`
* at the top right of the screen the keyboard icon will appear, click it and disable the physical keyboard. Doing so will make the I-beam consistently show up when typing.

### no universal ctrl + z / undo

It seems in most apps that cntrl + z doesn't execute "undo". There dosen't appear to be a anything built in to android to make this work like it does in windows and or linux. From my experience `ctrl + v` and `ctrl + c` work in most apps

### Screen Rotation

Some apps like to highjack screen orientation to portrait mode. This is a  problem because my netbook doesn't have a g sensor to "reverse" the screen orientation. 

The built in "lock screen" orientation only gets you half way to preventing this from happening. I've had a couple apps still rotate the screen, bummer!

Lucky this [app](https://play.google.com/store/apps/details?id=com.googlecode.eyesfree.setorientation) will solve this issue and prevent the screen from being rotated



### Inverse Scroll

Scrolling / panning through screens is done is inverse due to android being built to run with touch screens. I think this is partail due to how the the touch pad is recognized and what driver is loaded. I you pulug a usb mouse and use the scroll wheel it works like you would expect in windows or linux.