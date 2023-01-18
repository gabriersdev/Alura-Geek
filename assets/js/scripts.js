import { converterParaMesBRL, controlarModal } from "./modulos/utilitarios.js";
import { tratarFormulario } from "./modulos/tratamento-formulario.js";

(() => 
{

  window.addEventListener("load", () => {
    const areasAnoAtual = document.querySelectorAll("[data-ano-atual]");
    const areasMesAtual = document.querySelectorAll('[data-mes-atual]');
    const dataAtual = new Date();
    const logos = document.querySelectorAll('.logo');

    areasAnoAtual.forEach(area => {
      area.textContent = `${dataAtual.getFullYear()}`;
    })

    areasMesAtual.forEach(area => {
      area.textContent = `${converterParaMesBRL(dataAtual.getUTCMonth())}`;
    })

    logos.forEach(logo => {
      logo.addEventListener('click', () => {
        window.location.href = './index.html';
      })
    })
  })

  controlarModal();
  tratarFormulario();

})();




