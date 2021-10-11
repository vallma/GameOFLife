

function world(){
    
    generarTablero();
    canviVelocitat();
    randomizar();
    limpiar();
    

};

var route = window.location.href;

var nameSeed = route.split('?');
nameSeed = nameSeed[1];
let valor = getCookie(nameSeed);
valor = JSON.parse(valor);
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent (document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  



//agafar les variables de la Cookie


const columnas = valor["columnas"];
const filas = valor["filas"];


let lado = 20;

 let reproducir = false;

 let fotografia = [];


;



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


     //control del teclat i esdevaniments
        document.addEventListener("keydown", (e) => { //Esdavanimet per controlar el teclat
    
            e.preventDefault() //Evita el moviment de scroll al apretar l'spai ja que per defecte escroleja automaticamnt
            switch (e.keyCode) {
                case 39:
                    siguienteEstado()
                    break;
                case 32:
                    intercambiarReproducción()
                    break;
                case 8:
                    limpiar()
                    break;
                default:
                    break;
            }
        })


     //mentres es reprodueix cambia de estat
        var speed = setInterval(() => {
            if (reproducir) {
                siguienteEstado()
            }
        }, 10000 / 60);
        
        
        //Per parar: clearInterval(speed);

        function canviVelocitat() {

                //Función para modificarlo
                    var velocitat = document.getElementById("speed");
                    var output = document.getElementById("valor");
                    output.innerHTML = velocitat.value; 
                    
                    velocitat.oninput = function() {
                      output.innerHTML = this.value;
                      evolutionSpeed = this.value * 120;
                
                function evolve(){
                //Función para activarlo
                        siguienteEstado();
                       
                
                if (comencar) {
                //Función para activarlo
                            timer = setTimeout(evolve, evolutionSpeed);
                        }
                }
                      
                    }
        }
//Cambia el color del fons per diferenciar quan esta en play o esta en Pause
        function intercambiarReproducción() {
            mapa_complejidad = []
            reproducir = !reproducir
            if (reproducir) {
                document.body.style.background = "white"
                document.getElementById("btn1").innerHTML = `<i class="fas fa-pause"></i>`
            } else {
                document.body.style.background = "#f0f0ff"
                document.getElementById("btn1").innerHTML = `<i class="fas fa-play"></i>`
            }
        }

       
            //Genera el tablero de forma dinamica
        

        function cambiarEstado(x, y) {
            let celula = document.getElementById(`celula-${x + "-" + y}`)
            if (celula.style.background != "black") {
                celula.style.background = "black"
            } else {
                celula.style.background = ""
            }
        }
        //Funcio per randomitzar amb el math.random les celules 
        function randomizar() {
            mapa_complejidad = []
            for (let x = 0; x < columnas; x++) {
                for (let y = 0; y < filas; y++) {
                    if (Math.random() < 0.2) {
                        cambiarEstado(x, y)
                    }
                }
            }
        }
// posa les caselles buides 
        function limpiar() {
            mapa_complejidad = []
            for (let x = 0; x < columnas; x++) {
                for (let y = 0; y < filas; y++) {
                    let celula = document.getElementById(`celula-${x + "-" + y}`)
                    celula.style.background = ""
                }
            }
            if (reproducir) {
                intercambiarReproducción()
            }
        }

        let mapa_complejidad = []
        let p_mapa_complejidad = []
        let mapa_verificados = []

        function fotografiar() {
            p_mapa_complejidad = JSON.parse(JSON.stringify(mapa_complejidad));
            mapa_complejidad = []
            mapa_verificados = []
            fotografia = []
            if (!p_mapa_complejidad.length) {
                primeraFoto()
            } else {
                demasFotos()
            }
        }


        function demasFotos() {
            for (let x in p_mapa_complejidad) {
                for (let y in p_mapa_complejidad[x]) {
                    try {
                        let celula = document.getElementById(`celula-${x + "-" + y}`)
                        if (!fotografia[x]) {
                            fotografia[x] = []
                            mapa_verificados[x] = []
                        }
                        fotografia[x][y] = celula.style.background == "black"
                        calcularMapaComplejidad(Number(x), Number(y))
                    } catch (e) { }
                }
            }
            p_mapa_complejidad = []
        }

        function primeraFoto() {
            for (let x = 0; x < columnas; x++) {
                fotografia.push([])
                mapa_verificados.push([])
                for (let y = 0; y < filas; y++) {
                    let celula = document.getElementById(`celula-${x + "-" + y}`)
                    fotografia[x][y] = celula.style.background == "black"
                    calcularMapaComplejidad(x, y)
                }
            }
        }

        function calcularMapaComplejidad(x, y) {
            if (fotografia[x][y]) {
                for (let i = -1; i <= 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        if (!mapa_complejidad[x + i]) {
                            mapa_complejidad[x + i] = []
                        }
                        mapa_complejidad[x + i][y + j] = true
                    }
                }
            }
        }

        function contarVivas(x, y) {
            let vivas = 0;
            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    if (i == 0 && j == 0) {
                        continue
                    }
                    try {
                        if (fotografia[x + i][y + j]) {
                            vivas++
                            cvivas++
                        }
                    } catch (e) { }
                    if (vivas > 3) {
                        return vivas
                    }
                }
            }
            return vivas
        }

        function siguienteEstado() {
            fotografiar()
            for (const x in mapa_complejidad) {
                for (const y in mapa_complejidad[x]) {
                    try {
                        if (mapa_verificados[x][y]) {
                            continue
                        }
                        mapa_verificados[x][y] = true

                        let vivas = contarVivas(Number(x), Number(y))
                        let celula = document.getElementById(`celula-${x + "-" + y}`)
                        if (fotografia[x][y]) { //celula esta viva
                            if (vivas < 2 || vivas > 3) {
                                celula.style.background = "" // Mor per sobre població
                            }
                        } else { //celula esta morta 
                            if (vivas == 3)
                                celula.style.background = "black"
                        }
                    } catch (e) { }
                }
            }
        }
        function listCookies() {
            var theCookies = document.cookie.split(';');
            var aString = '';
            for (var i = 1 ; i <= theCookies.length; i++) {
                aString += i + ' ' + theCookies[i-1] + "\n";
            }
            return aString;
        }
        // carrega les funcions 
        window.onload = () => {
            world();
          }