<meta http-equiv="refresh" content="1.75;URL=http://yellowpath.mx/proyectos/cecoi/quindx/index.html" />
     
               	<?php
               	    $nombre = $_REQUEST['inputName'];
               	    $mail = $_REQUEST['inputEmail'];
               	    $asunto = $_REQUEST['inputAsunto'];
               	    $textarea = $_REQUEST['message'];

               	    $spam = $_REQUEST['valid_spam'];
						

					$header = 'De: ' . $mail . " \r\n";

					$mensaje = "Nombre: " . $nombre . " \r\n";
					$mensaje .= "Mail: " . $mail . " \r\n";
					$mensaje .= "Asunto: " . $asunto . " \r\n";
					$mensaje .= "Mensaje: " . $textarea . " \r\n";
					
					$mensaje .= "\n\nEnviado el ".date('d-m-Y H:i:s');

					$para = 'quindx.ags@gmail.com';
					$asunto = 'Contacto Página Web';

					if($spam == false && mail($para, $asunto, $mensaje, $header)) {
						echo'<body style = "margin: 0; padding: 0;"><link href="https://fonts.googleapis.com/css?family=Archivo+Black&display=swap" rel="stylesheet"><div style = "display: block; text-align: center; background-image: url(images/custom/bg.jpg); background-size: cover; height: 100%; width: 100%;"><h1 style = "font-size: 85px; display: inline-block; margin: 22% auto; color: #fff; font-family:  Archivo Black, sans-serif;">Mensaje Enviado</h1></div></body>';
					}
					else {
					  	echo'<body style = "margin: 0; padding: 0;"><link href="https://fonts.googleapis.com/css?family=Archivo+Black&display=swap" rel="stylesheet"><div style = "display: block; text-align: center; background-image: url(images/custom/bg.jpg); background-size: cover; width: 100%;"><h1 style = "padding: 3.5rem; background-color: rgba(255,255,255,.5); font-size: 60px; display: inline-block; margin: 18.5% auto; color: #000; font-family:  Archivo Blacl, sans-serif;">Error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.</h1></div></body>';
					  }					    
				?>