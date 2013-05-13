--- 
created: 1301008734
title: Changing the background color of a ckeditor instance
layout: post
tags: [ckeditor]
---
<p>ckeditor is great once you get past the steep learning curve. Lately I have been looking for a way to change the background color of the editor / where you enter in the content on the fly. If you google &quot;ckeditor change background color&quot; you will find that most results suggest changing the background color using a theme stylesheet witch works for most cases. For my use case this wasn't going to fly. So after exploring my ckeditor instance in firebug I stumbled across this.</p>
<p>Create your Instance</p>
<pre class="brush: html">
&lt;textarea cols=&quot;100&quot; id=&quot;editor1&quot; name=&quot;editor1&quot; rows=&quot;10&quot;&gt;&amp;lt;p&amp;gt;This is some &amp;lt;strong&amp;gt;sample text&amp;lt;/strong&amp;gt;. You are using &amp;lt;a href=&quot;http://ckeditor.com/&quot;&amp;gt;CKEditor&amp;lt;/a&amp;gt;.&amp;lt;/p&amp;gt;&lt;/textarea&gt;
</pre>
<pre class="brush: js">

&lt;script type=&quot;text/javascript&quot;&gt;
&nbsp;&nbsp; &nbsp;// Replace the &lt;textarea id=&quot;editor1&quot;&gt; with an CKEditor instance.
&nbsp;&nbsp; &nbsp;var editor = CKEDITOR.replace( 'editor1' );
&nbsp;&nbsp; &nbsp;editor.on( 'instanceReady', function( ev ){
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;//set the background properties
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.document.$.childNodes[1].childNodes[1].style.backgroundColor = 'Blue';
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; editor.focus();
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; });
&lt;/script&gt;</pre>
<p>&nbsp;</p>
<p><em>this.document.$.childNodes[1].childNodes[1]  </em> trversese down to the instances body tag were you can apply your styles, in my case background color</p>
