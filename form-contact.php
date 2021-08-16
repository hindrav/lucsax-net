<?php
$affair = $_POST['affair'];
$name = $_POST['name'];
$mail = $_POST['mail'];
$msg = $_POST['msg'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";
$message = "Saludos Staff de Lucsax. \n\n Mi nombre es:  " . $name . ", los contacto a través de su plataforma en línea lucsax.net. \r\n\n";
$message .= $_POST['msg'] . " \r\n\n";
$message .= "\n Mensaje enviado el " . date('d/m/Y', time());

$para = 'soluciones@lucsax.net';

mail($para, $affair, utf8_decode($message), $header);

header("Location:index.html");
?>