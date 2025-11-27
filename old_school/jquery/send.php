<?php

$to = "kontakt@jborg.se";
$from = $_REQUEST['from'];
$message = $_REQUEST['content'] ."\r\n\r\n" ."Skickat med ip: " .$_SERVER['REMOTE_ADDR'];
$subject = "Från jborg.se: " .$_REQUEST['name'];
$header = "From: <".$from.">" ."\r\n";

$send = @mail($to, $subject, $message, $header);

if(!$send){
	
	die();
	
}

?>