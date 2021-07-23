const lenguajes = ["Node", "React", "Java", "Python", "Ruby on Rails"];

function nuevoLenguaje(lenguaje, callback) {
  setTimeout(() => {
    lenguajes.push(lenguaje);

    callback();
  }, 2000);
}

function mostrarLenguajes() {
  lenguajes.forEach((lenguaje) => console.log(lenguaje));
}

nuevoLenguaje("Angular", mostrarLenguajes);
