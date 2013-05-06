--- 
created: 1216098000
title: Calculating Distance in Miles from Latitude and Longitude
layout: post
---
<p>Finding good examples for Calculating Distance in Miles from Latitude and Longitude Using Mysql and PHP wasn&rsquo;t as easy as I thought it would be.  I thought I would compile the working quires and the functions that I wrote/found.</p>
<p>I found a very good paper on the topic at Scribd.  I used one the the examples from this paper.</p>
<p><object width="600" height="500" align="middle" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" name="doc_111644578161931" id="doc_111644578161931" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0">
<param value="http://documents.scribd.com/ScribdViewer.swf?document_id=2569355&amp;access_key=key-1zbz63e0ay2wevycnj3l&amp;page=1&amp;version=1" name="movie" />
<param value="high" name="quality" />
<param value="true" name="play" />
<param value="true" name="loop" />
<param value="showall" name="scale" />
<param value="opaque" name="wmode" />
<param value="false" name="devicefont" />
<param value="#ffffff" name="bgcolor" />
<param value="true" name="menu" />
<param value="true" name="allowFullScreen" />
<param value="always" name="allowScriptAccess" />
<param value="" name="salign" /> <embed width="600" height="500" align="middle" type="application/x-shockwave-flash" salign="" allowscriptaccess="always" allowfullscreen="true" menu="true" name="doc_111644578161931_object" bgcolor="#ffffff" devicefont="false" wmode="opaque" scale="showall" loop="true" play="true" pluginspage="http://www.macromedia.com/go/getflashplayer" quality="high" src="http://documents.scribd.com/ScribdViewer.swf?document_id=2569355&amp;access_key=key-1zbz63e0ay2wevycnj3l&amp;page=1&amp;version=1"></embed> </object></p>
<div style="font-size: 10px; text-align: center; width: 600px;"><a href="http://www.scribd.com/doc/2569355/Geo-Distance-Search-with-MySQL">Geo Distance Search with MySQL</a> - <a href="http://www.scribd.com/upload">Upload a Document to Scribd</a></div>
<div style="font-size: 10px; text-align: center; width: 600px;">&nbsp;</div>
<div style="display: none;">Read this document on Scribd: <a href="http://www.scribd.com/doc/2569355/Geo-Distance-Search-with-MySQL">Geo Distance Search with MySQL</a></div>
<p>&nbsp;Here are a couple of PHP functions that I thought would be helpful.&nbsp; Just a heads up, you will need and XML parser for the first function listed here(I have posted&nbsp; the one I used for this function below).</p>
<h4>getGeoCords</h4>
<pre class="brush: php">
/**
 * getGeoCords()
 * uses geonames.org to get lat and long of postal codes
 * @param string $zip
 * @param string $country | use 2 letter , US
 * @author Jesse Baird &lt;jebaird@gmail.com&gt; 
 * @return array('lat','long')
 */
function getGeoCords($zip='',$country=''){
	
	if($zip!=''&amp;&amp;$country!=''){
		$url = 'http://ws.geonames.org/findNearbyPostalCodes?postalcode='.$zip.'&amp;country='.$country.'&amp;maxRows=1&amp;style=short';
	$myFile = new XMLParser($url);
	//print_r($myFile);
	$xmlRoot = $myFile-&gt;data[0];    // GEO Element
	
	if (sizeof($xmlRoot) &gt; 0 ) {
			$geoLocation = $xmlRoot['child'];
			if (sizeof($geoLocation) &gt; 0) {
				$geoLocationProperties = $geoLocation[0]['child'];
			$long = $geoLocationProperties[4]['content'];
				$lat = $geoLocationProperties[3]['content'];
			return array('lat'=&gt;$lat,'long'=&gt;$long);
			}
			
	}else
		return false;
	}else
	return false;
	
}
</pre>
<h5>useage</h5>
<pre>
$cords=getGeoCords($zip,'US');
</pre>
<h4>XMLParser Class</h4>
<pre class="brush: php">
xml_url = $xml_url;
      // print($xml_url.&quot;
