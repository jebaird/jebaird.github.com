--- 
created: 1267811920
title: Using Regular Expressions to Test Variable values
layout: post
---
<p>When creating a function in javascript its a good idea to check object  the object&nbsp;type(s) of the arguments pasted to function.&nbsp; Lots of times you end up with code looking like this to do this</p>
<pre class="brush: js">
if(typeof(foo)=='undefined'|| foo==''){
         ////do something
    }
</pre>
<p>Earlier this week I ran across Paul Irish's <strong><a title="jQuery Anti-Patterns for Performance &amp;
Compression" href="http://www.slideshare.net/paul.irish/perfcompression">jQuery   Anti-Patterns for Performance &amp; Compression</a></strong>.&nbsp; In there he mentioned using a regular expression to check to see if a variable contains a value.</p>
<pre>
//from the slide in the presentation
//instead of this 
if(type=='foo'||type==bar){
}
//use this

if(/^(foo|bar)$/.test(type)){
}
</pre>
<p>That got me thinking, would it the code above be faster even if I added to the regular expression to check the type?&nbsp; So I crafted a quick exprement. He is my test code</p>
<pre class="brush: js">
function bar(foo){
    //console.log(typeof(foo));
    console.time('regex');
    	if(/^(\s)*$|^(undefined)+$/.test(foo)){
	   //console.log('regex')
	}
    console.timeEnd('regex');
    console.time('typeof');
    if(typeof(foo)=='undefined'|| foo==''){
         ////console.log('||');
    }
    console.timeEnd('typeof');
    
}
bar('');

</pre>
<p>Time taken over 50 literations</p>
<table width="100%" cellspacing="0" cellpadding="0" border="0">
    <thead>
        <tr>
            <th scope="col">argument value/type</th>
            <th scope="col">/^(\d)*|(undefined)+$/.test(foo)</th>
            <th scope="col">typeof(foo)=='undefined'|| foo==''</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">undefined</th>
            <td>12ms</td>
            <td>10ms</td>
        </tr>
        <tr>
            <th scope="row">''</th>
            <td>8ms</td>
            <td>12ms</td>
        </tr>
    </tbody>
</table>
<p>As you can see its pretty much a wash when the argument is the undefined. But when when the value is an empty string this method very fast.&nbsp; Granted that my test has a very small scope, but its enough to convince me that using a regular expression to check the type/value is a good practice.</p>
