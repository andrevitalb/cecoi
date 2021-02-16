<?php
if(isset($_POST['email'])) {
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "yellowpathwd@gmail.com";
    $email_subject = "Contacto página";
 
    function died($error) {
        // your error code can go here
        echo "Hubo un problema al enviar tu mensaje, por favor verifica los datos y vuelve a intentarlo.";
        die();
    }
 
 
    // validation expected data exists
    if(!isset($_POST['name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['message'])) {
        died('Hubo un problema al enviar tu mensaje, por favor verifica los datos y vuelve a intentarlo.');       
    }
 
     
 
    $first_name = $_POST['name']; // required
    $email_from = $_POST['email']; // required
    $telephone = $_POST['subject']; // not required
    $comments = $_POST['message']; // required
 
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'La dirección de correo que proporcionaste no es válida.<br />';
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$first_name)) {
    $error_message .= 'Por favor, corrige este campo.<br />';
  }
 
  if(strlen($comments) < 2) {
    $error_message .= 'Por favor, corrige este campo.<br />';
  }
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
    $email_message = "Detalles de tu mensaje:\n\n";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
     
 
    $email_message .= "Nombre: ".clean_string($first_name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Asunto: ".clean_string($telephone)."\n";
    $email_message .= "Mensaje: ".clean_string($comments)."\n";
 
// create email headers
$headers = 'De: '.$email_from."\r\n".
'Responder a: '.$email_from."\r\n";
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 

 
Gracias por contactarnos, responderemos lo más pronto posible.
 
<?php
 
}
?>