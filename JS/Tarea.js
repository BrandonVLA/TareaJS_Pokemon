console.log("Funcionando archivo inicio");
const ListaPokemon = [
  {
    Nombre: "Bulbasaur",
    Imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    Descripcion:
      "Bulbasaur es un Pokémon tipo Planta/Veneno conocido por la semilla en su espalda, la cual crece conforme evoluciona. Es un Pokémon leal, ideal para entrenadores principiantes, ya que posee una combinación equilibrada de ataques ofensivos y defensivos. Su movimiento característico, Drenadoras, le permite recuperar energía mientras debilita a sus oponentes.",
  },
  {
    Nombre: "Ivysaur",
    Imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    Descripcion:
      "Ivysaur es la evolución de Bulbasaur, y la planta en su espalda comienza a florecer, acumulando energía solar. Es un Pokémon más fuerte y resistente, capaz de usar poderosos ataques como Rayo Solar. Ivysaur suele ser más agresivo que su preevolución y tiene una gran capacidad de adaptación en combate.",
  },
  {
    Nombre: "Venusaur",
    Imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    Descripcion:
      "Venusaur es la evolución final de Bulbasaur y es un Pokémon imponente con una gran flor en su espalda. Esta flor absorbe la luz del sol y le otorga energía para realizar ataques devastadores como Rayo Solar. Además, es capaz de liberar esporas que pueden paralizar o dormir a sus rivales, haciéndolo un oponente formidable en batalla.",
  },
  {
    Nombre: "Charmander",
    Imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    Descripcion:
      "Charmander es un Pokémon tipo Fuego con una llama en la punta de su cola, la cual indica su estado de salud y emociones. Es un Pokémon enérgico y amistoso, pero si es desafiado en combate, mostrará su verdadera fuerza con ataques como Ascuas y Lanzallamas. Es una elección popular entre entrenadores que buscan un Pokémon ágil y ofensivo.",
  },
  {
    Nombre: "Charmeleon",
    Imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    Descripcion:
      "Charmeleon es la evolución de Charmander y ha desarrollado una personalidad más feroz. Su cuerpo es más fuerte, y su llama arde con mayor intensidad cuando está enojado. Puede lanzar potentes llamaradas y es un combatiente agresivo en la batalla, destacando por su rapidez y ataques de fuego intensos.",
  },
  {
    Nombre: "Charizard",
    Imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    Descripcion:
      "Charizard es la evolución final de Charmander y es un Pokémon tipo Fuego/Volador. Posee grandes alas que le permiten volar a altas velocidades y lanzar potentes llamas desde su boca. Su aliento es lo suficientemente caliente como para derretir rocas y su furia en combate es legendaria. Charizard es uno de los Pokémon más icónicos y poderosos de la franquicia.",
  },
  {
    Nombre: "Squirtle",
    Imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    Descripcion:
      "Squirtle es un Pokémon tipo Agua con una resistente concha en su espalda que lo protege de los ataques enemigos. Es un nadador ágil y puede lanzar potentes chorros de agua con su ataque Pistola Agua. Su personalidad juguetona y leal lo convierten en una excelente opción para entrenadores que buscan un compañero confiable.",
  },
  {
    Nombre: "Wartortle",
    Imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
    Descripcion:
      "Wartortle es la evolución de Squirtle y ha desarrollado orejas y una cola peluda que le ayudan a nadar más rápido. Su caparazón es más duro y resistente, y en combate usa su cola como un indicador de su fuerza. Es un Pokémon que demuestra gran determinación y es capaz de enfrentar oponentes más fuertes con técnicas avanzadas de agua.",
  },
  {
    Nombre: "Blastoise",
    Imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
    Descripcion:
      "Blastoise es la evolución final de Squirtle y se distingue por los poderosos cañones de agua en su caparazón. Puede disparar agua a alta presión con una fuerza devastadora, capaz de perforar acero. Es un Pokémon muy resistente y su estrategia en combate se basa en la combinación de su gran defensa y ataques de agua a larga distancia.",
  },
];

//Llamar funcion

Mostrar_Pokemon_Posicion0();
Mostrar_Pokemon_Posicion1();
Mostrar_Pokemon_Posicion2();
Mostrar_Pokemon_Posicion3();
Mostrar_Pokemon_Posicion4();
Mostrar_Pokemon_Posicion5();
Mostrar_Pokemon_Posicion6();
Mostrar_Pokemon_Posicion7();
Mostrar_Pokemon_Posicion8();

