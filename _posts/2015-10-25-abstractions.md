---
title: Abstractions
tags: [ opinion ]
layout: post
---

In the past few months, I discovered these quotes

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">&quot;It’s much easier to recover from no abstraction than the wrong abstraction.&quot; <a href="https://twitter.com/sebmarkbage">@sebmarkbage</a></p>&mdash; getify (@getify) <a href="https://twitter.com/getify/status/619530659753648129">July 10, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>


<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">First you learn the value of abstraction, then you learn the cost of abstraction, then you&#39;re ready to engineer</p>&mdash; Kent Beck (@KentBeck) <a href="https://twitter.com/KentBeck/status/258316233068396544">October 16, 2012</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>


In general I've felt that this statement is very true. We build frameworks and libraries that help us to solve problems only once.

In a recent project at ONTRAPORT, I was able to use web components in production for the first time. So far it has turned out pretty good. The components are encapsulated pieces or units of code that play really nicely together and fit into our current infrastructure pretty well. 

One of the components I built was a dialog. By default the dialog is rendered with `display: none`. To open the dialog you have to set the attribute `opened`. You can easy do this with jQuery `$('dialog').attr( 'opened', true)` or `document.querySelector('dialog').setAttribute('opened', '' )`. Given our current tool set and requirements for this project I felt that either way was pretty easy to understand how to open a dialog. 

But after the code was in the the repository for a month or so, one of the developers working closely on this project asked me how I felt about adding `.open()` and `.close()` methods to the element prototype. Initially, I did not like the idea. Adding the methods would add 2 more ways to open and close the dialog. Also, it would add ambiguity to how additional functionality should be added to the component. Say the product team comes up with a new requirement, which requires that a new event fires when the dialog is opened. If the methods are added should that functionality be added to the open function? Or do you add a mutation observer on that attr? Currently, how it stands without the open and close methods, you would have to use a mutation observer or the attributeChangedCallback depending on the requirements. 

This got me thinking. I tried to devise a system where I didn't abstract any of the methods from what the browser had provided, yet there was still a question of should this be added. 

I think this can be explained in 2 ways. The first is that a developer didn't know enough about the core APIs that are provided by the browser. That responsibility falls on the both of us. My problem was not communicating the requirements and the "vision" on how this is supposed to work. His problem is not doing enough reading(need more here).

The second is that even if you try to get away from an abstraction, in the end you are trying to sell an idea. Some ideas and through processes are harder to sell and or process than others. But that doesn't mean that no abstraction is "better" in terms of selling it. You still end up jumping through cognitive hoops, and trying to relate "new" problems with problems you have already solved. 

So in short, just because you think you have little to no abstraction in your unit of code doesn't mean it will be any easier for anyone including you to see the vision that you had when you initially wrote the code.


