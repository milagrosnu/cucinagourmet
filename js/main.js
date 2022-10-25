const bloque = document.querySelectorAll('.bloque')
const h3 = document.querySelectorAll('.h3')


// Cuando CLICK en h3,
// QUITAR la clase activo de TODOS los bloque
// Vamos a añadir la clase activo al BLOQUE con la POSICION del h2

// Recorrer TODOS los h2
h3.forEach((cadaH3, i) => {
    // Asignando un CLICK a cada h3
    h3[i].addEventListener('click', () => {

        // Recorrer TODOS los bloque
        bloque.forEach((cadaBloque, i) => {
            // Quitamos la clase activo de TODOS los bloques
            bloque[i].classList.remove('activo')
        })
        // Añadiendo la clase activo al bloque cuya posición sea igual al del h2
        // (Línea número 12)
        bloque[i].classList.add('activo')

    })
})

/* MENU HAMBURGUESA*/
//  seleccionamos los dos elementos que serán clickables

const toggleButton = document.getElementById("button-menu");
const navWrapper = document.getElementById("nav");

/* 
  cada vez que se haga clic en el botón 
  agrega y quita las clases necesarias 
  para que el menú se muestre.
*/
toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("close");
  navWrapper.classList.toggle("show");
});

/* 
  Cuándo se haga click fuera del contenedor de enlaces 
  el menú debe esconderse.
*/

navWrapper.addEventListener("click", e => {
  if (e.target.id === "nav") {
    navWrapper.classList.remove("show");
    toggleButton.classList.remove("close");
  }
});
