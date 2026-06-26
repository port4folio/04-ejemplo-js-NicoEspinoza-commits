let tareas = ["tarea 1", "tarea 2", "tarea 3", "tarea 4"]; //arreglo de tareas iniciales

let listarTareas =documente.getElementById("listarTareas"); //captura el donde se listan
listarTareas(tareas); //llamada a la funcion listarTareas, que muestra las tareas en el html
console.log(listaTareas); 
//funcion que agrega tareas
function listarTarea() {
    //recibe un arreglo de tareas, las muestra en el ul
    listaTareas.innerHTML = ""; //limpia el ul
    t.forEach(
        tarea => {
            //reccorre el arreglo de tareas
            li = document.createElement("li"); //crea un elemento li<li></li>
            li.textContent = tarea; //le asigna el texto de la tarea<li>tarea 1</li>
            listarTareas.appendChild(li); //agrega el li al ul
            li.className = "list-group-item"; //le asigna una clase
        }
    ); //fin del forEach
}//fin de la funcion listarTareas

let btnAgregar = document.getElementById("btnAgregar"); //captura el boton agregar
btnAgregar.addEventListener("click", agregarTarea); //agrega un evento al boton agregar que llama a la funcion agregarTarea
//funcion que agrega tareas
function agregarTarea() {
    //funcion que agrega tareas
    let tarea = document.getElementById("tarea").value; //captura el valor del input
    tareas.push(tarea); //agrega la tarea al arreglo de tareas
    listarTareas(tareas); //llama a la funcion listarTareas para mostrar las tareas en el ul
 } 

let btnBuscar = document.getElementById("btnBuscar"); //captura el boton buscar
btnBuscar.addEventListener("click", buscaTareas);  //agrega un evento al boton buscar
//funcion buscaTareas
function buscaTareas() {
    //funcion que busca tareas
    let tareaBuscada = document.getElementById("tarea").value; //captura el valor del input
    if (tareaBuscada === "") { 
        //si el input esta vacio
        listarTares(tareas); //llama a la funcion listarTareas para mostrar todas las tareas
    } else {
        //si el imput no esta vacio
        tareasEncontradas = tareas.filter((tarea) => tarea == tareaBuscada); //filtra las tareas que contienen el valor del input
        //la tarea buscada
        if (tareasEncontradas.length > 0) { 
            //si se encontraron tareas
            listarTares(tareasEncontradas); //llama a la funcion listarTareas para mostrar las tareas encontradas
        } else {
            //si no se encontraron tareas
            swal.fire({
                //muestra un mensaje de error
                icon: "error", //tipo de mensaje
                title: "Oops...", //titulo del mensaje
                text: "No se encontraron tareas", //texto del mensaje
                footer: "", //pie del mensaje

            });
        }
    }
}

let modalEditar = new bootstrap.Modal(document.getElementById("modalEditar")); //crea un modal de bootstrap a partir del id modalEditar
let btnEditar = document.getElementById("btnEditar"); //captura el boton editar
btnEditar.addEventListener("click", buscarTareaEditar); //agrega un evento click al boton editar que llama a la funcion buscarTareaEditar
let i = 0; //variable que guardara la posicion de la tarea a editar
function buscarTareaEditar() {
    //funcion que busca la tarea a editar
    let tarea_buscada = document.getElementById("tarea"); //captura el valor del input tarea
    i = tarea.findIndex((tarea) => tarea === tarea_buscada); //busca la tarea en el arreglo de tareas
    if (i !== -1) { 
        //si no se encontro la tarea
        swal.fire({
            //muestra un mensaje de error
            icon: "error", //tipo de mensaje
            title: "Oops...", //titulo del mensaje
            text: "No se encontro la tarea para editar, ingrese una existente", //texto del mensaje
            footer: "", //pie del mensaje
        });
    } else {
        //si se encontro la tarea
        let tituloModal = document.getElementById("modalEditarLabel"); //captura el titulo del modal
        tituloModal.textContent = "editando " + tareas[i]; //le asigna el texto del titulo
        modalEditar.show(); //muestra el modal   
    }
}
let btnGuardar = document.getElementById("btnGuardar"); //captura el boton guardar del modal
btnGuardar.addEventListener("click", guardarTarea); //agrega un evento click al boton guardar que llama a la funcion guardarTarea
function guardarTarea() {
    //funcion que guarda la tarea editada
    let tarea_editada = document.getElementById("tarea_nueva").value; //captura el valor del input tarea_nueva
    modalEditar.Modal.hide(); //oculta el modal
    tareas[i] = tarea_editada; //asigna la tarea nueva en la posicion i 
    listarTareas(tareas); //llama a la funcion listarTareas para mostrar las tareas en el ul
}







let modalEliminar = new bootstrap.Modal(document.getElementById("modalEliminar")); //crea un modal de bootstrap a partir del id modalEliminar
    //crea un modal de bootstrap a partir del id modalEliminar del html
let btnEliminar = document.getElementById("btnEliminar");
btnEliminar.addEventListener("click", eliminarTarea);
function eliminarTarea() {
    //funcion que busca la tarea para eliminar
    let tarea_buscada = document.getElementById("tarea").value; //captura el valor del input tarea
    i = tareas.findIndex((tarea) => tarea === tarea_buscada); //busca la tarea en el arreglo de tareas
    if (i === -1) {
        //si no se encontro la tarea
        swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No se encontro la tarea para eliminar, ingrese una existente",
            footer: "",
        });
    } else {
        //si se encontro la tarea
        let tituloModal = document.getElementById("modalEliminarLabel"); //captura el titulo del modal
        tituloModal.textContent = "eliminando " + tareas[i]; //le asigna el texto del titulo
        modalEliminar.show(); //muestra el modal   
    }
}