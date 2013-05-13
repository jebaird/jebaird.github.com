--- 
created: 1228111200
title: which statement is faster, elseif() or switch() ?
layout: post
tags : [php, performance]
---
<p>A couple of days ago I was out on a run and I starting wondering which statement was faster, a elseif() or a switch().&nbsp; I am a big fan of switch statements.&nbsp; I like how clean they look and its really easy to add a new condition to them.&nbsp; I also assumed that they were much quicker than elseif statements.&nbsp; So I set up this test to try to prove to myself that I was right.</p>
<p>Here is the script that I used to test my theory. You can download this script and the script timer <a href="http://www.jebaird.com/upload/file/switch_elseif_benchmark.zip">here</a>.&nbsp; How it works its we have 3 loops. In the first loop we pick a value randomly out of our test data array.&nbsp; Then we loop through each statement type(switch and elseif) the value of timing_loops. While doing that we record the length of time it takes to compare the values.&nbsp; Then we record the tested values from our test data array and the method that was faster by how many microseconds.&nbsp; Its a pretty simple script, and my no means the best I have written.</p>
<p>&nbsp;</p>
<pre class="brush: php">
 * @author Jesse Baird &lt;jebaird@gmail.com&gt;
 * @since 12/1/2008
 */

require 'PHP_script_timer.php';

$test = array();

$test[0] = 'cat';
$test[1] = 'dog';
$test[2] = 'frog';
$test[3] = 'goat';
$test[4] = 'pig';
$test[5] = 'sometingreallylong';
$test[6] = time(); //this one will be used for an else/default

define('timing_loops',1000);
$times_to_run=30;
$valsTested=array();
$fhandle= fopen('elseif_vs_switch_benchmark.log','a'); 

for($i=0;$i&lt;$times_to_run;$i++){
$timing=array();

//get the val to test on this loop
$tval = $test[rand(0, 6)];
$valsTested[$i]=$tval;
for ($current_loop = 0; $current_loop &lt; timing_loops; $current_loop++) {


$time_start = microtime_float();
switch($tval) {
    case 'cat':
		$switch_endVal=time()+rand(0,10000000000);
        break;
    case 'dog':
		$switch_endVal=time()+rand(0,10000000000);
        break;
    case 'frog':
		$switch_endVal=time()+rand(0,10000000000);
        break;
    case 'goat':
		$switch_endVal=time()+rand(0,10000000000);
        break;
    case 'pig':
		$switch_endVal=time()+rand(0,10000000000);
        break;
    case 'sometingreallylong':
		$switch_endVal=time()+rand(0,10000000000);
        break;
    default:
		$switch_endVal=time()+rand(0,10000000000);
        break;


}
$timing[] = microtime_float() - $time_start;
}
echo '&lt;b&gt;switch&lt;/b&gt;&lt;br&gt;';
$switchAve= timing($timing);



$timing=array();

for ($current_loop2 = 0; $current_loop2 &lt; timing_loops; $current_loop2++) {


$time_start = microtime_float();

if($tval == 'cat') {
$elseif_endVal=time()+rand(0,10000000000);
} elseif($tval == 'dog') {
$elseif_endVal=time()+rand(0,10000000000);
} elseif($tval == 'frog') {
$elseif_endVal=time()+rand(0,10000000000);
} elseif($tval == 'goat') {
$elseif_endVal=time()+rand(0,10000000000);
} elseif($tval == 'pig') {
$elseif_endVal=time()+rand(0,10000000000);
} elseif($tval == 'sometingreallylong') {
$elseif_endVal=time()+rand(0,10000000000);
} else {
$elseif_endVal=time()+rand(0,10000000000);
}
$timing[] = microtime_float() - $time_start;
}
echo '&lt;b&gt;else if&lt;/b&gt;&lt;br&gt;';
$elseIFAve= timing($timing);

//you can use this level if loging if you like

//ob_start();
//echo 'tested val: '.$tval.&quot;rn&quot;;
////echo $elseIFAve;
//if((float)$elseIFAve&gt;(float)$switchAve)
//printf(&quot;switch method average %f mirco secs faster&quot;,((float)$elseIFAve-(float)$switchAve));
////echo 'switch method average '.($elseIFAve-$switchAve).' mirco secs faster';
//else
//printf(&quot;elseif method average %f mirco secs faster&quot;,((float)$switchAve-(float)$elseIFAve));
//echo &quot;rnrn&quot;;
//$buffer=ob_get_contents();
//fwrite($fhandle,$buffer,strlen($buffer));
//ob_end_flush();
////echo 'elseif method average '.($switchAve-$elseIFAve).' mirco secs faster';

$switchTotalAve+=(float)$switchAve;
$elseIFTotalAve+=(float)$elseIFAve;
}
//add some info the the log
ob_start();
echo 'ran '.$times_to_run.&quot; timesrn tested values:rn&quot;.var_export($valsTested).&quot;rn&quot;;
//echo $elseIFAve;
if((float)$elseIFTotalAve&gt;(float)$switchTotalAve)
printf(&quot;switch method average %f mirco secs faster&quot;,((float)$elseIFTotalAve-(float)$switchTotalAve));
//echo 'switch method average '.($elseIFAve-$switchAve).' mirco secs faster';
else
printf(&quot;elseif method average %f mirco secs faster&quot;,((float)$switchTotalAve-(float)$elseIFTotalAve));
echo &quot;rnrn&quot;;
$buffer=ob_get_contents();
fwrite($fhandle,$buffer,strlen($buffer));
ob_end_flush();
//printf(&quot;switch method average %f mirco secs faster&quot;,($elseIFAve-$switchAve));

?&gt;
</pre>
<p>I ran the test script 18 times.&nbsp; The switch statement was faster 9 times v.s. 8 for the elseif.&nbsp; Here is a quick break down of the data and somethings that I noticed while testing/writing this script.</p>
<ul>
    <li>The sum of the total time taken by the switch statement was: 0.000402 microseconds</li>
    <li>The sum of the total time taken by the elseif statement was: 0.000628 microseconds</li>
    <li>The elseif compared values quicker if the value was close to the top of the statement.&nbsp; While the switch seemed to test all values at the same speed. Thus it might make sense to use an elseif if you know the possible value that is going to be used the most. I.E. if your going to be using the 'cat' statement.</li>
</ul>
<p>&nbsp;Looking that the data trends it appears that the switch is the better statement to use if one value is not favored over an another.&nbsp; I'm still going to stick with my switch statements.&nbsp; I highly suggest that you run this test your self and see what you come up with.&nbsp; Change the values, use math computations, etc, its all a matter a preference.</p>
