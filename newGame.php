<?php
 $cname = $_POST["username"];
 $cFilas = $_POST["filas"];
 $cColumnas= $_POST["columnas"];
 $date=date("Y/m/d H:i:s");
 $cvalue=["filas" => $cFilas, "columnas" => $cColumnas,"dateCreation" => $date];
 setcookie($cname, json_encode($cvalue));
header('Location: /GAMEOFLIFE/game.php?'.$cname);

?>
