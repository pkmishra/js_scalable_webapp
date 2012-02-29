<?php
$params = count($_GET) ? $_GET : $_POST;
	
if (count($params)) {
	echo json_encode($params);

}
?>