//Ejemplo Funcion

// function Mostrar_Pokemon_Posicion0() {
//   document.getElementById("Aqui el ID de posicion 0").innerHTML = `
//       <div>
//           <div class="card">
//               <img class="card-img-top img-fluid" src="Aqui la Imagen de posicion 0" alt="Imagen de posicion 0">
//               <div class="card-body">
//                   <h4 class="card-title">Aqui el nombre de posicion 0</h4>
//                   <p class="card-text">Aqui el nombre de posicion 0</p>
//                   <button class="btn btn-primary" onclick="">Ver Detalles</button>
//               </div>
//           </div>
//       </div>
//   `;
// }


document.getElementById("Id_Navbar").innerHTML = 
`
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <a class="navbar-brand" href="/Tarea.html">POKIDex</a>
      <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link " href="#" onclick="DarkMode('black','black')">Modo Oscuro <span
                class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" onclick="LightMode('white','black')">Modo Claro </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">Mas</a>
            <div class="dropdown-menu" aria-labelledby="dropdownId">
              <a class="dropdown-item" href="#">Proximamente...</a>
              <a class="dropdown-item" href="#">Proximamente...</a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
`

//----- Inicio - Funciones Mostrar_Pokemon_Posicion-----//

function Mostrar_Pokemon_Posicion0() {
  document.getElementById("IdPokemon0").innerHTML = ` 
      <div>
        <div class="card text-center">
            <img class="card-img-top img-fluid" src="${ListaPokemon[0].Imagen}" alt="Imagen de posicion 0">
            <div class="card-body">
                <h4 class="card-title">${ListaPokemon[0].Nombre}</h4>
                <p class="card-text">${ListaPokemon[0].Descripcion}</p>
                <button class="btn btn-primary" onclick="RedirigirPokemon0()">Ver Detalles</button>
            </div>
        </div>
      </div>
  `;
}

function Mostrar_Pokemon_Posicion1() {
  document.getElementById("IdPokemon1").innerHTML = `
  <div>
      <div class="card text-center">
          <img class="card-img-top img-fluid" src="${ListaPokemon[1].Imagen}" alt="Imagen de posicion 0">
          <div class="card-body">
              <h4 class="card-title">${ListaPokemon[1].Nombre}</h4>
              <p class="card-text">${ListaPokemon[1].Descripcion}</p>
              <button class="btn btn-primary" onclick="RedirigirPokemon1()">Ver Detalles</button>
          </div>
      </div>
  </div>
  `;
}

function Mostrar_Pokemon_Posicion2() {
  document.getElementById("IdPokemon2").innerHTML = `
  <div>
      <div class="card text-center">
          <img class="card-img-top img-fluid" src="${ListaPokemon[2].Imagen}" alt="Imagen de posicion 0">
          <div class="card-body">
              <h4 class="card-title">${ListaPokemon[2].Nombre}</h4>
              <p class="card-text">${ListaPokemon[2].Descripcion}</p>
              <button class="btn btn-primary" onclick="RedirigirPokemon2()">Ver Detalles</button>
          </div>
      </div>
  </div>
  `;
}

function Mostrar_Pokemon_Posicion3() {
  document.getElementById("IdPokemon3").innerHTML = `
  <div>
      <div class="card text-center">
          <img class="card-img-top img-fluid" src="${ListaPokemon[3].Imagen}" alt="Imagen de posicion 0">
          <div class="card-body">
              <h4 class="card-title">${ListaPokemon[3].Nombre}</h4>
              <p class="card-text">${ListaPokemon[3].Descripcion}</p>
              <button class="btn btn-primary" onclick="RedirigirPokemon3()">Ver Detalles</button>
          </div>
      </div>
  </div>
  `;
}

function Mostrar_Pokemon_Posicion4() {
  document.getElementById("IdPokemon4").innerHTML = `
  <div>
      <div class="card text-center">
          <img class="card-img-top img-fluid" src="${ListaPokemon[4].Imagen}" alt="Imagen de posicion 0">
          <div class="card-body">
              <h4 class="card-title">${ListaPokemon[4].Nombre}</h4>
              <p class="card-text">${ListaPokemon[4].Descripcion}</p>
              <button class="btn btn-primary" onclick="RedirigirPokemon4()">Ver Detalles</button>
          </div>
      </div>
  </div>
  `;
}

