--- 
created: 1224050400
title: PHP MySQL Row Lock function
layout: post
tags : [php, mysql]
---
<p>I just started on a project that I knew was going to need some sort of data lock that would prevent 2 users from editing the same data at the same time.&nbsp; At first I thought that i would have to write a function that behaved like the C function flock().&nbsp; I ran across this forum post <a href="http://www.dmcinsights.com/phorum/read.php?13,30233,30260" target="_blank">http://www.dmcinsights.com/phorum/read.php?13,30233,30260</a> which I have to give credit to is the inspiration for the code below.</p>
<p>In my setup I have a master include file that is included every time the script runs.&nbsp; It checks the session to see if a lock code has been assigned to the use.&nbsp; If so then it declares DB_LOCK_KEY as a constant</p>
<pre class="brush: php">
//### setup the lock key for locking db rows ####
if(empty($_SESSION['lock_key'])){
	$lock_key=mkUniqueCode();//see below for function declaration
	$_SESSION['lock_key']=$lock_key;
	define('DB_LOCK_KEY',$lock_key);
}else{
	define('DB_LOCK_KEY',$_SESSION['lock_key']);
}

</pre>
<p>There are a couple of functions used in dbLockRow() that aren't standard php functions.&nbsp; Here is the run down of what they do</p>
<ul>
    <li>dbQuery() - queries the database | just swap it out with your own function</li>
    <li>addMessage() - is&nbsp; a function that add a string to a session variable</li>
    <li>location() -&nbsp; same as:session_write_close(); header('location: '.$location);</li>
</ul>
<p>Here is a sample a table that this function could be used</p>
<pre class="brush: sql">
CREATE TABLE `content_location` (
  `content_location_id` int(11) NOT NULL auto_increment,
  `content_location_title` varchar(255) NOT NULL default '',
  `content_location_desc` text NOT NULL,
  `content_location_lock_key` varchar(255) NOT NULL default '',
  `content_location_lock_expiry_time` timestamp NOT NULL default '0000-00-00 00:00:00',
  PRIMARY KEY  (`content_location_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;
</pre>
<p>I have modified the query a little bit from the forum post.  I added this: OR {$table}_lock_key='&quot; .         DB_LOCK_KEY . &quot;' AND {$table}_id=&quot; . $id   This allows the same user to access the row before the lock_expiry_time runs out. I added it because if the user chose to edit a row and accidentally hit the back button they would be locked out of the row.</p>
<pre class="brush: php">
/**
 * dbLockRow()
 *  
 * @author Jesse Baird &lt;jebaird@gmail.com&gt; 
 * @version .01
 * @since 1.3  
 * 
 * @param string $table | name of the target table
 * @param integer $id 
 * @param string $dataTypeDesc | user, setting, claim etc 
 * @param bool $sendHeaders | true add message and send the user to $location 
 * @param string $message | $dataTypeDesc and $duration are tacked on the begianing and end of this string
 * @param string $location | name of the php file that you would like the user to be directed to if locking fails
 * @param string $duration | mysql timestamp for how long you would like the row to be locked
 * @return
 */
function dbLockRow($table = '', $id = 0, $dataTypeDesc = '', $sendHeaders = true, $location = this_php, $duration =
    '00:05:00', $message = 'is currently being edited by another user.  Please check try again in') {
    $res = dbQuery(&quot;UPDATE $table SET {$table}_lock_expiry_time = ADDTIME(NOW(),'&quot; . $duration . &quot;'),{$table}_lock_key='&quot; .
        DB_LOCK_KEY . &quot;' WHERE NOW() &gt; {$table}_lock_expiry_time AND {$table}_id=&quot; . $id .&quot; OR {$table}_lock_key='&quot; .
        DB_LOCK_KEY . &quot;' AND {$table}_id=&quot; . $id);

    if(mysql_affected_rows() == 0) {
        //lock failed - let the user know that they can't get access to the record right now
        if($sendHeaders) {
            addMessage('This '.$dataTypeDesc . ' ' . $message . ' ' . $duration); //let the user know that the row is locked
            location($location); // send the user to a different url
        } else
            return false;

    } else {
        //echo 'row locked';
        return true;

    }
}
/**
 * mkUniqueCode()
 * @uses creates a random sting of chars and nums based on the md5 hash of unipid(rand())
 * @author unknown
 * @param integer $length
 * @return mixed
 */
function mkUniqueCode($length = 10)
{
    $code = md5(uniqid(rand(), true));
    if($length != &quot;&quot;)
        return substr($code, 0, $length);
    else
        return $code;
}</pre>
