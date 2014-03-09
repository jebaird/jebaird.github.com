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
title: Jesse Baird's curated collection of wallpapers
images: [#{ imgs.join(',')}]
use-echo: true
---\n
A set of hand picked wallpapers from various sources around the web. 

Images prefixed with jebaird- are ones that Jesse Baird took.
wallpaper- indicates that the image was downloaded from wallbase.cc
All images are property of their owners.

[view the rss theme](/wallpapers/index.xml)

[get the windows 7 theme](/wallpapers/jebaird-collection.theme)


"

    ) }