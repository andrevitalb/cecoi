<meta http-equiv="refresh" content="1.75;URL=http://yellowpath.mx/proyectos/cecoi/gintextil/" />
     
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

					$para = 'favolopez80@gmail.com';
					$asunto = 'Contacto Página Web';

					if($spam == false && mail($para, $asunto, $mensaje, $header)) {
						echo'<body><link href="https://fonts.googleapis.com/css?family=Baloo+Bhai&display=swap" rel="stylesheet"><div><h1>Mensaje Enviado</h1></div><style>body { margin: 0; padding: 0; } div { display: block; text-align: center; background-image: url(images/custom/bg_shade_dark.jpg); background-size: cover; height: 100vh; width: 100vw; } h1 { font-size: 85px; display: inline-block; margin: 21.5% auto; color: #FFF; font-family: Baloo Bhai, cursive; }</style></body>';
					}
					else {
					  	echo'<body><link href="https://fonts.googleapis.com/css?family=Baloo+Bhai&display=swap" rel="stylesheet"><div><h1>Error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.</h1></div><style>body { margin: 0; padding: 0; } div { display: block; text-align: center; background-image: url(images/custom/bg_shade_dark.jpg); background-size: cover; width: 100vw; height: 100vh; } h1 { padding: 3.5rem; background-color: rgba(255,255,255,.5); font-size: 60px; display: inline-block; margin: 17% auto; color: #000; font-family: Baloo Bhai, cursive; }</style></body>';
					  }					    
				?>