var registrar = () =>{
    let econtenedorTabla= document.getElementById("contenedorTabla")
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    let nombre = eNombre.value;
    let apellido = eApellido.value;
    console.log(nombre)
    console.log(apellido)
    let persona = {"nombre":nombre,"apellido":apellido}
    let listadoPersonas = localStorage.getItem('personas');
    let listadoAntiguo = JSON.parse(listadoPersonas);
    if(listadoAntiguo==null){
        listadoNuevo = [persona]
    }else{
        //listadoAntiguo.push(persona)
        listadoNuevo = [...listadoAntiguo,persona]
    }
    console.log(persona)
    console.log(listadoAntiguo)
    console.log(listadoNuevo)
    localStorage.setItem('personas',JSON.stringify(listadoNuevo));
    //econtenedorTabla.innerHTML=""+listadoNuevo.length;
    render ="<table>"
    render+="<tr><th>nombre</th><th>apellido</th><th>accion</tr>"

    for (let i = 0; i < listadoNuevo.length; i++) {
        const element = listadoNuevo[i];
        render+="<tr>"
        render+="<td>"+element.nombre+"</td>"
        render+="<td>"+element.apellido+"</td>"
        render+="<td>"
        render+="<button id='btneditar"+i+"'>editar</button>"
        render+="<button id='btneliminar"+i+"'>eliminar</button>"
        render+="</td>"
        render+="</tr>"
        
    }
    render+="</table>"
    econtenedorTabla.innerHTML = render;
    for (let i = 0; i < listadoNuevo.length; i++) {
        var eBTN = document.getElementById("btneditar"+i);
        let element= listadoNuevo[i]
        eBTN.addEventListener("click",()=>{alert("hola"+element.nombre+""+element.apellido)})
    }
    }


document.getElementById("btn").addEventListener("click",registrar)

//prox clase guardar todo en el localStorage
//cada vez que se presiona el registrar se agregue la lista, y si ya esta registrado que se siga agregando.  Para eliminar lograr mostrar todo lo que esta en la tabla, generar una tabla  y mostrar todo lo q esta guardado