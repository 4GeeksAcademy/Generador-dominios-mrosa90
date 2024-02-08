/* eslint-disable */
import "./style.css";

window.onload = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  function generarNombreDominio() {
    let pronounAleatorio = pronoun[Math.floor(Math.random() * pronoun.length)];
    let adjAleatorio = adj[Math.floor(Math.random() * adj.length)];
    let nounAleatorio = noun[Math.floor(Math.random() * noun.length)];

    return `${pronounAleatorio}${adjAleatorio}${nounAleatorio}.com`;
  }

  function mostrarNombresDominio() {
    let resultados = [];
    for (let i = 0; i < 9; i++) {
      resultados.push(generarNombreDominio());
    }
    return resultados;
  }

  document.getElementById(
    "resultado"
  ).innerHTML = `<br>${mostrarNombresDominio().join("<br>")}`;
};
