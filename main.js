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