---
title: Minifying CSS in Jekyll with cssify and strip_newlines
layout: post
tags: [jekyll,css]
---

I recently discovered that Jekyll now supports SCSS and SASS files. Which is pretty cool because before you couldn't use easily use them with github pages. Kevin Sweet the developer who wrote the filters for jekyll 2.3.0 breaks them down in this [post](http://www.kevinsweet.com/inline-scss-jekyll-github-pages/)

In his example you can inline scss via

	<head>
	  <style type="text/css">
	    {% capture include_to_scssify %}
	      {% include style.scss %}
	    {% endcapture %}
	    {{ include_to_scssify | scssify }}
	  </style>
	</head>

Which works great! But, my blog is setup to use an external stylesheet in which I include all of the styles that drive my site. Here is what my styles.css looks like



	// css/styles.css
	---
	layout: null
	---
	{% capture include_to_scssify %}
	    {% include css/normalize.css %}
	    {% include css/skeleton.css %}
	    {% include css/layout.css %}
	    {% include css/layout-tag.css %}
	    {% include css/print.css %}
	{% endcapture %}
	{{ include_to_scssify | scssify }}

Which works well and produces css that looks like

	.nav{ padding: 20px; }
	
	a{ color: blue; }
	
	input { color: red; }

Even though it was removing the newlines in the rule blocks it wasn't removing them inbetween each rule set. So I added the `| strip_newlines ` filter to my output. Thus removing the newlines from the "complied" CSS. Now my styles.css looks like this.


	// css/styles.css
	---
	layout: null
	---
	{% capture include_to_scssify %}
	    {% include css/normalize.css %}
	    {% include css/skeleton.css %}
	    {% include css/layout.css %}
	    {% include css/layout-tag.css %}
	    {% include css/print.css %}
	{% endcapture %}
	{{ include_to_scssify | scssify | strip_newlines }}

In total I only saved about 1k. But every little bit helps right?