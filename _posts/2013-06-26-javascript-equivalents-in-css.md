---
layout: post
tags: [javascript, css ]
title: JavaScript Equivalents in CSS
---

With the wide support of css 3 we can use css to do some of the things that could only be done in javascript in the past. Here are a couple of my favorites.  


### Togging an element visibility with :hover

Using the pseudo selector :hover, we can show and hide elements using only css. This is pretty handy for tooltips and popup controls. 

[:hover demo](/demos/2013-06-26-javascript-equivalents-in-css/hover.html)

### Using pointer events to disable clicks

At Ontraport, we have a css framework that uses pointer-events on the state-disabled class to disable buttons, inputs and links. It helped cut down on the size of our javascript.

[pointer-events demo](/demos/2013-06-26-javascript-equivalents-in-css/pointer-events.html)


### Using :empty to highlight newly created elements

The :empty pseudo selector is pretty handy for hiding elements that don't have any content.

[hide empty elements demo](/demos/2013-06-26-javascript-equivalents-in-css/empty.html). 

Another great use of :empty is to highlight newly created items / containers in your application.

[highlighting newly created elements demo](/demos/2013-06-26-javascript-equivalents-in-css/empty-app.html).


### Read more... Using Text overflow

There are hundreds of jQuery plugins that tackle the pattern of hiding parts of an paragraph. But its easy to setup something like this using only css. 

[Text overflow / more... demo](/demos/2013-06-26-javascript-equivalents-in-css/text-overflow.html)


### Wrapping up

Keep in mind, you should use the right tool for the job. In some cases javascript is still the best way to get things done. I'm going to keep looking for javascript equivalents in css.
