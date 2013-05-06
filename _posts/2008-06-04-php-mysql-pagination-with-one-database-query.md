--- 
created: 1212642000
title: Php MySQL pagination with one database query
layout: post
---
<p>Pagination is one of the simple features of a site if used right can be a great feature.&nbsp; For something very simple it seems to be a resource hog.&nbsp; For a while I have been looking for a way to paganate with out issuing two database queries.&nbsp; After some quick searching I could not find what I was looking for, so I came up a method that uses a one query + a sub-query.</p>
<h4>Quick Review</h4>
<p>The method that I have seen the most, looks like some like this.</p>
<pre class="brush: php">
//check do we have a starting page?
if (isset($_GET['page'])) {
    $page = $_GET['page'];
} else {
    $page = 1;
} // end of if
//connect to the database
$link = mysql_connect('example.com:3307', 'username', 'password');
mysql_select_db('db_name',$link);
$query = &quot;SELECT count(*) FROM table WHERE ...&quot;;
$result = mysql_query($query, $link);
$res = mysql_fetch_row($result);
$numRows = $res[0];

$maxItemsOnPage = 15;
$numberOfPages = ceil($numRows / $maxItemsOnPage);

//lets get the data for this page
$query = &quot;SELECT * FROM table WHERE ....... LIMIT &quot; . (($page - 1) * $maxItemsOnPage) 
.&quot;,&quot; . $maxItemsOnpage;
$result = mysql_query($query, $link);
//do something with the results


//show the links
if ($page &lt; $numberOfpages) {
    echo '&lt;a href=&quot;' . $_SERVER[&quot;PHP_SELF&quot;] . '?page=' . ($page + 1) .
        '&quot;&gt;Next page &amp;gt;&amp;gt;&lt;/a&gt;';
}

if ($page &gt; 1) {
    echo '&lt;a href=&quot;' . $_SERVER[&quot;PHP_SELF&quot;] . '?page=' . ($page - 1) .
        '&quot;&gt;&amp;lt;&amp;lt; Prev page&lt;/a&gt;';
}
</pre>
<h4>One Query Method</h4>
<p>The thing that I don't like about the method above is you have to use two queries.&nbsp; Lets say it takes .23563 seconds for each query.&nbsp; That's not a lot of time but over a period of time it adds up. So you use two queries every time the page is loaded. So .23563 * 2 = .47126 seconds right? Lets say your page gets viewed 25 times a day.&nbsp; Take 25 * .47126 = 11.7815 seconds.&nbsp; I would consider that a large amount of time for some thing very simple.&nbsp; Here is my method.</p>
<pre class="brush: php">
//check do we have a starting page?
if (isset($_GET['page'])) {
    $page = $_GET['page'];
} else {
    $page = 1;
} // end of if

$maxItemsOnPage = 15;

//connect to the database
$link = mysql_connect('example.com:3307', 'username', 'password');
mysql_select_db('db_name',$link);
$query =&quot;SELECT *,(SELECT COUNT(*) FROM blog_category as bc,blog as b
WHERE b.blog_blog_category_id=bc.blog_category_id AND
b.blog_status='published' ) as num_of_rows FROM blog_category as
bc,blog as b WHERE b.blog_blog_category_id=bc.blog_category_id AND
b.blog_status='published' ORDER BY b.blog_created DESC LIMIT&quot; . (($page - 1) * $maxItemsOnPage) 
.&quot;,&quot; . $maxItemsOnpage;

$result = mysql_query($query, $link);

//we got the results now lets peek and see how many rows there are
$temp= mysql_fetch_row($res);

//assign the row count
$numberOfRows=$temp['num_of_rows'];

//reset the result set
mysql_data_seek($result,0);
//get the number of pages and be on our marry way!     
$numpages = ceil($numberOfRows / $maxItemsOnPage);

//do something with the results


//show the links
if ($page &lt; $numberOfpages) {
    echo '&lt;a href=&quot;' . $_SERVER[&quot;PHP_SELF&quot;] . '?page=' . ($page + 1) .
        '&quot;&gt;Next page &amp;gt;&amp;gt;&lt;/a&gt;';
}

if ($page &gt; 1) {
    echo '&lt;a href=&quot;' . $_SERVER[&quot;PHP_SELF&quot;] . '?page=' . ($page - 1) .
        '&quot;&gt;&amp;lt;&amp;lt; Prev page&lt;/a&gt;';
}
</pre>
<h4>How it works</h4>
<p>In this query we count the number of rows that fit our where clause using a sub query along with the limited results that we are only going to show on this page. I.E.:</p>
<pre class="brush: php">
(SELECT COUNT(*) FROM blog_category as bc,blog as b
WHERE b.blog_blog_category_id=bc.blog_category_id AND
b.blog_status='published' ) as num_of_rows
</pre>
<p>Then we peek ahead and get the first row and get the column named &quot;num_of_rows&quot;.&nbsp; Then we reset the query result with &quot;mysql_data_seek($result,0)&quot;.&nbsp; Poof that's it.&nbsp;</p>
<p>There could be 2 downsides to this method.&nbsp; One in every row in the result you have dupulacte data. And Two, Using &quot;SELECT COUNT(*)&quot; every time on tables that have lots of records could bog your server down.&nbsp;</p>
