const TOTAL_PREGUNTAS = 10;

let preguntaActual = -1;
let estadoPregunta = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const bd_juego = [
  {
    id: "A",
    pregunta: "¿Empresa reconocida que se dedica a los servidores?",
    respuesta: "amazon",
  },
  {
    id: "B",
    pregunta:
      "¿Termino en ingles que hace referencia a una copia de seguridad?",
    respuesta: "backup",
  },
  {
    id: "C",
    pregunta:
      "¿Nombre de la memoria que almacena temporalmente los datos de la computadora?",
    respuesta: "cache",
  },
  {
    id: "D",
    pregunta:
      "¿Archivo que controla los perifericos que se conectan a la computadora?",
    respuesta: "driver",
  },
  {
    id: "E",
    pregunta: "¿Mezclar los datos para protegerlos como medida de seguridad?",
    respuesta: "encriptar",
  },
  {
    id: "F",
    pregunta: "¿Famosa red social creada por Mark Zuckerberg?",
    respuesta: "facebook",
  },
  {
    id: "G",
    pregunta: "¿Lenguaje de programacion creado por Google?",
    respuesta: "go",
  },
  {
    id: "H",
    pregunta: "¿Lenguaje utilizado para estructurar las paginas web?",
    respuesta: "html",
  },
  {
    id: "I",
    pregunta: "¿Aspecto que presentan los programas tras su ejecucion?",
    respuesta: "interfaz",
  },
  {
    id: "J",
    pregunta: "¿Lenguaje de programacion con el cual se diseño Android?",
    respuesta: "java",
  },
];

const timer = document.getElementById("tiempo");
const TIEMPO_DEL_JUEGO = 60;

let cantidadAcertadas = 0;
let tiempoRestante = TIEMPO_DEL_JUEGO;
let countdown;

const container = document.querySelector(".container");

for (let i = 1; i <= TOTAL_PREGUNTAS; i++) {
  const circle = document.createElement("div");
  circle.classList.add("circle");

  circle.textContent = String.fromCharCode(i + 64);
  circle.id = String.fromCharCode(i + 64);

  container.appendChild(circle);

  const angle = ((i - 1) / TOTAL_PREGUNTAS) * Math.PI * 2 - Math.PI / 2;

  const x = Math.round(95 + 120 * Math.cos(angle));
  const y = Math.round(95 + 120 * Math.sin(angle));

  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
}

document.getElementById("comenzar").addEventListener("click", () => {
  document.getElementById("pantalla-inicial").style.display = "none";
  document.getElementById("pantalla-juego").style.display = "block";

  iniciarContador();
  cargarPreguntas();
});

function iniciarContador() {
  countdown = setInterval(() => {
    tiempoRestante--;
    timer.textContent = tiempoRestante;

    if (tiempoRestante <= 0) {
      clearInterval(countdown);
      alert("Juego terminado. Acertaste " + cantidadAcertadas + " preguntas");
    }
  }, 1000);
}

function cargarPreguntas() {
  preguntaActual++;

  if (preguntaActual >= TOTAL_PREGUNTAS) {
    preguntaActual = 0;
  }

  if (estadoPregunta.indexOf(0) >= 0) {
    while (estadoPregunta[preguntaActual] === 1) {
      preguntaActual++;

      if (preguntaActual >= TOTAL_PREGUNTAS) {
        preguntaActual = 0;
      }
    }

    document.getElementById("letra-pregunta").textContent =
      bd_juego[preguntaActual].id;

    document.getElementById("pregunta").textContent =
      bd_juego[preguntaActual].pregunta;

    let letra = bd_juego[preguntaActual].id;

    document.getElementById(letra).classList.add("pregunta-actual");
  } else {
    clearInterval(countdown);

    alert(
      "Juego terminado\n\n" +
        "Acertadas: " +
        cantidadAcertadas +
        "\nPorcentaje: " +
        (cantidadAcertadas * 100) / TOTAL_PREGUNTAS +
        "%"
    );
  }
}

const respuesta = document.getElementById("respuesta");

respuesta.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    if (respuesta.value === "") {
      alert("Debe ingresar una respuesta");
      return;
    }

    controlarRespuesta(respuesta.value.toLowerCase());
  }
});

function controlarRespuesta(respuestaIngresada) {
  let letra = bd_juego[preguntaActual].id;

  document.getElementById(letra).classList.remove("pregunta-actual");

  if (respuestaIngresada === bd_juego[preguntaActual].respuesta) {
    cantidadAcertadas++;

    document.getElementById(letra).classList.add("bien-respondida");
  } else {
    document.getElementById(letra).classList.add("mal-respondida");
  }

  estadoPregunta[preguntaActual] = 1;

  respuesta.value = "";

  cargarPreguntas();
}

document.getElementById("pasar").addEventListener("click", () => {
  let letra = bd_juego[preguntaActual].id;

  document.getElementById(letra).classList.remove("pregunta-actual");

  cargarPreguntas();
});

document.getElementById("responder").addEventListener("click", () => {
  if (respuesta.value === "") {
    alert("Debe ingresar una respuesta");
    return;
  }

   controlarRespuesta(respuesta.value.toLowerCase());
});