&quot;);
       $this-&gt;xml = xml_parser_create();
       xml_set_object($this-&gt;xml, $this);
       xml_set_element_handler($this-&gt;xml, 'startHandler', 'endHandler');
       xml_set_character_data_handler($this-&gt;xml, 'dataHandler');
       $this-&gt;parse($xml_url);
   }

   function parse($xml_url) {
   	//$bad_chr = array(&quot;x00&quot; =&gt; &quot;chr(0)&quot;, &quot;x01&quot; =&gt; &quot;chr(1)&quot;, &quot;x02&quot; =&gt; &quot;chr(2)&quot;, &quot;x03&quot; =&gt; &quot;chr(3)&quot;, &quot;x04&quot; =&gt; &quot;chr(4)&quot;, &quot;x05&quot; =&gt; &quot;chr(5)&quot;, &quot;x06&quot; =&gt; &quot;chr(6)&quot;, &quot;x07&quot; =&gt; &quot;chr(7)&quot;, &quot;x08&quot; =&gt; &quot;chr(8)&quot;, &quot;x09&quot; =&gt; &quot;chr(9)&quot;, &quot;x0a&quot; =&gt; &quot;chr(10)&quot;, &quot;x0b&quot; =&gt; &quot;chr(11)&quot;, &quot;x0c&quot; =&gt; &quot;chr(12)&quot;, &quot;x0d&quot; =&gt; &quot;chr(13)&quot;, &quot;x0e&quot; =&gt; &quot;chr(14)&quot;, &quot;x0f&quot; =&gt; &quot;chr(15)&quot;, &quot;x10&quot; =&gt; &quot;chr(16)&quot;, &quot;x11&quot; =&gt; &quot;chr(17)&quot;, &quot;x12&quot; =&gt; &quot;chr(18)&quot;, &quot;x13&quot; =&gt; &quot;chr(19)&quot;, &quot;x14&quot; =&gt; &quot;chr(20)&quot;, &quot;x15&quot; =&gt; &quot;chr(21)&quot;, &quot;x16&quot; =&gt; &quot;chr(22)&quot;, &quot;x17&quot; =&gt; &quot;chr(23)&quot;, &quot;x18&quot; =&gt; &quot;chr(24)&quot;, &quot;x19&quot; =&gt; &quot;chr(25)&quot;, &quot;x1a&quot; =&gt; &quot;chr(26)&quot;, &quot;x1b&quot; =&gt; &quot;chr(27)&quot;, &quot;x1c&quot; =&gt; &quot;chr(28)&quot;, &quot;x1d&quot; =&gt; &quot;chr(29)&quot;, &quot;x1e&quot; =&gt; &quot;chr(30)&quot;, &quot;x1f&quot; =&gt; &quot;chr(31)&quot;);
   	
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $xml_url);
        curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
        //$store = curl_exec ($ch);
        $data = curl_exec ($ch);
      // print_r(sizeof($data).&quot;
&quot;);
        curl_close ($ch);

      $parse = xml_parse($this-&gt;xml, $data, sizeof($data));
//$parse = xml_parse($xml_parser, strtr($data, $bad_chr),sizeof($data));
       if (!$parse) {
     	 
           die(sprintf(&quot;XML error: %s at line %d&quot;,
               xml_error_string(xml_get_error_code($this-&gt;xml)),
                   xml_get_current_line_number($this-&gt;xml)));
                   xml_parser_free($this-&gt;xml
                 );
       }
       return true;
   }

   function startHandler($parser, $name, $attributes) {
       $data['name'] = $name;
       if ($attributes) { $data['attributes'] = $attributes; }
       $this-&gt;data[] = $data;
   }

   function dataHandler($parser, $data) {
       if ($data = trim($data)) {
           $index = count($this-&gt;data) - 1;
           // begin multi-line bug fix (use the .= operator)
           $this-&gt;data[$index]['content'] .= $data;
           // end multi-line bug fix
       }
   }

   function endHandler($parser, $name) {
       if (count($this-&gt;data) &gt; 1) {
           $data = array_pop($this-&gt;data);
           $index = count($this-&gt;data) - 1;
           $this-&gt;data[$index]['child'][] = $data;
       }
   }
}
?&gt;
</pre>
<h4>getDistanceSQL</h4>
<p>I wrote the php for this function to make life easy on me.&nbsp; It is very flexible and allows you to use it on any table.</p>
<pre class="brush: php">
/**
 * getDistanceSQL()
 *
 * @param mixed $lat
 * @param mixed $long
 * @param string $sql_lat_col | place_lat -- alows you to use it on any table
 * @param string $sql_long_col place_long
 * @return
 */
function getDistanceSQL($lat,$long,$sql_lat_col=&quot;&quot;,$sql_long_col=&quot;&quot;){
	/*
	SELECT *, 3956 * 2 * ASIN(SQRT(
POWER(SIN((41.648207 - abs(tournament_lat)) * pi()/180 / 2), 2) + COS(41.648207 * pi()/180 ) * COS(abs(tournament_lat) * pi()/180) * POWER(SIN((-91.541579-tournament_long) * pi()/180 / 2), 2) )) as distance From tournament
	*/
	return ', 3956 * 2 * ASIN(SQRT(
POWER(SIN(('.$lat.' - abs('.$sql_lat_col.')) * pi()/180 / 2), 2) + COS('.$lat.' * pi()/180 ) * COS(abs('.$sql_lat_col.') * pi()/180) * POWER(SIN(('.$long.'-'.$sql_long_col.') * pi()/180 / 2), 2) )) as distance';
	
}
</pre>
<h5>useage</h5>
<pre class="brush: php">
$sql=&quot;SELECT *&quot;;
//check to see if user is using this option
if($cords['lat']!='')
$sql.=getDistanceSQL($cords['lat'],$cords['long'],'tournament_lat','tournament_long');
$sql.=&quot; FROM tournament &quot;.$whereClause;
//having clause
if(is_numeric($r['miles'])){
	if($r['miles']&gt;199)

//using the HAVING because WHERE you will end up with an error
$sql.='HAVING distance &lt; '.$r['miles'];
else
$sql.='HAVING distance &gt; '.$r['miles'];

}
$sql.= &quot; ORDER BY tournament_date ASC&quot;;
//you end up with something like this
SELECT *, 3956 * 2 * ASIN(SQRT(
POWER(SIN((42.524071 - abs(tournament_lat)) * pi()/180 / 2), 2) +
COS(42.524071 * pi()/180 ) * COS(abs(tournament_lat) * pi()/180) *
POWER(SIN((-92.449725-tournament_long) * pi()/180 / 2), 2) )) as
distance FROM tournament WHERE tournament_date between '1199167200' AND
'1228024800' AND 1 HAVING distance &gt; 25 ORDER BY tournament_date ASC</pre>
