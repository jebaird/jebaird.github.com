---

title: Installing Android x86 on a Gateway LT21 Netbook
layout: post
tags: [ hardware, android ]
---

A few years back I jumped on the netbook craze and bought the Gateway LT21. I was pretty cool to have a small computer that actually had 8 hours of battery life. But in the last year or so, It became un-usably slow running windows / linux. Leaving it to collect dust on the shelf. Last month I re-discovered the android x86 project, and decided to try it out on my netbook

![gateway lt21 running android x86 ](/media/2015-03-27-installing-androind-x86-on-a-gateway-lt21-netbook/KIMG0257.JPG)

## Installation

Booting off the live cd is a breeze. But I had to jump through some hoops to get it to install to the hard drive. The following are the steps I used to install Android x86 to my netbook's hard drive / ssd.

1. Download the live cd image from [android-x86.org](http://www.android-86.org). I used the 4.4 kitkat version.
1. On windows I used [rufus](https://rufus.akeo.ie/) to transfer the live cd image on to the hard drive.

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
	* Taking pictures with the camera app is a little slow. once the capture button is pressed its delayed by about 5 seconds
* sound, speakers, and headphone jack
* microphone


### Apps

Right after I got a working install, all of of the following apps seemed to work as they do on any android device.

* google music
* google inbox
* google now
	* Randomly, this app quits. Some days it works fine
	* "Ok Google", works great
* hangouts
* google keep
* chrome
* netflix
	* Local playback doesn't seem to work but casting does.

### keyboard shortcuts

| key | action |
|--- |---|
| esc| back|
| alt + left arrow| toggles cli and the x windows|
| windows key | home|
|menu key | home long press
| alt + tab| works just like windows  / linux alt + tab


On my Gateway LT21 the following function / media keys work

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


Its pretty cool to note that most of the keyboard short cuts that work for chrome on the desktop also work. 

Some of my favorites are

* ctrl + page up / down ,swap tabs
* ctrl + click, open link in a  new tab
* ctrl + t, new tab
* ctrl + w, close current tab



## Annoyances

Although most of the important things work without any configuration, there are features / settings that need to be tweaked before your install can be used.

### Battery status

Getting the battery to report the current percent of charge will require a bit of configuration. after reading the [documentation](http://www.android-x86.org/documents/howtoconfigurebatteryservice) On my install I had to do the following

* create this file structure `/vendor/asus/system.prop`
* `vi /vendor/asus/system.prop`

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

And restart, the battery should now report its status correctly. However I have noticed some times when you power off / on it still will report as 0% charged randomly, but all that's needed to fix it is another restart.


### Mouse cursor / I beam


![](http://i.imgur.com/AW0AEEU.png)

 Upon installation when typing with most apps the I-beam isn't visible when typing. Which makes it quite hard to see where you are in a sentence. I was able to fix this with

* Installing [Null keyboard](https://play.google.com/store/apps/details?id=com.wparam.nullkeyboard&hl=en)
* Adding it to the input settings via `settings -> input settings`
* At the top right of the screen the keyboard icon will appear, click it and disable the physical keyboard. Doing so will make the I-beam consistently show up when typing.

### No Universal ctrl + z / Undo

It seems in most apps that cntrl + z doesn't execute "undo". There dosen't appear to be a anything built in to android to make this work like it does in windows and or linux. From my experience `ctrl + v` and `ctrl + c` work in most apps

### Screen Rotation

Some apps like to hijack screen orientation to portrait mode. This is a problem because my netbook doesn't have a g sensor to "reverse" the screen orientation. 

The built in "lock screen" orientation only gets you half way to preventing this from happening. I've had a couple apps still rotate the screen, bummer!

Lucky this [app - set orientation](https://play.google.com/store/apps/details?id=com.googlecode.eyesfree.setorientation) will solve this issue and prevent the screen from being rotated



### Inverse Scroll

Scrolling / panning through screens is done is inverse due to android being built to run with touch screens. I think this is partially due to how the the touch pad is recognized and what driver is loaded. I you plug in a usb mouse and use the scroll wheel it works like you would expect in windows or linux.

Since I've gotten used to the inverse scroll, I really don't consider as annoying as it used to be. So I've given up on trying to switch the drivers around for the touch pad.


## Parting thoughts

I really gotta tip my hat to the Android x86 project! They really brought the android experience to the x86 platform in a way that I really never thought possible. If you have an old netbook, laptop or desktop lying around I would highly recommend checking it out.
