const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
    //Eliminar todas las clases de show y border
    removeBorder();
    removeShow();
    // Añadir borde al elemento de la pestaña actual
    this.classList.add('tab-border');
    // Agarra el elemento de contenido de DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Añadir clase de presentación
    tabContentItem.classList.add('show');
}

// Eliminar los bordes inferiores de todos los elementos de la pestaña
function removeBorder() {
    tabItems.forEach(item => {
        item.classList.remove('tab-border');
    });
}

// Eliminar la clase de presentación de todos los elementos de contenido
function removeShow() {
    tabContentItems.forEach(item => {
        item.classList.remove('show');
    });
}

// Escuche para hacer clic en el elemento de la pestaña
tabItems.forEach(item => {
    item.addEventListener('click', selectItem);
});