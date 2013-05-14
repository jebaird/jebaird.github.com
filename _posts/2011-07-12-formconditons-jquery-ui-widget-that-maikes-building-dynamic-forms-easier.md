--- 
created: 1310516308
title: formConditons - jQuery UI widget that maikes building dynamic forms easier
layout: post,
tags: [jQuery UI, projects, forms]
---
<p>Creating  dynamic forms can be time consuming. Hiding one field based on another  field value is pretty easy. But when you have to set up a form with many  inputs showing and hiding based on may different input values your code  can get ugly really fast. formCondtions plugin attempts to make your  life easier by providing a standard api to get your form code under  control.</p>
<!--break-->
<ul>
    <li><a href="/dev/project/formconditions/index.htm">View the demo</a></li>
    <li><a target="_blank" href="https://github.com/jebaird/formConditons">github repo</a></li>
</ul>
<h3>The markup</h3>
<p>The plugin assumes that your form markup is very simular to this</p>
<pre class="brush: html">
&lt;form&gt;
	&lt;fieldset&gt;
            &lt;legend&gt;Contact Info&lt;/legend&gt;
            &lt;div&gt;
                &lt;label&gt;first name&lt;/label&gt;&lt;input type=&quot;text&quot; name=&quot;firstname&quot;&gt;
            &lt;/div&gt;
            &lt;div&gt;
                &lt;label&gt;last name&lt;/label&gt;&lt;input type=&quot;text&quot; name=&quot;lastname&quot;&gt;
            &lt;/div&gt;
            &lt;div&gt;
                &lt;label&gt;email&lt;/label&gt;&lt;input type=&quot;text&quot; name=&quot;email&quot;&gt;
            &lt;/div&gt;
        &lt;/fieldset&gt;
&lt;/form&gt;
</pre>
<p>Each input and label must be wrapped in another element such as a &lt;div&gt; &lt;span&gt; &lt;li&gt; , etc. This lets the pugin easly show / hide that element. Note: you don't have to have a fieldset.</p>
<h3>Set up your conditions</h3>
<pre class="brush: js">
$('form').formConditons({
    conditions: [
        {
            name: 'lastname',
            rules: [
                {
                    selector: 'input[name=email]',
                    operator: 'contains',
                    value: '@'
                }
            ],
            tru: [
                {
                    selector: 'input[name=lastname]',
                    action: 'show'
                }
            ],
            fal: [
                {
                    selector: 'input[name=lastname]',
                    action: 'hide'
                }
            ]
        }
       
})
</pre>
<p>On this form I'm saying if the email contains @ show the lastname field else hide it.</p>
<p><strong>Options</strong></p>
<p>Currently there is only one option for this plugin, conditions, It's a array. Here is the break down of a condtion</p>
<table width="600" cellspacing="0" cellpadding="0" border="0">
    <thead>
        <tr>
            <th scope="col">parameter</th>
            <th scope="col">description</th>
            <th scope="col">default</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>name</td>
            <td>The name of the condition. This isn't required but if you want to remove the condition from the form you will need to supply one</td>
            <td>&nbsp;</td>
        </tr>
        <tr>
            <td>rules</td>
            <td>
            <p>array comprised of objects with the following properties</p>
            <ul>
                <li>selector - this is a jquery selector of the input you are targeting</li>
                <li>operator - string, possible values are, equal, not-equal, checked, contains, doesn't-contain</li>
                <li>value - like # used in conjunction with operator</li>
            </ul>
            </td>
            <td>[]</td>
        </tr>
        <tr>
            <td>tru</td>
            <td>
            <p>array, these outcomes are run if all of the rules are true. an outcome is an object with the following properties</p>
            <ul>
                <li>action - show, hide or function</li>
                <li>selector: jquery selector only used for outcomeActions</li>
            </ul>
            </td>
            <td>[]</td>
        </tr>
        <tr>
            <td>fal</td>
            <td>see tru, the only difference is that these outcomes are run if the rules are false, Say you have 3 rules on defined and only 2 of them are true then this set of outcomes would run</td>
            <td>[]</td>
        </tr>
    </tbody>
</table>
<h3>&nbsp;Methods</h3>
<table width="600" cellspacing="0" cellpadding="0" border="0">
    <thead>
        <tr>
            <th scope="col">name</th>
            <th scope="col">description</th>
            <th scope="col">Arguments</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>addCondition</td>
            <td>Add a condtion to the stack</td>
            <td>conditon object</td>
        </tr>
        <tr>
            <td>removeCondition</td>
            <td>remove a condtion</td>
            <td>name of the condtion</td>
        </tr>
    </tbody>
</table>
<p>&nbsp;As a side note you can add your outcome actions by extending the widget protoype like this</p>
<pre class="brush: js">
$.extend($.jb.formConditons.prototype.outcomeActions,{
      'youractionname': function(){}
})
</pre>
<p>Please feel free to leave your ideas and or comments below.</p>
