function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a img
  if (html.classList.contains(`light`)) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/caio.png")
  } else {
    // se tiver sem light mode, manter a minha foto
    img.setAttribute("src", "./assets/hiago.png")
  }
}
