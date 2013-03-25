<!-- newsspec_{%= newsspec_number %} -->
<!-- Set an environment variable so we can swith enviroments and still have absolute pathing -->
<!-- Local Host -->
<!--set var="NSCENV" value="" -->
<!-- NOLDEV -->
<!--#set var="NSENV" value="http://noldev25new.newsonline.tc.nca.bbc.co.uk:11138/"-->
<!-- Live -->
<!--set var="NSCENV" value="http://news.bbcimg.co.uk" -->
<!--#echo var="NSENV" -->

<!-- load CSS -->
<link rel="stylesheet" type="text/css" href="<!--#echo var="NSENV" -->/news/special/{%= year %}/newsspec_{%= newsspec_number %}/css/main.css" />

<!-- HTML -->

<div id="newsspec_{%= newsspec_number %}">

<p>Its here</p>

</div>

<!-- Load JS here Main JS will take care of loading all the dependencies -->

<script type="text/javascript" src="<!--#echo var="NSENV" -->/news/special/{%= year %}/newsspec_{%= newsspec_number %}/js/main.js"></script>

<!-- /newsspec_{%= newsspec_number %} -->