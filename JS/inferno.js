//Alerts para lo que tengo pensado para el proyecto final.

//Seguramente para la 3er preEntrega ya pueda mostrar bien mi idea del proyecto, la idea es que aparezcan objetivos en la
//página y clickeando con el click izquiero del mouse los puedas derribar.

alert("¡Bienvenido al mapa de Inferno de sim-AIM!");
// alert("El objetivo de este juego es hacer la mayor cantidad de puntos posibles");
// alert("Mientras más des en el blanco más puntos vas a obtener");
// alert("Pero ¡OJO! hay objetivos que restan puntos, debes evitar pegarle a: los gatitos, los niños y las tortas. ¿Empezamos?")

alert("En esta beta del juego vas a poder elegir entre 3 armas y 3 objetivos");
alert("la consola te va a devolver con cuanto disparos puedes derribar cada objetivo");



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
      quantity: 5
    };
    target[0] = terroProp;
};

for (const item of target) {
    const dartProp = {
      name: 'DartBoard',
      armor: 50,
      remain: 50,
      quantity: 15
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

// Para que el usuario elija su arma.


let chWeapon = prompt("Elige tu arma entre AK-47, Desert Eagle y M4:");
  
const foundWeapon = weapon.find(arma => arma.name === chWeapon);

//Validación para saber si se escribio correctamente.
    
if (foundWeapon) {
        console.log("-----------------");
        console.log("Elegiste el: ", foundWeapon.name);
    }else{
        console.log("-----------------");
        console.log("Arma no encontrada o mal escrita.");
        alert("Por favor ingrese nuevamente el nombre del arma, tal cual como está escrito.");
    }

//Para que el usuario elija su objetivo

let chTarget = prompt("Elige tu objetivo entre Terrorist, DartBoard y Teemo")

const foundTarget = target.find(objetivo => objetivo.name === chTarget);

if(foundTarget){
    console.log("-----------------");
    console.log("Elegiste a: " + foundTarget.name + " como objetivo");
    console.log("-----------------");
}else{
    console.log("-----------------");
    console.log("Objetivo no encontrado o mal escrito.");
    alert("Por favor ingrese nuevamente el nombre del objetivo, tal cual como está escrito.")
}

while(foundWeapon.bullets > 0 && foundTarget.armor > 0 ){
    const damage = foundWeapon.damage;

    if(foundTarget.armor > 0){
        foundTarget.armor -= damage;
        if(foundTarget.armor <= 0){
            const leftBullets = foundWeapon.remainBullets - foundWeapon.bullets;
            console.log(`¡Derribaste al objetivo ${foundTarget.name} con ${leftBullets} balas!`);
            const currentBullets = foundWeapon.remainBullets - leftBullets;
            console.log(`Balas restantes: ${currentBullets}.`)
        }else{
            
            console.log(`Le diste al objetivo ${foundTarget.name}. Armadura restante: ${foundTarget.armor}`)
        }
        foundWeapon.bullets -=1;
    }
    else{
        console.log(`El objetivo ${foundTarget.name} ya fue derribado.`)
    };
};