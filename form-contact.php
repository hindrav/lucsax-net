<?php
    $email_to = "hindrave@gmail.com";
    $email_subject = "Contacto desde la web";

    function died($error) {
        // Error messages
        echo "Lo sentimos, hubo un error en sus datos y el formulario no puede ser enviado en este momento. ";
        echo "Detalle de los errores.<br /><br />";
        echo $error."<br /><br />";
        echo "Porfavor corrija estos errores e inténtelo de nuevo.<br /><br />";
        die();
    }
    if(!isset($_POST['asunto']) ||
        !isset($_POST['nombre']) ||
        !isset($_POST['email']) ||
        !isset($_POST['message'])) {
        die('Lo sentimos pero parece haber un problema con los datos enviados.');
    }
    $affair = $_POST['asunto']; // required
    $name = $_POST['nombre']; // required
    $email_from = $_POST['email']; // required
    $message = $_POST['mensaje']; // required
    $error_message = "";//
    //Verifying email
   $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
   if(!preg_match($email_exp,$email_from)) {
     $error_message .= 'La dirección de correo proporcionada no es válida.<br />';
   }
   //Verifying strings
   $string_exp = "/^[A-Za-z .'-]+$/";
   if(!preg_match($string_exp,$affair)) {
     $error_message .= 'El formato del asunto no es válido<br />';
   }
   if(!preg_match($string_exp,$name)) {
     $error_message .= 'El formato del nombre no es válido<br />';
   }
   if(strlen($message) < 2) {
     $error_message .= 'El formato del texto no es válido.<br />';
   }
   if(strlen($error_message) > 0) {
     die($error_message);
   }
   //Body message
   $email_message = "Contenido del Mensaje.\n\n";
   function clean_string($string) {
     $bad = array("content-type","bcc:","to:","cc:","href");
     return str_replace($bad,"",$string);
   }
   $email_message = "Asunto: ".clean_string($asunto)."\n";
   $email_message .= "Nombre: ".clean_string($nombre)."\n";
   $email_message .= "Email: ".clean_string($email_from)."\n";
   $email_message .= "Mensaje: ".clean_string($message)."\n";
    //Creating mail headers
    $headers = 'From: '.$email_from."\r\n".
    'Reply-To: '.$email_from."\r\n" .
    'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);
?>