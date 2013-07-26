---
title: Creating Themes for Ontraport/OfficeAutoPilot Forms
layout: post
tags: [ontraport]
---

Ontraport / OfficeAutoPilot's formeditor is pretty powerful, it's great for creating one off designs. 
But did you know that you can use it to create themes that you can apply to other formeditor created forms? This setup will work on Wordpress, Landing Pages and plain old html pages.

### Quick Demo

<video controls="controls"><source src="/media/2013-07-25-creating-form-themes-with-ontraport-formeditor/setting-up-form-theme-with-ontraport.mp4" type="video/mp4" /><source src="/media/2013-07-25-creating-form-themes-with-ontraport-formeditor/setting-up-form-theme-with-ontraport.webm" type="video/webm" />Your browser does not support the <code>video</code> element.</video>

[view the code in action](/demos/2013-07-25-creating-form-themes-with-ontraport-formeditor)

### Create a "template form"

In your account, goto(in OAP) admin->Manage SmartForms->and create a form, style it to your hearts content. Name it something like `xyz.com - form template` that way you will remember that you're just using this form for its styles. Click on the publish button, and grab the html version.  It should look like like this.

	<link rel="stylesheet" href="//www1.moon-ray.com/formeditor/formeditor/css/form.default.css" type="text/css" />
	<link rel="stylesheet" href="//www1.moon-ray.com/formeditor/formeditor/css/form.publish.css" type="text/css" />
	<link rel="stylesheet" href="//forms.moon-ray.com/v2.4/include/minify/?g=moonrayCSS" type="text/css" />
	<link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.8.10/themes/smoothness/jquery-ui.css" type="text/css" />
	<link rel="stylesheet" href="//www1.moon-ray.com/v2.4/include/formEditor/gencss.php?uid=p0c0000f0" type="text/css" />
	<script type="text/javascript" src="//www1.moon-ray.com/v2.4/include/formEditor/genjs-v2.php?html=false&uid=p0c0000f0"></script>
	<div class="moonray-form-p0c0000f0">
	    <div class="moonray-form moonray-form-label-pos-left">
	        <form class="moonray-form-clearfix" action="https://forms.moon-ray.com/v2.4/form_processor.php?" method="post" accept-charset="UTF-8">
	            <div class="moonray-form-element-wrapper moonray-form-element-wrapper-alignment-left moonray-form-input-type-text">
	                <label for="mr-field-element-282832938944" class="moonray-form-label">First Name</label>
	                <input name="firstname" type="text" class="moonray-form-input" id="mr-field-element-282832938944" required value placeholder/>
	            </div>
	            <div class="moonray-form-element-wrapper moonray-form-element-wrapper-alignment-left moonray-form-input-type-email">
	                <label for="mr-field-element-43048954801" class="moonray-form-label">Email</label>
	                <input name="email" type="email" class="moonray-form-input" id="mr-field-element-43048954801" required value placeholder/>
	            </div>
	            <div class="moonray-form-element-wrapper moonray-form-element-wrapper-alignment-left moonray-form-input-type-submit">
	                <input type="submit" name="submit-button" value="Submit" class="moonray-form-input" id="mr-field-element-570806551026" src/>
	            </div>
	            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
	                <input name="afft_" type="hidden" value/>
	            </div>
	            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
	                <input name="aff_" type="hidden" value/>
	            </div>
	            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
	                <input name="sess_" type="hidden" value/>
	            </div>
	            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
	                <input name="ref_" type="hidden" value/>
	            </div>
	            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
	                <input name="own_" type="hidden" value/>
	            </div>
	            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
	                <input name="oprid" type="hidden" value/>
	            </div>
	            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
	                <input name="contact_id" type="hidden" value/>
	            </div>
	            <div class="moonray-form-element-wrapper moonray-form-input-type-hidden">
	                <input name="uid" type="hidden" value="p0c0000f0"/>
	            </div>
	
	        </form>
	    </div>
	</div>


### The Code
Look for following lines in the code. They are the ones you need to copy to your site's `<head></head>`

`<link rel="stylesheet" href="//www1.moon-ray.com/v2.4/include/formEditor/gencss.php?uid=p0c0000f0" type="text/css" />`

`<link rel="stylesheet" href="//www1.moon-ray.com/formeditor/formeditor/css/form.default.css" type="text/css" />`

`<link rel="stylesheet" href="//www1.moon-ray.com/formeditor/formeditor/css/form.publish.css" type="text/css" />`

### Applying Your New Theme
Create a new form and grab the html version of the code. Look for a line that looks like this: `<div class="moonray-form-p0c0000f1">`. And add ` moonray-form-p0c0000f0` to it. This is the class name identifier of your theme form. Now it should look something like this `<div class="moonray-form-p0c0000f1 moonray-form-p0c0000f0"></div>`
Now, when you view your form, it should have your theme styles. 

