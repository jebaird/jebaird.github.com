exts = [
    '.png',
    '.jpg',
    '.jpeg'
]
imgs = []

path = "wallpapers/"

Dir.glob("#{path}*") do |item|
    next if  exts.index(File.extname(item)) == nil
    # do work on real items
    puts "working on: #{item}... - #{exts.index(File.extname(item))}"
    imgs << item
end


 File.open("#{path}index.xml", 'w') { |file| file.write(
"---\n
layout: desktop-wallpaper-rss
title: desktop-wallpapers
images: [#{ imgs.join(',')}]
---\n
"
    ) }

 File.open("#{path}index.md", 'w') { |file| file.write(
"---\n
layout: photo-gallery
title: Jesse Baird's collection of wallpapers
images: [#{ imgs.join(',')}]
use-echo: true
---\n

It seems that everyone as a collection of wallpapers that they have been working on since the dawn of images on the Internet. 
I've decided to share mind in the format of an rss feed.
## Sources

I try to acknowledge the source of the image via prefixing its filename.

Images prefixed with ...

* **jebaird-** I took at some point in the last few years. 
* **wallpaper-** I found on [wallbase.css](http://wallbase.cc)

Also this collection includes images from sources unknown.



## Access

The [windows 7 theme](/wallpapers/jebaird-collection.theme) can be found here

[view the rss theme](/wallpapers/index.xml)

Note: I would love to add support / how to for other platforms other than Windows 7.

Here are all of the wallpapers / backgrounds in the collection thus far. All images are property of their owners.

"

    ) }