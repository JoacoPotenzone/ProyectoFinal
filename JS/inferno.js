//Array de armas hecho desde JSON y utilizando promises para invocarlas

let weapon;

function cargarArmasDesdeJSON() {
  fetch("../JSON/armas.json") 
    .then(response => {
      if (!response.ok) {
        throw new Error('No se pudo cargar el archivo JSON de armas.');
      }
      return response.json(); 
    })
    .then(data => {
      console.log('Datos de armas cargados:', data);
      weapon = data;

    })
    .catch(error => {
      console.error('Error al cargar armas:', error);
    });
};


cargarArmasDesdeJSON();
//Creando Array de objetivos.

const target = new Array();
target.push("Terrorist");
target.push("DartBoard");
target.push("Teemo")

//Propiedades de los objetivos. (con For Of para practicar lo que vimos en clase.)

for (const item of target) {
    const terroProp = {
      name: 'Terrorist',
      armor: 100,
      remainArmor: 100,
      quantity: 3
    };
    target[0] = terroProp;
};

for (const item of target) {
    const dartProp = {
      name: 'DartBoard',
      armor: 50,
      remain: 50,
      quantity: 5
    };
    target[1] = dartProp;
};

for (const item of target) {
    const teemoProp = {
      name: 'Teemo',
      armor: 200,
      remainArmor: 200,
      quantity: 1
    };
    target[2] = teemoProp;
};

console.log(target);


//Llamando a los targets.

document.addEventListener("DOMContentLoaded", function() {
  const weaponInput = document.getElementById("weaponInput");
  const acceptButton = document.getElementById("acceptButton");

  
  acceptButton.addEventListener("click", function() {
});
function manejarPropiedadesDelArma(weapon) {
  const nombre = weapon.name;
  const balas = weapon.bullets;
  const daño = weapon.damage;
  const balasRest = weapon.remainBullets;
  const cadenciaDeTiro = weapon.cadence;

  console.log('Nombre del arma:', nombre);
  console.log('Cantidad de balas:', balas);
  console.log('Daño del arma:', daño);
  console.log('Balas restantes: ', balasRest);
  console.log('Cadencia de tiro: ', cadenciaDeTiro);

}

acceptButton.addEventListener("click", function() {
  const inputValue = weaponInput.value;
  const weaponMatch = weapon.weapon.find(weapon => weapon.name === inputValue);

    if (weaponMatch) {
      console.log("Arma ingresada:", weaponMatch.name);
      document.querySelector(".inptArma").style.display = "none";
      manejarPropiedadesDelArma(weaponMatch);
    } else {
      console.log("Tuviste un error de tipeo o ingresaste mal el nombre del arma. Por favor vuelva a ingresarlo.");
    }
  });

  const weaponMatchs = function() {
    let dartBoard = document.querySelectorAll("#target .diana");
    let terrorist = document.querySelectorAll("#target .terrorist");
    let teemo = document.querySelectorAll(".teemo");
    let elementTime = 1000; 
    let elementArray = [...dartBoard, ...terrorist, ...teemo];
    let targetIndex = 0;
    
    let score = 0; //Generando un puntaje por objetivo derribado

    function showDartBoard() {
      if (targetIndex < dartBoard.length) {
        let element = dartBoard[targetIndex];
        element.classList.remove("hidden") // Mostrar el elemento estableciendo la opacidad
        targetIndex++;

        setTimeout(function () {
          showDartBoard(); // Llamar a la función de nuevo después de ocultar
        }, elementTime);
      }
    }

    function checkTargets() {
      if (dartBoard.length === 0) {
        // Mostrar a los terroristas solo cuando las dianas hayan sido derribadas
        let terroristIndex = 0;

        function showNextTerrorist() {
          if (terroristIndex < terrorist.length) {
            let terroristElement = terrorist[terroristIndex];
            terroristElement.classList.remove("hidden")// Mostrar el terrorista
            terroristIndex++;
    
            setTimeout(function () {
              showNextTerrorist(); // Llamar a la función de nuevo después de ocultar
            }, 2000);
          }
        }
        let teemoIndex =0;
        function showTeemo(){
          if(dartBoard.length === 0 && terrorist.length === 0){
            if(teemoIndex < teemo.length){
              let teemoElement = teemo[teemoIndex];
              teemoElement.classList.remove("hidden");
              teemoIndex++;
              setTimeout(() => {
                showTeemo();
              }, 2500);
            }
          }
        }
    
        // Iniciar mostrando los terroristas
        showNextTerrorist();
        showTeemo();

      }
    }

    // Agregar listeners a los elementos para derribarlos y verificar objetivos derribados
    elementArray.forEach(function (elemento) {
      elemento.classList.add("pointer");
      elemento.addEventListener("click", function () {
        derribarElemento(elemento);
        checkAllTargetsDown();
      });
    });

    function derribarElemento(elemento) {
      elemento.classList.add("down");
      setTimeout(function () {
        elemento.style.opacity = "0";

        if (elemento.classList.contains("diana")) {
          dartBoard = Array.from(dartBoard).filter(diana => diana !== elemento);
          score += 100;
        } else if (elemento.classList.contains("terrorist")) {
          terrorist = Array.from(terrorist).filter(terror => terror !== elemento);
          score += 250;
        }else if(elemento.classList.contains("teemo")){
          teemo = Array.from(teemo).filter(teemo => teemo !== elemento);
          score+= 500 
        }
        
        localStorage.setItem('score', score);
        storedScore = localStorage.getItem("score");

      if(storedScore){
        score = parseInt(storedScore)
        console.log("Se guardo el puntaje en localStorage:", storedScore);
        const puntaje = document.getElementById("puntaje")
        puntaje.innerHTML = `<p style='color: red; font-size: 20px; margin: 2px; '> 
        Puntaje por objetivos derribados: ${score} </p>`;
      }else{
        console.log("no se guardo el puntaje.")
      }
        
        checkTargets(); // Verificar si todas las dianas han sido derribadas después de la animación
      }, 200);
    };
    // Función para reducir el tamaño de un objetivo cuando se hace clic en él
    dartBoard.forEach(function (diana) {
      diana.addEventListener("click", function () {
        diana.classList.add("down");
        setTimeout(function () {
          diana.style.opacity = "0";
          dartBoard = Array.from(dartBoard).filter(target => target !== diana);
          console.log(dartBoard.length)
          checkTargets();
        }, 200);
      });
    });
    weaponMatchs();

    function goToMainMenu() {
      const menu = document.getElementById("menu");
      menu.innerHTML += `
        <div>
          <h2>¡Felicitaciones completaste Inferno!</h2>
          <p>Tienes ${score} puntos. <br> Vuelve al menú principal para seguir sumando puntos.</p>
          <a href="../index.html"><h3>Volver al Menú</h3></a>
        </div>`;
    }

    // Verificar si todas las dianas, terroristas y teemo han sido derribados
    function checkAllTargetsDown() {
      if (dartBoard.length === 0 && terrorist.length === 0 && teemo.length === 0) {
        goToMainMenu();
      }
    }
    
    // Iniciar mostrando las dianas
    showDartBoard();

    // Mostrar a los terroristas al inicio si no hay dianas
    checkTargets();

    checkAllTargetsDown();
  }
});  

