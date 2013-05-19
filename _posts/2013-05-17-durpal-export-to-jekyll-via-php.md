---
layout: post
title: Export your Drupal content to Jekyll using PHP
tags: [php,jekyll]
---

Just this past week I migrated this blog over to Jekyll from Drupal. I had been using Drupal for the last couple years and I was getting frustrated with how many steps it took to post articles. So I decided to make the switch. 

Looking that the sparse Jekyll [documentation](http://jekyllrb.com/docs/migrations/) it appeared that migrating the content was going to be pretty easy. It was once I figured out that wouldn't be able to get mysql plus to compile on windows. I was finally able to install jekyll on my hosting account and export the content that way. 

It seemed like a big hurdle to get all of the ruby gems to work on windows just to export the content. So after I got my blog fully migrated over I decided to write this migration script in php. 

<script src="https://gist.github.com/jebaird/5600267.js"></script>

I hope this speeds up your migration process. Please feel free to add any tweaks.