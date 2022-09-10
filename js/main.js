function onClick () {
    const mensaje = {
      comercio: document.getElementById('comercio').value,
      titular: document.getElementById('titular').value,
      celular: document.getElementById('celular').value,
      correo: document.getElementById('correo')
    }
    
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(mensaje),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => { 
          console.log(json);
          Swal.fire(
              'Enviado',
              'Gracias por registrarte',
              'success'
          );
          cleanForm();
      })
      .catch((err) => console.log(err));
  
  }
  
  
  function cleanForm() {
      let formulario = document.getElementById('form');    
      formulario.reset();    
  }
  
  let boton = document.getElementById("enviar");
  boton.addEventListener("click", onClick);
  