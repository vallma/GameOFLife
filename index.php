<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="stylesheet" href="style.css">
    <script src="functions.js"></script>
    <title>JOC DE LA VIDA</title>
</head>
<body>


<header>
    <div class="menu">
        
        <a href="Formulari.html"> <img src="Logo.png" alt="" ></a>
        <nav>
           
            <ul>
              <li><a href="./index.html">GAME</a></li>
              <li><a href="#">Estadístiques</a></li>
              
            </ul>
        </nav>
    </div>
</header>    

   


    <div id="container">


    <div id="contenedor-tablero"> 
        <script >
            let columnas = "<?php echo $_POST['columnas'] ?>";
            let filas = "<?php echo $_POST['filas'] ?>";
 
            let lado = 20;

             let reproducir = false;

             let fotografia = [];


            generarTablero(

            );
            function generarTablero() {
            let html = "<table cellpadding=0 cellspacing=0 id='tablero'>"
            for (let y = 0; y < filas; y++) {
                html += "<tr>"
                for (let x = 0; x < columnas; x++) {
                    html += `<td id="celula-${x + "-" + y}" onmouseup="cambiarEstado(${x}, ${y});mapa_complejidad = []">`
                    html += "</td>"
                }
                html += "</tr>"
            }
            html += "</table>"
            let contenedor = document.getElementById("contenedor-tablero")
            contenedor.innerHTML = html
            let tablero = document.getElementById("tablero")
            tablero.style.width = lado * columnas + "px"
            tablero.style.height = lado * filas + "px"
            
        }
        </script>
    <div id="stats" >  STATS </div>
    </div>
   

    
           

    <div class="contenedor-botones">

        <div class="btn" id="btn1" onclick=" intercambiarReproducción();">
            <i class="fas fa-play" title="Iniciar cambio de estados"></i>
        </div>

        <div class="btn" id="btn2">
            <i class="fas fa-step-forward" onclick="siguienteEstado();" title="Siguiente estado"></i>
        </div>
        

        <div class="btn" id="btn3" onclick="limpiar();" title="Limpiar">
            <i class="fas fa-eraser"></i>
        </div>
        <div class="btn" id="btn4" onclick="randomizar();" title="Aleatorio">
            <i class="fas fa-random"></i>

        <br><br>
        </div>
       
        <div class="velocitat"><label for="speed"><span id="valor"></span></label>
            <h4>Velocitat</h4>
            <Input type="range" min="1" max="10" value="5" class="slider" id="speed">
          </div>
            

        

    </div>
   

 </div>
  


</body>
</html>
