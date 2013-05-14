--- 
created: 1293666725
title: Dragtable - A jQuery UI Widget to re-arrange Table Columns via Drag & Drop
layout: post
tags: [jQuery UI, projects]
---
<p>Being able to re-order table columns has been something that I have always wanted to do. Because of a tables' markup you can't just use the jQuery UI sortables widget. After seeing<a href="http://akottr.de/dragtable" target="_blank"> akottr's dragtable</a> plugin I was inspired to create a&nbsp; jQuery UI widget similar to his plugin.&nbsp; I set out with a few design goals; Flexible API, very responsive column drag(works with well with tables that have +1000 cells) and a easy to customize css framework.</p>
<!--break-->
<ul>
    <li><a href="/demos/dragtable/">View the demo</a></li>
    <li><a target="_blank" href="https://github.com/jebaird/dragtable">GitHub Repo</a></li>
    <li><a href="https://github.com/jebaird/dragtable/issues?direction=desc&amp;sort=created&amp;state=open">Submit / View issues</a></li>
</ul>
<h3>How It Works</h3>
<p>When a column handle is clicked it gets the index of the column. Then it goes through all of the &lt;tr&gt; and gets the &lt;td&gt; with that index and adds the class dragtable-col-placeholder. Once that is done I creates a copy of the table and appends the column collection to it.&nbsp; The copy of the table is used for the drag display. Once the User drops the drag display, the drag display is removed and .dragtable-col-placeholder class is removed from all of the cells in the selected column in the target table.</p>
<h3>Getting Started</h3>
<h4>Step 1</h4>
<ul>
    <li>Include the following files on your page</li>
    <li>jQuery 1.4.4</li>
    <li>jQuery UI 1.8.6</li>
    <li>jQuery UI theme of your choice</li>
    <li>jquery-dragtable.js</li>
    <li>dragtable-default.css</li>
</ul>
<h4>Step 2</h4>
<p>Set up your data table</p>
<pre class="brush: html">
&lt;table id=&quot;one&quot;&gt;
	&lt;thead class=&quot;test&quot;&gt;
		&lt;tr&gt;
			&lt;th data-header=&quot;id&quot;&gt;&lt;div class=&quot;dragtable-drag-handle&quot;&gt;&lt;/div&gt; ID&lt;/th&gt;
			&lt;th data-header=&quot;first_name&quot;&gt;first name&lt;/th&gt;
			&lt;th data-header=&quot;last_name&quot;&gt;last name&lt;/th&gt;
			&lt;th data-header=&quot;phone_number&quot;&gt;phone number&lt;/th&gt;
			&lt;th data-header=&quot;color&quot;&gt;team color&lt;/th&gt;
			&lt;th data-header=&quot;salary&quot;&gt;salary made&lt;/th&gt;
		&lt;/tr&gt;
	&lt;/thead&gt;
	&lt;tbody&gt;
		&lt;tr&gt;
			&lt;td&gt;10234&lt;/td&gt;
			&lt;td&gt;John&lt;/td&gt;
			&lt;td&gt;Smith&lt;/td&gt;
			&lt;td&gt;555-555-5555&lt;/td&gt;
			&lt;td&gt;orange&lt;/td&gt;
			&lt;td&gt;$2.00&lt;/td&gt;
		&lt;/tr&gt;
		&lt;tr&gt;
			&lt;td&gt;102288&lt;/td&gt;
			&lt;td&gt;Jane&lt;/td&gt;
			&lt;td&gt;Smith&lt;/td&gt;
			&lt;td&gt;555-445-5555&lt;/td&gt;
			&lt;td&gt;purplue&lt;/td&gt;
			&lt;td&gt;$1000.00&lt;/td&gt;
		&lt;/tr&gt;

        &lt;/tbody&gt;
&lt;/table&gt;


</pre>
<p>Take a look at the  in the . You'll notice that they have an attribute named data-header. That attribute is used by the widgets method to set / get the column order.&nbsp; Also the first th contains a div with the class of dragtable-drag-handle.&nbsp; If an element is found inside the th with that class that will be used as the drag handle otherwise it will be the whole th.</p>
<p>Next Just Initiate the widget</p>
<pre class="brush: js">
$('table').dragtable();
</pre>
<h3>Options</h3>
<table width="700" height="137" cellspacing="0" cellpadding="0" border="0" style="">
    <thead>
        <tr>
            <th scope="col">parameter</th>
            <th scope="col">description</th>
            <th scope="col">default</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>dataHeader</td>
            <td>hange this if you would like to use a different th attubute(data-column-label) for the column headers</td>
            <td>data-header</td>
        </tr>
        <tr>
            <td>handle</td>
            <td>The drag handle class</td>
            <td>.dragtable-drag-handle</td>
        </tr>
        <tr>
            <td>change</td>
            <td>optional callback function that is called when the column order changes</td>
            <td>$.noop</td>
        </tr>
        <tr>
            <td>displayHelper</td>
            <td>optional callback function that can be used to tweak the look of the column in that is currently getting dragged</td>
            <td>$.noop</td>
        </tr>
    </tbody>
</table>
<h3>Methods</h3>
<table width="700" cellspacing="0" cellpadding="0" border="0">
    <thead>
        <tr>
            <th scope="col">name</th>
            <th scope="col">description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td valign="top">order</td>
            <td>
            <p>Set or get the colum order</p>
            <div><strong>Get Order</strong></div>
            <pre class="brush: js">
var order = $('table').dragtable('order');
//order is now [ 'firstname' , 'id' ,'lastname'' , etc......]
</pre>
            <p><strong>Set Order</strong></p>
            <pre class="brush: js">
$('table').dragtable('order', [ 'firstname' , 'id' ,'lastname'' , etc......]);
//Gotcha right now the array that you provide length must match the current length of the table columns
</pre>
            </td>
        </tr>
    </tbody>
</table>
<h3>Events</h3>
<table width="700" height="137" cellspacing="0" cellpadding="0" border="0" style="">
    <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>start</td>
            <td>when the user mouses down on handle or th, use in favor of display helper</td>
        </tr>
        <tr>
            <td>beforechagne</td>
            <td>called when a column will be moved, the user is still dragging</td>
        </tr>
        <tr>
            <td>change</td>
            <td>called after the column has been moved, the user is still dragging</td>
        </tr>
        <tr>
            <td>stop</td>
            <td>after the user drops the column and stops dragging</td>
        </tr>
    </tbody>
</table>
<p>&nbsp;</p>
