


//Creando Array de las armas.
const weapon = new Array();
weapon.push("AK-47");
weapon.push("Desert Eagle");
weapon.push("M4");
 

//Agregandole propiedades a las armas.

weapon.forEach((item, index) => {
    weapon[0] = {
        name : 'AK-47',
        bullets : 30,
        remainBullets: 30,
        damage : 50
    };

    weapon[1] = {
        name : 'Desert Eagle',
        bullets : 7,
        remainBullets: 7,
        damage : 300
    };

    weapon[2] = {
        name : 'M4',
        bullets : 30,
        remainBullets : 30,
        damage : 40
    };
});

console.log(weapon)

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

acceptButton.addEventListener("click", function() {
  const inputValue = weaponInput.value;
    const weaponMatch = weapon.find(weapon => weapon.name === inputValue);

    if (weaponMatch) {
      console.log("Arma ingresada:", weaponMatch.name);
      // Cerrar el formulario
      document.querySelector(".inptArma").style.display = "none";

      //Call the weapon matchs function
      weaponMatchs();
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

    elementArray.forEach(function (elemento) {
      elemento.classList.add("pointer"); // Agregar clase para cursor de puntero
      elemento.addEventListener("click", function () {
        derribarElemento(elemento);
        checkTargets(); // Verificar si todas las dianas han sido derribadas
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
          teemo = Array.from(teemo).filter(teeni => teemo !== elemento);
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
      if(elemento === 0){

        //volver al menu principal
        const menu = document.getElementbyId("menu")
        menu.innerHTML =`<div>
        <h3>Volver al Inicio</h3>
        <a href="../index.html">Inicio</a>
        </div>`
      }
    }


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

    // Iniciar mostrando las dianas
    showDartBoard();

    // Mostrar a los terroristas al inicio si no hay dianas
    checkTargets();
  }
});  

