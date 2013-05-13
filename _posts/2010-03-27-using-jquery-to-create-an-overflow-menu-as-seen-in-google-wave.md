--- 
created: 1269723209
title: "Using jQuery to create an overflow menu as seen in Google Wave "
layout: post
tags: [jQuery]
---
<p>One of the features UI that Google wave uses is what I call the &quot;overflow&quot; menu. If you have a wave account you may have noticed that depending on your browser window size not all of the menu options are shown.&nbsp; The hidden options tucked away nicely in a drop down menu.&nbsp; On resizing your browser widow, options are added or removed from the menu.&nbsp; I thought that was pretty slick and thought it would be pretty easy to recreate the functionality using jQuery. So enough with the story on to the code.&nbsp;</p>
<p><strong>Update:</strong> I converted this code over to a jQuery UI widget. Check it out <a href="http://jebaird.com/blog/overflow-menu-jquery-ui-widget">here</a></p>
<p>The markup is pretty simple. We have to divs that hold the two different &quot;views&quot; for the menu options</p>
<pre class="brush: html">
 &lt;div id=&quot;menuWrapper&quot; class=&quot;f2&quot;&gt;
    &lt;div class=&quot;f2 full&quot;&gt;
        &lt;div class=&quot;item&quot;&gt;&lt;a href=&quot;#&quot;&gt;option one&lt;/a&gt;&lt;/div&gt;
        &lt;div class=&quot;item&quot;&gt;&lt;a href=&quot;#&quot;&gt;option two&lt;/a&gt;&lt;/div&gt;
        &lt;div class=&quot;item&quot;&gt;&lt;a href=&quot;#&quot;&gt;option three&lt;/a&gt;&lt;/div&gt;
        &lt;div class=&quot;item&quot;&gt;&lt;a href=&quot;#&quot;&gt;option four&lt;/a&gt;&lt;/div&gt;
        &lt;div class=&quot;item&quot;&gt;&lt;a href=&quot;#&quot;&gt;option five&lt;/a&gt;&lt;/div&gt;
        &lt;div class=&quot;item&quot;&gt;&lt;a href=&quot;#&quot;&gt;option six&lt;/a&gt;&lt;/div&gt;
        &lt;div class=&quot;item&quot;&gt;&lt;a href=&quot;#&quot;&gt;option seven&lt;/a&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;f2 overflowMenuWrapper&quot;&gt;
        &lt;div class=&quot;handel&quot;&gt;more&lt;/div&gt;
        &lt;div class=&quot;menu&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</pre>
<p>It doesn't much css to get us up and running. I'm using absolute positioning for the base elements and floats the menu options</p>
<pre class="brush: css">
    .f2{
        bottom:0;
        left:0px;
        overflow:visible;
        position:absolute;
        right:0px;
        top:0;
    }
    #wrapper{
        top: 30px;
        left: 20px;
        right: 20px;
        min-width: 100px;
        /*width: 300px;*/
    }
    #menuWrapper{
        height: 25px;
    }
    .full{
        overflow: hidden;
        right: 30px;
    }
    .overflowMenuWrapper{
        width: 30px;
        left: auto;
    }
    .full div.item{
        float: left;
        padding: 4px 8px;
    }
    .overflowMenuWrapper .menu{
        background:none repeat scroll 0 0 #FFFFFF;
        border:1px solid black;
        display:none;
        padding:5px;
        position:relative;
        right:125px;
        width:150px;
        z-index:100000;
    }
    .overflowMenuWrapper .handel{
        cursor: pointer;
    }
    .overflowMenuWrapper .disabled{
        color: gray;
    }
</pre>
<p>Next is the script. Line #28 we check all of the options in the full size menu, the hidden  options are cloned and prepended to the overflow menu. If you're looking to attach resizing elements other than window, take a  look at<a href="http://benalman.com/projects/jquery-resize-plugin/"> Ben  Alman's event resize</a> plugin.</p>
<pre class="brush: js">
$().ready(function(){
    //bind the overflow menu handel
   	$('#menuWrapper').find('.handel').click(function(){
   	    var $this=$(this);
        //dont show the drop down if its disabled
        if($this.hasClass('disabled')===true){
            return false;
        }
        var __temp=$this.next('.menu');
        __temp.fadeIn(500);
        //if the menu is showing and the user clicks anywhere hide the overflow menu dropdown
        $(document).one('click',function(){
               __temp.fadeOut(500); 
            });
          return false;  
          });
          
              $(window).resize(function() {

               var $menuWrapper=$('#menuWrapper'),
               $fullMenu=$menuWrapper.children('.full'),
               $overFlowMenu=$menuWrapper.find('.menu'),
               fullHeight=$fullMenu.innerHeight()
               $handle = $menuWrapper.find('.handel').addClass('disabled');
                //remove all of the actions out of the overflow menu
                $overFlowMenu.children('div').remove();
                //find all of the .items that arent visiable and add/clone them to the overflow menu 
                $fullMenu.children('div.item').filter(function(){
                    return this.offsetTop+$(this).height()&gt;fullHeight;
                }).clone(true).prependTo($overFlowMenu[0]);
                
                
                if($overFlowMenu.children('.item').length!==0){
                   $handle.removeClass('disabled');
                }else{
                    //no options fade out the drop down menu, 
                    $overFlowMenu.fadeOut(500);
                }

            }).trigger('resize');
     
});
</pre>
<p>Thats it! To see a working demo check out the attachements below.</p>
