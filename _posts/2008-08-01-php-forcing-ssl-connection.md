--- 
created: 1217653200
title: php forcing SSL Connection
layout: post
tags : [php, SSL]
---
<p>I was updating some code on dirtondirt.com.&nbsp; We had changed the way sessions/logins where used on the site. Everything worked great in Firefox.&nbsp; But we were getting complaints that it was randomly dropping logged in users using IE .&nbsp; I was was not able to recreate the issue so it was very hard to troubleshoot.  I believe that this method hacks around IE 4k size on disk issue (if the cookie is larger than 4k then IE has a tendency to drop it).After a couple hours of research I found these solutions.</p>
<pre class="brush: php">
//get the right domain name cause if not ie(s) will drop the dam cookies, also check if we are on localhost, credit php.net user comments
$domain = ($_SERVER['HTTP_HOST'] != 'localhost') ? $_SERVER['HTTP_HOST'] : false;
ini_set('session.cookie_domain',$domain);
//start the session so we have an session id to assign to the cookie
session_start();
//set the cookie by sending it in a header.  
set_cookie_fix_domain('PHPSESSID',session_id(),time() + 3600,'/',$domain);
</pre>
<p>&nbsp;</p>
<pre class="brush: php">
//from php.net user comments  
function set_cookie_fix_domain($Name, $Value = '', $Expires = 0, $Path = '', $Domain = '', $Secure = false, $HTTPOnly = false)
  {
    if (!empty($Domain))
    {
      // Fix the domain to accept domains with and without 'www.'.
      if (strtolower(substr($Domain, 0, 4)) == 'www.')  $Domain = substr($Domain, 4);
      $Domain = '.' . $Domain;

      // Remove port information.
      $Port = strpos($Domain, ':');
      if ($Port !== false)  $Domain = substr($Domain, 0, $Port);
    }

    header('Set-Cookie: ' . rawurlencode($Name) . '=' . rawurlencode($Value)
                          . (empty($Expires) ? '' : '; expires=' . gmdate('D, d-M-Y H:i:s', $Expires) . ' GMT')
                          . (empty($Path) ? '' : '; path=' . $Path)
                          . (empty($Domain) ? '' : '; domain=' . $Domain)
                          . (!$Secure ? '' : '; secure')
                          . (!$HTTPOnly ? '' : '; HttpOnly'), false);
  }
</pre>
