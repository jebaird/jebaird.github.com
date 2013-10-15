---
layout: post
title: jQuery cloneVal, automatically copy :input values 
tags: [jquery, project]
---

It's been awhile since I released a good old fashion jquery plugin. cloneVal targets :inputs on a form and lets you copy/clone the value to one or a set of target :inputs. 


* [view the code in action](/demos/2013-10-12-jquery-cloneVal)
* [GitHub](https://github.com/jebaird/jquery-cloneVal)

A piratical use case for this plugin would be an e-commerce form with billing and shipping fields containing a checkbox labeled "My billing and shipping addresses are the same" When that's checked copy / clone the values to the shipping address fields.

Take this sample markup into consideration

	<form>
		<input type="text" name="a">
		destination<br>
		<input type="text" name="b">
		<input type="text" name="c">
	</form>

If we wanted to copy a's value to b and c, we would setup the plugin like this

	$('form').cloneVal({
            targets:[
                [
                	//copy a input to b and c
                    "[name=a]",
                    "[name=b]",
                    "[name=c]"
                ]
            ]
        });

This sets up event delegation on form in the event namespace "cloneVal"(by default)

If you want to disable this event handlers just call

`$("form").off(".cloneVal")`

