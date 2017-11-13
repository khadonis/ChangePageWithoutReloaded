<?php
$title = "Home Page";
?>
<?php 
if(!isset($_GET['rel'])){
	include 'header.php';
	echo "<div id='content'>";
}
?>
<div style="width:100%; height:550px;">
	<h1>This Is <strong>Home</strong> Page</h1>
</div>
<?php 
if(!isset($_GET['rel'])){
	echo "</div>";
	include 'footer.php';
}?>