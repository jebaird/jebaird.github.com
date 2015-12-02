---
title: Developers Ruined the English definition of Love
layout: post
tags: [ opinion ]
---

A friend of my recently sent me this video

<iframe width="560" height="315" src="https://www.youtube.com/embed/4EPnhuq9vVo" frameborder="0" allowfullscreen></iframe>

It got me thinking about how language is everything when it comes to expression of self. And even more so when it comes to development and code. Which led me to this conclusion. 

Developers and like minded people ruined the English word for love. I think the Greeks had it right with 4 definitions. Which in short are as follows

* Agápe - brotherly love
* Éros -  "love, mostly of the sexual passion."
* Philia -  "affectionate regard, friendship," usually "between equals."
* Storge - "love, affection" and "especially of parents and children"

> https://en.wikipedia.org/wiki/Greek_words_for_love

Compare that with the English definition

* an intense feeling of deep affection
* a person or thing one loves

I think the Greek definitions leave less ambiguity as to what they mean verses the English ones.

We developers saw that all four words had similar meaning decided to combine them. Thus creating an abstraction. You can see this play out in development when we make base classes like `person` then create classes that extend from that called `student` and `teacher`. I think the difference is that student and teacher have different roles and are different people. Love is something that means different things at different times. 

I think the core  problem was that we didn't document and or communicate why we created this abstraction for the work love. I don't think abstractions are bad. But I think we need to be careful about how we try to relate objects and concepts together. If we do decide they are similar enough we should communicate it more that you did with your first girl / boy friend. Document your code, email every three times, and call people out in code review. Hopefully development process will help and curate the definition of the abstractions you make. 


Thanks to [Travis Fox](http://www.kinixcreative.com/) and Steven Schneider for their feedback on this post.
