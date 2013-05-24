---
layout: post
title: Avoid Using Shorthand When Building a CSS Framework
tags: [ css, opinion ]
---

Building a css framework is a bit different than vanilla css. Consider this css block.

```css
.box {
	padding: 5px 10px 5px 15px;
}
```

It's pretty straight forward, there is nothing new here. But if you wanted to override the padding value using shorthand you would have to do something like this. 

```css
.page .box{
	padding: 5px 10px 5px 1500px;
}
```
That's great if the rest of the padding never changes. If it does you would have to find all of the instances of .box selector and update them.

Lets say the class "box" was part of a framework you were building. You could define the padding like this.

```css
.box {
	padding-top: 5px;
	padding-right: 10px;
	padding-bottom: 5px;
	padding-left: 15px;
}
```

Then you could could override the padding-left for the specific case for .page .box

```css
.page .box{
	padding-left: 1500px;
}
```

This may seem like a very counter intuitive way of doing things. But it makes your css very flexible. Which is great when you are building a framework.

### Where its great

1. Explicit over Implicit. This method makes it very easy to override one rule's value. Just supply a heavier weighted selector and your done.
```css
.fancy .page .box {
		padding-top: 1em;
		padding-left: 1500px;
}
```
 
2. Maintenance. When building a framework I think a true test is how easy it is to maintain and the projects using it. If you constantly have to rewrite the framework css and or override the framework css in the project it might be time for an evaluation.
3. Clarity. From designers to css engineers its very clear what you intend to override. How many of us can remember the font short hand? I have to look that one up every time. 
4. File size. When served gziped the files should be smaller due to how it works. Its more likely that padding-left: will occur more often than 1em; From: http://www.gzip.org/algorithm.txt
> 
Duplicated strings are found using a hash table. All input strings of
length 3 are inserted in the hash table. A hash index is computed for
the next 3 bytes. If the hash chain for this index is not empty, all
strings in the chain are compared with the current input string, and
the longest match is selected.


### Where it fails

Yes there are some draw backs

1. If you're using a CSS pre-processor this might not be as useful depending on your requirements
2. Background images, box shadow, any rule that you can define many values for etc. If you want to use multiple background images on the same class name you will have to redefine ever time you want to "extend" the class.

When I first started developing I read a post that made an impression on me. The gist of it was, "Just because you can use all of the features of a language doesn't mean you should." I think this rings very true for css. There is a time and a place for each feature, I think shorthand doesn't belong with framework css.