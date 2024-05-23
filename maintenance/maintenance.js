//función que muestra el menu responsive{
    function responsiveMenu(){
        let x = document.getElementById("nav");
        if(x.className===""){
            x.className = "responsive";
    
            //creamos el elemento que cierra el menu
            let span = document.createElement("span");
            span.innerHTML = "X";
            document.getElementById("nav").appendChild(span);
    
            //quitamos el boton eliminar cuando se hace click sobre este
            span.onclick = function(){
                x.className = "";
                span.remove();
            }
        }else{
            x.className="";
        }
    }
    //Este codigo es para agregar una función a cada links del menu
    //responsive
    //cuando se presione en cualquier de los links del menu debe desaparecer el menu
    const links = document.querySelectorAll("#nav a");
    for(i=0; i < links.length;i++){
        links[i].onclick = function(){
            var x = document.getElementById("nav");
            x.className = "";
    
            //removemos el boton eliminar
            btnEliminar = document.querySelector("#nav span");
            btnEliminar.remove();
        }
    }

    // send form

    const btn = document.getElementById('button');

     let formulario = document.getElementById('form');
     formulario.addEventListener('submit', function(event) {
       event.preventDefault();
       
    //

    
       btn.value = 'Enviando mensaje...';
    
       const serviceID = 'default_service';
       const templateID = 'template_kdxxbxr';
    
       emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = 'Enviar';
          alert('Mensaje enviado');
          formulario.reset()
        }, (err) => {
          btn.value = 'Enviar';
          alert(JSON.stringify(err));
        });
    });