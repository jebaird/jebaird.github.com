---
title: Useful Plugins for Aptana Studio 3, Part Deux
layout: post
tags: [aptana studio]
---

This is a follow up post to [post_title 2012-11-02-useful-plugins-for-aptana-studio-3]({% post_url 2012-11-02-useful-plugins-for-aptana-studio-3 %}). Since writing that post I have
stumbled on a couple other useful plugins / tools I would like to share. 


## Fullscreen

I looked for a full screen plugin after being enamored with LightTable's fullscreen feature.
This plugin hasn't been updated in quite some time but, it still works great. 

### Installation

Its currently hosted on [code.google.com/p/eclipse-fullscreen/](https://code.google.com/p/eclipse-fullscreen/). The update site does not work but if you download the zip from
the downloads section and extract the .jar contained in the zip and copy it into your
plugin directory and restart Aptana. 

By default in windows the plugin directory path is `C:\Users\[YOURUSERNAME]\AppData\Local\Aptana Studio 3\plugins`

You can toggle fullscreen via `window -> fullscreen` or the shortcut `Ctrl+Alt+Z`

## MiniMap View

This plugin adds a view option of mini-preview a the current file. It works like 
the one featured in sublime text. Its pretty handy for large files.

You can find the source here [github.com/apauzies/eclipse-minimap-view ](https://github.com/apauzies/eclipse-minimap-view ).

### Installation

Copy and paste the content of the dropins folder to Aptana drops in folder. In windows
the path is `C:\Users\[YOURUSERNAME]\AppData\Local\Aptana Studio 3\dropins`

Then using the Window menu, `Show View -> Other -> MiniMap -> MiniMap`


## GitHub Flavored Markdown viewer

This plugin provides rendering of markdown files in the github flavor. You can read
all of the docs here.

### Installation 

This plugin can be installed via `Help -> Install New Software` dialog, clicking on the `..Add button`
and adding a software source url `http://dl.bintray.com/satyagraha/generic/1.8.1`

## CSSLint

> CSSLint is a tool to help point out problems with your css. - CSSLint docs

The docs and source can be found at [github.com/stubbornella/csslint](https://github.com/stubbornella/csslint) 

I haven't personally tried running this in Aptana, but I thought it would be worth 
sharing. You can find the instructions [hubhar.wordpress.com/2011/11/03/steps-to-setup-css-lint-in-eclipse-based-on-rhino/](http://hubhar.wordpress.com/2011/11/03/steps-to-setup-css-lint-in-eclipse-based-on-rhino/). Since there currently isn't a eclipce plugin for it, the setup is
kinda in depth. 

## Resources for Themes

Who doesn't like pretty things? I know I do. If you have messed with the build it theme editor 
you know its is a bit cumbersome. I have found these two sites to be good sources
of themes.

* [eclipsecolorthemes.org](http://eclipsecolorthemes.org)
* [tmtheme-editor.herokuapp.com](http://tmtheme-editor.herokuapp.com/)


To install a theme `Window > Preferences > Aptana Studio > Themes` click on the button named `Import` and select your desired theme.




