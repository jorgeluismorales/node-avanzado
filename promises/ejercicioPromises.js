const contratarJugador = new Promise((resolve, reject) => {
  const contratado = true;

  if (contratado) {
    resolve("El jugador se incorpora al equipo");
  } else {
    reject("El jugador y el equipo no llegaron a un acuerdo");
  }
});

contratarJugador
  .then((mensaje) => showMessage(mensaje))
  .catch((error) => showMessage(error));

function showMessage(message) {
  console.log(`Mensaje: ${message}`);
}
