---
title: Code style guides, personal preference or a set of best practices
tags: [opinion]
---

Early in 2013 Ontraport engineering team decided on a code style guide. After years of everyone coding to their own standard we now have a unified style across all languages. Everyone on the team voted so it was about as fair as it could be. 

Most of my style preferences were not voted in. It left me scrambling for rebuttals to try to convince my other teammates that they were making grave mistakes with their votes. I found my self having harder time reading the code with the new guide. Almost like it was in another dialect. The style choices that I found my self having to retype over were. 

New line brackets

	function test()
	{
		var code = 0;
	}
	
	object.method(function()
	{
		var code = 0;
	})
	
	//vs
	function test(){
		var code = 0;
	}

Double quotes over single

	$("<div/>")
	
	//vs
	
	$('<div>')

My arguments against these preferences where / are

1. Communities have grown around different languages. The community has somewhat influenced the style of the code. This is a good thing because if you're a [insert you're language here] developer and leave company A for company B, I think there is a level of exception for what the code style should be. Because you are a member of that languages community
2. Every language has developed a style that's best suited for its development. I think this is more true for front-end side languages. Semi colons or not, trailing white space, etc. The style guide more boarders on the side of best practices weather than a personal preference. I think this is expressed in the jshint and jslint tools. 
3. Traditionally C derived languages don't pass functions as methods `map(function(key,val){....})`. But with the addition of lambda functions in php and in c this point will carry less weight in the future.

In reality all of my points are subjective, based on my personal preferences which are rooted in the languages I first learned to code in. It's easiest to continue doing things the way in which you have always done them. Its great to be passionate about your code style and advocate for its use. It's not Okay to spend days debating it. That's time and money that could be better spent on other projects. This is something that we need to think about as developers. Yes in a way the code style is our interface with the code. But most of us work for companies that depend on us to produce a product in a timely manner. In short I had to swallow my pride in support of the team. 

Since I don't naturally type code in the decided upon style, I have found my self leaning on Aptana's code formatting tool much more than in the past. We should be able leverage the tools around us to make our work flow better. 

Since I wrote this post we have have added different code styles for front end and server side code. So this rant/post was all for not. =)
