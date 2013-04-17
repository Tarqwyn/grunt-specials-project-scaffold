<!-- Set an environment variable so we can swith enviroments and still have absolute pathing -->
<!-- Local Host -->
<!--set var="NSCENV" value="" -->
<!-- NOLDEV -->
<!--#set var="NSENV" value="{%= sandbox %}/"-->
<!-- Live -->
<!--set var="NSCENV" value="http://news.bbcimg.co.uk" -->
<!--#echo var="NSENV" -->

<!-- CSS -->
<link rel="stylesheet" type="text/css" href="<!--#echo var="NSENV" -->news/special/{%= year %}/newsspec_{%= newsspec_number %}/css/main.css" />

<!-- HTML -->

<div id="newsspec_{%= newsspec_number %}" class="ns__noJs">

<p>Its here</p>

</div>