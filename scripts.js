var boton = document.getElementById("botoncito")
var texto = document.getElementById("text")

boton.addEventListener("click", CambiarTexto)

function CambiarTexto ()
{
  if(boton.classList.contains("Bienvenido")=== true)
    {
      boton.classList.remove("Bienvenido")
      boton.classList.add("Despedida")
       texto.innerText = "Aprendamos juntos y desarrollemos algo nuevo"
    }
  else if(boton.classList.contains("Despedida") === true){
    boton.classList.remove("Despedida")
    boton.classList.add("Bienvenido")
    texto.innerText = "Gracias por unirte a esta aventura de programacion"
  }
  
}
