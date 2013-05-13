--- 
created: 1274755232
title: Setting new default options for jQuery UI widgets
layout: post
tags: [jQuery UI]
---
<p>I was messing around with the dialog widget trying to figure out away to have it remove its self after the user closed the dialog.&nbsp; I tried listening to the dialogclose event but that didn't work.&nbsp; After playing around with it turns out you can override the default options like so.</p>
<pre class="brush: js">
$.extend($.ui.dialog.prototype.options, {
        close:function(){
            $(this).dialog('destroy').remove();
        },
        modal: true,
    });
</pre>
<p>You can override any of the widgets default options by changing ui.dialog to ui.progressbar, ui.datepicker ,etc</p>
