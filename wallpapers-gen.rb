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


 File.open("#{path}index.md", 'w') { |file| file.write(
"---\n
layout: desktop-wallpaper-rss
title: desktop-wallpapers
images: [#{ imgs.join(',')}]
---\n
"
    ) }