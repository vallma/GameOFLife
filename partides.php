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
              <li><a href="">ABOUT ME</a></li>
              
            </ul>
        </nav>
    </div>
</header>    
    <div id="background">
    <form id="ContainerFormulari"  action="index.php" method="POST">
        
        <h2>Partidas Guardades</h2>
        
        <form action="./index.php" method="post">
          
          <select id="nom" name="nom" size="10">          
          
          
           <script>
             listCookies();
             function listCookies() {
            var theCookies = document.cookie.split(';');
            var aString = '';
            for (var i = 1 ; i <= theCookies.length; i++) {
                aString += i + ' ' + theCookies[i-1] + "\n";
            }
            return aString;
        }
           </script>
       
                       
          </select>

        
               
             
          
          
            <Input type='submit' id="button" value='Carregar' />
        </form>
        
   

    
        
    
  
    </div>
    <footer>
        
    </footer>
    
</body>
</html>
