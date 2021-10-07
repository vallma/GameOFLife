<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link href="style.css"
      rel="stylesheet" type="text/css">
    <link href="index.html">
   
    <title>JOC DE LA VIDA</title>
</head>
<body>

  <header>
    <div class="menu">
        
        <a href="index.php"> <img src="Logo.png" alt="" ></a>
        <nav>
           
            <ul>
              
            <li><a href="partides.php">Partides</a></li>
              <li><a href="#">ABOUT ME</a></li>
              
            </ul>
        </nav>
    </div>
</header>    
    <div id="background">

    
        <?php //Creació de la Cookie
       
       

        ?>
       
    <form id="ContainerFormulari"  action="./newGame.php" method="POST">
        
        <h2>INSEREIX EL TEU NICK</h2>
        
            <input id="inputtext" type="text" name="username" id="username" placeholder="Username">
        
        <h4>FILAS</h4>
            <input id="filas" name="filas" type="number" placeholder="0" value="" >
        
        <h4>COLUMNAS</h4>
            <input id="columnas" name="columnas" type="number" placeholder="0" value="" ><br>
    </br>
        
    
        <input type="submit" value="Login"   ></input>

    </form>
        
    
  
    </div>
    <footer>
        
    </footer>
    
</body>
</html>


