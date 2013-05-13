--- 
created: 1275440794
title: Data Registry, Simple Data Caching for JavaScript
layout: post
tags: [javascript]
---
<p>In most of the web apps I have written I have had to track / cache simple. It might a jQuery selector or a small group of objects in an array.&nbsp; In some form or another I end up doing something like this to get / set data.</p>
<pre class="brush: js">
appname.data.user[appname.data.state.activeUser].username;</pre>
<p>Enter dataReg! Its a simple data caching object that allows you to simplify this process. You can turn that fragment of code into</p>
<pre class="brush: js">
dataReg.get('user',dataReg.get('state','activeUser')).username;
</pre>
<p>Its a lot cleaner than traversing the full object and it doesnt muck up your apps namespace.&nbsp; Its losely based off of the jQuery $.data method.</p>
<p>Here is the code in its entirety</p>
<pre class="brush: js">
/*
 * Data Registry
 * http://jebaird.com
 *
 * Copyright 2010, Jesse Baird
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Date: 6/1/2010 5:35:13 PM
 */
(function(){
    var cache={};
   window.dataReg={
        /*
            type string ie users - helps break apart the cache
            selector optional string || int 2, 'config.lang.somekey'
            data any type
        
        
        */
        set:function(type,selector,data){
            if(typeof data=='undefined'){
                data=selector;
            }
            if(typeof cache[type]=='undefined'){
                cache[type]={};
            }
            
            if(typeof selector=='undefined'){
                cache[type]=data;
            }else{
                cache[type][selector]=data;    
            }

        },
        get:function(type,selector){
            if(!type||!cache[type]){
                console.log('invaid type');
                return '';
            }else{
                if(cache[type][selector]){
                    return cache[type][selector]
                }
                if(cache[type]&amp;&amp;!selector){
                    return cache[type];
                }
            }
            return '';
        }
   } 
    
    
})();
</pre>
