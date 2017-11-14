<?php
$title = "Contact Us";
?>

<?php 
if(!isset($_GET['rel'])){
	include 'header.php';
	echo "<div id='content'>";
}
?>
<div style="width:100%; height:550px;background-color:#4a4;">
	<h1>This Is <strong>Contact Us</strong> Page</h1>
</div>
<?php 
if(!isset($_GET['rel'])){
	echo "</div>";
	include 'footer.php';
}?>