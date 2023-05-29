let tareas = [];

document.getElementById('formulario-tarea').addEventListener('submit', function(e) {
    e.preventDefault(); // previene la acción por defecto del formulario
    let entradaTarea = document.getElementById('entrada-tarea');
    let textoTarea = entradaTarea.value;
    entradaTarea.value = '';
    if (textoTarea !== '') {
        tareas.push({ texto: textoTarea, hecho: false });
        mostrarTareas();
    }
});

document.getElementById('boton-eliminar').addEventListener('click', function() {
    tareas = tareas.filter(function(tarea) {
        return !tarea.hecho;
    });
    mostrarTareas();
});

function mostrarTareas() {
    let listaTareas = document.getElementById('lista-tareas');
    listaTareas.innerHTML = '';
    tareas.forEach(function(tarea, index) {
        let itemTarea = document.createElement('div');
        itemTarea.classList.add('item-tarea');

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox');
        checkbox.checked = tarea.hecho;
        checkbox.addEventListener('change', function() {
            let textoTarea = itemTarea.getElementsByClassName('texto-tarea')[0];
            let checkmark = itemTarea.getElementsByClassName('checkmark')[0];
            checkmark.style.display = checkbox.checked ? 'inline' : 'none';
            checkbox.style.display = checkbox.checked ? 'none' : 'inline';
            textoTarea.classList.toggle('tachado');
            tareas[index].hecho = checkbox.checked;
        });

        let checkmark = document.createElement('span');
        checkmark.classList.add('checkmark');
        checkmark.textContent = '✔';

        let textoTarea = document.createElement('span');
        textoTarea.classList.add('texto-tarea');
        textoTarea.textContent = tarea.texto;
        if (tarea.hecho) {
            textoTarea.classList.add('tachado');
            checkmark.style.display = 'inline';
            checkbox.style.display = 'none';
        }

        itemTarea.appendChild(checkbox);
        itemTarea.appendChild(checkmark);
        itemTarea.appendChild(textoTarea);
        listaTareas.appendChild(itemTarea);
    });
}