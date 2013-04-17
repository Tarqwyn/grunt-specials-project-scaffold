<!-- newsspec_{%= newsspec_number %} -->
<!-- Set an environment variable so we can swith enviroments and still have absolute pathing -->
<!-- Local Host -->
<!--set var="NSCENV" value="" -->
<!-- NOLDEV -->
<!--#set var="NSENV" value="{%= sandbox %}/"-->
<!-- Live -->
<!--set var="NSCENV" value="http://news.bbcimg.co.uk" -->
<!--#echo var="NSENV" -->

<!--#include virtual="/news/special/{%= year %}/newsspec_{%= newsspec_number %}/inc/main_html.inc" -->

<!-- Load JS here Main JS will take care of loading all the dependencies -->
<script><!--#include virtual="/news/special/{%= year %}/newsspec_{%= newsspec_number %}/inc/compiled/main_js.inc" --> </script>

<!-- /newsspec_{%= newsspec_number %} -->