function Mostrar_Pokemon_Posicion5() {
  document.getElementById("IdPokemon5").innerHTML = `
  <div>
      <div class="card text-center">
          <img class="card-img-top img-fluid" src="${ListaPokemon[5].Imagen}" alt="Imagen de posicion 0">
          <div class="card-body">
              <h4 class="card-title">${ListaPokemon[5].Nombre}</h4>
              <p class="card-text">${ListaPokemon[5].Descripcion}</p>
              <button class="btn btn-primary" onclick="RedirigirPokemon5()">Ver Detalles</button>
          </div>
      </div>
  </div>
  `;
}

function Mostrar_Pokemon_Posicion6() {
  document.getElementById("IdPokemon6").innerHTML = `
  <div>
      <div class="card text-center">
          <img class="card-img-top img-fluid" src="${ListaPokemon[6].Imagen}" alt="Imagen de posicion 0">
          <div class="card-body mb-4">
              <h4 class="card-title">${ListaPokemon[6].Nombre}</h4>
              <p class="card-text">${ListaPokemon[6].Descripcion}</p>
              <button class="btn btn-primary" onclick="RedirigirPokemon6()">Ver Detalles</button>
          </div>
      </div>
  </div>
  `;
}

function Mostrar_Pokemon_Posicion7() {
  document.getElementById("IdPokemon7").innerHTML = `
  <div>
      <div class="card text-center">
          <img class="card-img-top img-fluid" src="${ListaPokemon[7].Imagen}" alt="Imagen de posicion 0">
          <div class="card-body mb-4">
              <h4 class="card-title">${ListaPokemon[7].Nombre}</h4>
              <p class="card-text">${ListaPokemon[7].Descripcion}</p>
              <button class="btn btn-primary" onclick="RedirigirPokemon7()">Ver Detalles</button>
          </div>
      </div>
  </div>
  `;
}

function Mostrar_Pokemon_Posicion8() {
  document.getElementById("IdPokemon8").innerHTML = `
  <div>
      <div class="card text-center">
          <img class="card-img-top img-fluid" src="${ListaPokemon[8].Imagen}" alt="Imagen de posicion 0">
          <div class="card-body mb-4">
              <h4 class="card-title">${ListaPokemon[8].Nombre}</h4>
              <p class="card-text">${ListaPokemon[8].Descripcion}</p>
              <button class="btn btn-primary" onclick="RedirigirPokemon8()">Ver Detalles</button>
          </div>
      </div>
  </div>
  `;
}

function RedirigirPokemon0() {
  window.open("https://www.pokemon.com/el/pokedex/bulbasaur", "_blank");
}

function RedirigirPokemon1() {
  window.open("https://www.pokemon.com/el/pokedex/ivysaur", "_blank");
}

function RedirigirPokemon2() {
  window.open("https://www.pokemon.com/el/pokedex/venusaur", "_blank");
}

function RedirigirPokemon3() {
  window.open("https://www.pokemon.com/el/pokedex/charmander", "_blank");
}

function RedirigirPokemon4() {
  window.open("https://www.pokemon.com/el/pokedex/charmeleon", "_blank");
}

function RedirigirPokemon5() {
  window.open("https://www.pokemon.com/el/pokedex/charizard", "_blank");
}

function RedirigirPokemon6() {
  window.open("https://www.pokemon.com/el/pokedex/squirtle", "_blank");
}

function RedirigirPokemon7() {
  window.open("https://www.pokemon.com/el/pokedex/wartortle", "_blank");
}

function RedirigirPokemon8() {
  window.open("https://www.pokemon.com/el/pokedex/blastoise", "_blank");
}

//Funcion de Modo Oscuro
function DarkMode(background, text) {
  document.body.style.backgroundColor = background;
  document.body.style.color = text;
}
//Funcion de Modo Claro
function LightMode(background, text) {
  document.body.style.backgroundColor = background;
  document.body.style.color = text;
}
//----- Fin - Funciones Mostrar_Pokemon_Posicion-----//
