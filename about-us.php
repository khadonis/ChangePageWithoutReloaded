<?php
$title = "About Us";
?>

<?php 
if(!isset($_GET['rel'])){
	include 'header.php';
	echo "<div id='content'>";
}
?>
<div style="width:100%; height:550px;background-color:#4aa;">
	<h1>This Is <strong>About Us</strong> Page</h1>
</div>
<?php 
if(!isset($_GET['rel'])){
	echo "</div>";
	include 'footer.php';
}?>