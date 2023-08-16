document.addEventListener("DOMContentLoaded", function() {
    const weaponInput = document.getElementById("weaponInput");
    const acceptButton = document.getElementById("acceptButton");
  
    
    acceptButton.addEventListener("click", function() {
      const inputValue = weaponInput.value;
      const weaponMatch = weapon.find(weapon => weapon.name === inputValue);
  
      if (weaponMatch) {
        console.log("Arma ingresada:", weaponMatch.name);
  
        // Cerrar el formulario
        document.querySelector(".inptArma").style.display = "none";
  
  
      } else {
        console.log("Tuviste un error de tipeo o ingresaste mal el nombre del arma. Por favor vuelva a ingresarlo.");
      }
    });

  });