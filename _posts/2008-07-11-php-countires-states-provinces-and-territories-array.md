--- 
created: 1215838800
title: PHP Countires, States, Provinces and Territories Array
layout: post
---
<p>A couple of projects ago I needed the ability to have international users.  I looked for some php functions that would make the task of registering users a little easier. I found some html lists and turned them into php functions that return arrays</p>
<pre class="brush: php">
**
 * getAustralianTerritories()
 * @since 1.2 
 * @author Jesse Baird &lt;jebaird@gmail.com&gt;
 * @return array
 */
function getAustralianTerritories()
{
    return array('Australian Capital Territory' =&gt; 'Australian Capital Territory', 'New South Wales' =&gt;
        'New South Wales', 'Northern Territory' =&gt; 'Northern Territory', 'Queensland' =&gt; 'Queensland',
        'South Australia' =&gt; 'South Australia', 'Tasmania' =&gt; 'Tasmania', 'Victoria' =&gt; 'Victoria',
        'Western Australia' =&gt; 'Western Australia');
}


/**
 * getCanadianProvinces()
 * @author Jesse Baird &lt;jebaird@gmail.com&gt;
 * @since 1.2  
 * @return array
 */
function getCanadianProvinces()
{
    return array('AB' =&gt; 'Alberta', 'BC' =&gt; 'British Columbia', 'MB' =&gt; 'Manitoba', 'NB' =&gt;
        'New Brunswick', 'NF' =&gt; 'Newfoundland', 'NT' =&gt; 'Northwest Territories', 'NS' =&gt; 'Nova Scotia',
        'NU' =&gt; 'Nunavut', 'ON' =&gt; 'Ontario', 'PE' =&gt; 'Prince Edward Island', 'QC' =&gt; 'Quebec', 'SK' =&gt;
        'Saskatchewan', 'YT' =&gt; 'Yukon Territory');
}


/**
 * getStates()
 * @since version 1.0
 *@uses gets an array of states &quot;AL&quot;=&gt;Alabama
 * @return array
 */
function getStates()
{
    $stateArray = array('' =&gt; 'Select one..', 'AL' =&gt; 'Alabama', 'AK' =&gt; 'Alaska', 'AR' =&gt; 'Arkansas',
        'AZ' =&gt; 'Arizona', 'CA' =&gt; 'California', 'CO' =&gt; 'Colorado', 'CT' =&gt; 'Connecticut', 'DC' =&gt;
        'District of Columbia', 'DE' =&gt; 'Delaware', 'FL' =&gt; 'Florida', 'GA' =&gt; 'Georgia', 'HI' =&gt; 'Hawaii',
        'ID' =&gt; 'Idaho', 'IL' =&gt; 'Illinois', 'IN' =&gt; 'Indiana', 'IA' =&gt; 'Iowa', 'KS' =&gt; 'Kansas', 'KY' =&gt;
        'Kentucky', 'LA' =&gt; 'Louisiana', 'MA' =&gt; 'Massachusetts', 'MD' =&gt; 'Maryland', 'ME' =&gt; 'Maine', 'MI' =&gt;
        'Michigan', 'MN' =&gt; 'Minnesota', 'MO' =&gt; 'Missouri', 'MS' =&gt; 'Mississippi', 'MT' =&gt; 'Montana', 'NC' =&gt;
        'North Carolina', 'ND' =&gt; 'North Dakota', 'NE' =&gt; 'Nebraska', 'NH' =&gt; 'New Hampshire', 'NJ' =&gt;
        'New Jersey', 'NM' =&gt; 'New Mexico', 'NV' =&gt; 'Nevada', 'NY' =&gt; 'New York', 'OH' =&gt; 'Ohio', 'OK' =&gt;
        'Oklahoma', 'OR' =&gt; 'Oregon', 'PA' =&gt; 'Pennsylvania', 'RI' =&gt; 'Rhode Island', 'SC' =&gt;
        'South Carolina', 'SD' =&gt; 'South Dakota', 'TN' =&gt; 'Tennessee', 'TX' =&gt; 'Texas', 'UT' =&gt; 'Utah', 'VA' =&gt;
        'Virginia', 'VT' =&gt; 'Vermont', 'WA' =&gt; 'Washington', 'WI' =&gt; 'Wisconsin', 'WV' =&gt; 'West Virginia',
        'WY' =&gt; 'Wyoming');
    return $stateArray;
}

/**
 * getCountries()
 * @author Jesse Baird &lt;jebaird@gmail.com&gt;
 * @return array of know contries
 */
