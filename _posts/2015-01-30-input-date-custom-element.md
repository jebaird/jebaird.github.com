---
title: Custom date input that accepts different date formats for a default value
layout: post
tags: [ projects ]
---
* [demo](https://rawgit.com/jebaird/html5-input-date-value-pollyfill/master/demo.html)
* [github](https://github.com/jebaird/html5-input-date-value-pollyfill)

Setting the default value for an input from markup has been done by ` value="hello world"`. I thought this was true for all input types including, date. It turns out that is not the case. Unless the value attribute is in this format `YYYY-MM-DD` the input will not have the value pre-filled.

For example `<input type="date" value="2015-01-01">` is rendered correctly as <input type="date" value="2015-01-01">

But `<input type="date" value="2015/01/01">` isn't correctly rendered <input type="date" value="2015/01/01">

Or a more common date format of `MM/DD/YYYY` isn't rendered correctly either `<input type="date" value="1/1/2015">` is rendered as <input type="date" value="1/1/2015">

I find all of this a bit inconvenient, working with dates is already a bit painful. Allowing `/.-` to be used interchangeably as separators would lend to a more useable api.
 
So I decided to write a small function + custom element that tries to guess the date format and convert it to the default format that `<input type="date">` can use. Checkout the demo below.


<iframe src="https://rawgit.com/jebaird/html5-input-date-value-pollyfill/master/demo.html" width="100%" height="300px" ></iframe>

There is also a custom element included, adding `is="date-parse-value"` to your date inputs will auto run the parser script.

The code can found on [github](https://github.com/jebaird/html5-input-date-value-pollyfill). Keep in mind it only parses simple date formats and is not meant to be a one size fits all solution.