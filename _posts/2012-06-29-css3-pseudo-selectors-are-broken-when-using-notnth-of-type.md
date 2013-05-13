--- 
created: 1340987390
title: CSS3 Pseudo Selectors are Broken When Using :not():nth-of-type()
layout: post
tags: [css ]
---
<p>CSS3 pseudo selectors have a lot of power. Lately I have been playing around with :not(), :nth-child() and :nth-of-type(). One thing that I discovered while working on table row striping is that :nth-of-type() and :nth-child() ignore / override :not(). I was trying to stripe all of the odd rows in a table. That's easy to do with table tbody &gt; tr:nth-of-type(odd) &gt; td but I wanted the striping to ignore rows that had a class nostripe. So I thought that something like this would work table tbody &gt; tr:not(.nostripe):nth-of-type(odd) &gt; td . It didn't work I tried various selector combinations with no luck.</p>
<ul>
    <li>table tbody &gt; tr:not(.nostripe):nth-of-type(odd) &gt; td</li>
    <li>table tbody &gt; tr:nth-of-type(odd):not(.nostripe) &gt; td</li>
    <li>table tbody &gt; tr:nth-child(odd):not(.nostripe) &gt; td</li>
    <li>table tbody &gt; tr:not(.nostripe):nth-child(odd) &gt; td</li>
</ul>
<p>Here is a quick demo on jsFiddle,.</p>
<p><iframe frameborder="0" allowfullscreen="allowfullscreen" src="http://jsfiddle.net/jebaird/kBhSg/26/embedded/" style="width: 100%; height: 300px"></iframe></p>
<p>It seems once you use :nth-of-type() or :nth-of-type() with :not() the :nth-of-type() or :nth-of-type() will override the :not() even it comes before them. This is quite frustrating because if you use those selectors in jQuery it comes back with the results you would expect. So I settled on a class based solution where every odd row gets a class of stripe. This isn't ideal but it will have to do until there is another css only solution.</p>