function getCountries()
{
    $country_array = array('' =&gt; 'Select one..', 'af' =&gt; 'afghanistan', 'al' =&gt; 'albania', 'dz' =&gt;
        'algeria', 'as' =&gt; 'american samoa', 'ad' =&gt; 'andorra', 'ao' =&gt; 'angola', 'ai' =&gt; 'anguilla', 'aq' =&gt;
        'antarctica', 'ag' =&gt; 'antigua and barbuda', 'ar' =&gt; 'argentina', 'am' =&gt; 'armenia', 'aw' =&gt; 'aruba',
        'au' =&gt; 'australia', 'at' =&gt; 'austria', 'az' =&gt; 'azerbaijan', 'bs' =&gt; 'bahamas', 'bh' =&gt; 'bahrain',
        'bd' =&gt; 'bangladesh', 'bb' =&gt; 'barbados', 'by' =&gt; 'belarus', 'be' =&gt; 'belgium', 'bz' =&gt; 'belize',
        'bj' =&gt; 'benin', 'bm' =&gt; 'bermuda', 'bt' =&gt; 'bhutan', 'bo' =&gt; 'bolivia', 'ba' =&gt;
        'bosnia and herzegovina', 'bw' =&gt; 'botswana', 'bv' =&gt; 'bouvet island', 'br' =&gt; 'brazil', 'io' =&gt;
        'british indian ocean territory', 'bn' =&gt; 'brunei darussalam', 'bg' =&gt; 'bulgaria', 'bf' =&gt;
        'burkina faso', 'bi' =&gt; 'burundi', 'kh' =&gt; 'cambodia', 'cm' =&gt; 'cameroon', 'ca' =&gt; 'canada', 'cv' =&gt;
        'cape verde', 'ky' =&gt; 'cayman islands', 'cf' =&gt; 'central african republic', 'td' =&gt; 'chad', 'cl' =&gt;
        'chile', 'cn' =&gt; 'china', 'cx' =&gt; 'christmas island', 'cc' =&gt; 'cocos (keeling) islands', 'co' =&gt;
        'colombia', 'km' =&gt; 'comoros', 'cg' =&gt; 'congo', 'cd' =&gt; 'congo, the democratic republic of the',
        'ck' =&gt; 'cook islands', 'cr' =&gt; 'costa rica', 'ci' =&gt; 'cote d ivoire', 'hr' =&gt; 'croatia', 'cu' =&gt;
        'cuba', 'cy' =&gt; 'cyprus', 'cz' =&gt; 'czech republic', 'dk' =&gt; 'denmark', 'dj' =&gt; 'djibouti', 'dm' =&gt;
        'dominica', 'do' =&gt; 'dominican republic', 'tp' =&gt; 'east timor', 'ec' =&gt; 'ecuador', 'eg' =&gt; 'egypt',
        'sv' =&gt; 'el salvador', 'gq' =&gt; 'equatorial guinea', 'er' =&gt; 'eritrea', 'ee' =&gt; 'estonia', 'et' =&gt;
        'ethiopia', 'fk' =&gt; 'falkland islands (malvinas)', 'fo' =&gt; 'faroe islands', 'fj' =&gt; 'fiji', 'fi' =&gt;
        'finland', 'fr' =&gt; 'france', 'gf' =&gt; 'french guiana', 'pf' =&gt; 'french polynesia', 'tf' =&gt;
        'french southern territories', 'ga' =&gt; 'gabon', 'gm' =&gt; 'gambia', 'ge' =&gt; 'georgia', 'de' =&gt;
        'germany', 'gh' =&gt; 'ghana', 'gi' =&gt; 'gibraltar', 'gr' =&gt; 'greece', 'gl' =&gt; 'greenland', 'gd' =&gt;
        'grenada', 'gp' =&gt; 'guadeloupe', 'gu' =&gt; 'guam', 'gt' =&gt; 'guatemala', 'gn' =&gt; 'guinea', 'gw' =&gt;
        'guinea-bissau', 'gy' =&gt; 'guyana', 'ht' =&gt; 'haiti', 'hm' =&gt; 'heard island and mcdonald islands',
        'va' =&gt; 'holy see (vatican city state)', 'hn' =&gt; 'honduras', 'hk' =&gt; 'hong kong', 'hu' =&gt; 'hungary',
        'is' =&gt; 'iceland', 'in' =&gt; 'india', 'id' =&gt; 'indonesia', 'ir' =&gt; 'iran, islamic republic of', 'iq' =&gt;
        'iraq', 'ie' =&gt; 'ireland', 'il' =&gt; 'israel', 'it' =&gt; 'italy', 'jm' =&gt; 'jamaica', 'jp' =&gt; 'japan',
        'jo' =&gt; 'jordan', 'kz' =&gt; 'kazakstan', 'ke' =&gt; 'kenya', 'ki' =&gt; 'kiribati', 'kp' =&gt;
        'korea democratic peoples republic of', 'kr' =&gt; 'korea republic of', 'kw' =&gt; 'kuwait', 'kg' =&gt;
        'kyrgyzstan', 'la' =&gt; 'lao peoples democratic republic', 'lv' =&gt; 'latvia', 'lb' =&gt; 'lebanon', 'ls' =&gt;
        'lesotho', 'lr' =&gt; 'liberia', 'ly' =&gt; 'libyan arab jamahiriya', 'li' =&gt; 'liechtenstein', 'lt' =&gt;
        'lithuania', 'lu' =&gt; 'luxembourg', 'mo' =&gt; 'macau', 'mk' =&gt;
        'macedonia, the former yugoslav republic of', 'mg' =&gt; 'madagascar', 'mw' =&gt; 'malawi', 'my' =&gt;
        'malaysia', 'mv' =&gt; 'maldives', 'ml' =&gt; 'mali', 'mt' =&gt; 'malta', 'mh' =&gt; 'marshall islands', 'mq' =&gt;
        'martinique', 'mr' =&gt; 'mauritania', 'mu' =&gt; 'mauritius', 'yt' =&gt; 'mayotte', 'mx' =&gt; 'mexico', 'fm' =&gt;
        'micronesia, federated states of', 'md' =&gt; 'moldova, republic of', 'mc' =&gt; 'monaco', 'mn' =&gt;
        'mongolia', 'ms' =&gt; 'montserrat', 'ma' =&gt; 'morocco', 'mz' =&gt; 'mozambique', 'mm' =&gt; 'myanmar', 'na' =&gt;
        'namibia', 'nr' =&gt; 'nauru', 'np' =&gt; 'nepal', 'nl' =&gt; 'netherlands', 'an' =&gt; 'netherlands antilles',
        'nc' =&gt; 'new caledonia', 'nz' =&gt; 'new zealand', 'ni' =&gt; 'nicaragua', 'ne' =&gt; 'niger', 'ng' =&gt;
        'nigeria', 'nu' =&gt; 'niue', 'nf' =&gt; 'norfolk island', 'mp' =&gt; 'northern mariana islands', 'no' =&gt;
        'norway', 'om' =&gt; 'oman', 'pk' =&gt; 'pakistan', 'pw' =&gt; 'palau', 'ps' =&gt;
        'palestinian territory, occupied', 'pa' =&gt; 'panama', 'pg' =&gt; 'papua new guinea', 'py' =&gt; 'paraguay',
        'pe' =&gt; 'peru', 'ph' =&gt; 'philippines', 'pn' =&gt; 'pitcairn', 'pl' =&gt; 'poland', 'pt' =&gt; 'portugal',
        'pr' =&gt; 'puerto rico', 'qa' =&gt; 'qatar', 're' =&gt; 'reunion', 'ro' =&gt; 'romania', 'ru' =&gt;
        'russian federation', 'rw' =&gt; 'rwanda', 'sh' =&gt; 'saint helena', 'kn' =&gt; 'saint kitts and nevis',
        'lc' =&gt; 'saint lucia', 'pm' =&gt; 'saint pierre and miquelon', 'vc' =&gt;
        'saint vincent and the grenadines', 'ws' =&gt; 'samoa', 'sm' =&gt; 'san marino', 'st' =&gt;
        'sao tome and principe', 'sa' =&gt; 'saudi arabia', 'sn' =&gt; 'senegal', 'sc' =&gt; 'seychelles', 'sl' =&gt;
        'sierra leone', 'sg' =&gt; 'singapore', 'sk' =&gt; 'slovakia', 'si' =&gt; 'slovenia', 'sb' =&gt;
        'solomon islands', 'so' =&gt; 'somalia', 'za' =&gt; 'south africa', 'gs' =&gt;
        'south georgia and the south sandwich islands', 'es' =&gt; 'spain', 'lk' =&gt; 'sri lanka', 'sd' =&gt;
        'sudan', 'sr' =&gt; 'suriname', 'sj' =&gt; 'svalbard and jan mayen', 'sz' =&gt; 'swaziland', 'se' =&gt; 'sweden',
        'ch' =&gt; 'switzerland', 'sy' =&gt; 'syrian arab republic', 'tw' =&gt; 'taiwan, province of china', 'tj' =&gt;
        'tajikistan', 'tz' =&gt; 'tanzania, united republic of', 'th' =&gt; 'thailand', 'tg' =&gt; 'togo', 'tk' =&gt;
        'tokelau', 'to' =&gt; 'tonga', 'tt' =&gt; 'trinidad and tobago', 'tn' =&gt; 'tunisia', 'tr' =&gt; 'turkey', 'tm' =&gt;
        'turkmenistan', 'tc' =&gt; 'turks and caicos islands', 'tv' =&gt; 'tuvalu', 'ug' =&gt; 'uganda', 'ua' =&gt;
        'ukraine', 'ae' =&gt; 'united arab emirates', 'gb' =&gt; 'united kingdom', 'us' =&gt; 'united states', 'um' =&gt;
        'united states minor outlying islands', 'uy' =&gt; 'uruguay', 'uz' =&gt; 'uzbekistan', 'vu' =&gt; 'vanuatu',
        've' =&gt; 'venezuela', 'vn' =&gt; 'viet nam', 'vg' =&gt; 'virgin islands, british', 'vi' =&gt;
        'virgin islands, u.s.', 'wf' =&gt; 'wallis and futuna', 'eh' =&gt; 'western sahara', 'ye' =&gt; 'yemen', 'yu' =&gt;
        'yugoslavia', 'zm' =&gt; 'zambia', 'zw' =&gt; 'zimbabwe', );
    asort($country_array);
    return $country_array;
}
</pre>
