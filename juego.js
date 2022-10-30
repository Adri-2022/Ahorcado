var palabras = ["hola", "manzana", "heladera", "html", "alura", "caramelo", "criollo", "empanadas", "avion", "everest", "celular", "calesita", "cmputadora", "amor", "compasion", "felicidad", "pausa", "gentileza", "explorador", "ventilador", "elefante", "jirafa", "mono", "existencia", "muñeca", "zoologico", "yate", "pequeño", "juguete", "grande", "primero", "ultimo", "araña", "waterpolo", "whisky", "walabi", "yerba", "yacare", "mujer", "hombre", "historia", "yegua", "sarten", "alegria", "corazon", "algarrobo", "chañar", "madre", "padre", "hermano", "chocolate", "helado", "frutilla", "naranja", "mandarina"]

var palabrita;
var cant_errores = 0;
var cant_aciertos = 0;
const imagen = id('imagen');
const boton_letras = document.querySelectorAll("#letras button");


const boton = id("jugar");
boton.addEventListener("click", iniciar);

function id(string) {
    return document.getElementById(string);
}
function obtener_random(num_min, num_max) {
    const amplitud_valores = num_max - num_min;
    const valor_al_azar = Math.floor(Math.random() * amplitud_valores) + num_min;
    return valor_al_azar;
}

function iniciar(event) {
    imagen.src = `img/ahorcado_0.png`;
    id('resultado').innerHTML = "";
    id('resultado2').innerHTML = "";
    boton.disabled = true;
    cant_errores = 0;
    cant_aciertos = 0;


    const parrafo = id("palabra_a_adivinar");
    parrafo.innerHTML = "";

    var cant_palabras = palabras.length;
    valor_al_azar = obtener_random(0, cant_palabras);

    palabrita = palabras[valor_al_azar];
    const cant_letras = palabrita.length;
    console.log(palabrita);

    for (let i = 0; i < boton_letras.length; i++) {
        boton_letras[i].disabled = false;
    }

    for (let i = 0; i < cant_letras; i++) {
        const span = document.createElement("span");
        parrafo.appendChild(span);
    }
}


for (let i = 0; i < boton_letras.length; i++) {
    boton_letras[i].addEventListener("click", click_letras);

}
function click_letras(event) {
    const button = event.target;
    button.disabled = true;
    const spans = document.querySelectorAll("#palabra_a_adivinar span")

    const letra = button.innerHTML.toUpperCase();
    const palabra = palabrita.toUpperCase();

    let acerto = false;
    for (let i = 0; i < palabra.length; i++) {
        if (letra == palabra[i]) {
            spans[i].innerHTML = letra;
            cant_aciertos++;
            acerto = true;
        }
    }

    if (acerto == false) {
        cant_errores++;
        const source = `img/ahorcado_${cant_errores}.png`;

        imagen.src = source;
    }

    if (cant_errores == 6) {
        id('resultado').innerHTML = "Fin del Juego " + " La Palabra era " + palabrita;
        game_over();
    } else if (cant_aciertos == palabrita.length) {
        id('resultado2').innerHTML = "¡Felicidades! ¡Ganaste!";
        game_over();
    }
}



function game_over() {
    for (let i = 0; i < boton_letras.length; i++) {
        boton_letras[i].disabled = true;
        
    }

    boton.disabled = false;
    
}


game_over();



