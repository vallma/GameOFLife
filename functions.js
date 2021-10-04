



/*
 const cols = "<?php echo $columnes ?>";
 const rows = "<?php echo $files ?>";

*/



function guardarFormulari(){
    location.href ='index.html';
let columnas = document.getElementById("columnas").value;
let filas = document.getElementById("filas").value;
let username = document.getElementById("inputtext").value;


}
       let columnas= 10;
       let filas =10;
        let lado = 20;

        let reproducir = false;

        let fotografia = [];
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
        setInterval(() => {
            if (reproducir) {
                siguienteEstado()
            }
        }, 1000 / 60);

        function canviVelocitat() {

            var velocitat = document.getElementById("speed");
            var output = document.getElementById("valor");
            output.innerHTML = velocitat.value; 
            
            velocitat.oninput = function() {
            output.innerHTML = this.value;
            evolutionSpeed = this.value * 120;


            }
        }

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

        generarTablero()
            //Genera el tablero de forma dinamica
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

        function cambiarEstado(x, y) {
            let celula = document.getElementById(`celula-${x + "-" + y}`)
            if (celula.style.background != "black") {
                celula.style.background = "black"
            } else {
                celula.style.background = ""
            }
        }
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
            let vivas = 0
            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    if (i == 0 && j == 0) {
                        continue
                    }
                    try {
                        if (fotografia[x + i][y + j]) {
                            vivas++
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