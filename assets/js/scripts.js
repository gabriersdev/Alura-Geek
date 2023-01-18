import { converterParaMesBRL, controlarModal } from "./modulos/utilitarios.js";
import { tratarFormulario } from "./modulos/tratamento-formulario.js";

(() => 
{

  window.addEventListener("load", () => {
    const dataAtual = new Date();

    const areasAnoAtual = document.querySelectorAll("[data-ano-atual]");
    areasAnoAtual.forEach(area => {
      area.textContent = `${dataAtual.getFullYear()}`;
    })

    const areasMesAtual = document.querySelectorAll('[data-mes-atual]');
    areasMesAtual.forEach(area => {
      area.textContent = `${converterParaMesBRL(dataAtual.getUTCMonth())}`;
    })

    const logos = document.querySelectorAll('.logo');
    logos.forEach(logo => {
      logo.addEventListener('click', () => {
        window.location.href = './index.html';
      })
    })

    const overlay = document.querySelector('.overlay-2');
    overlay.style.display = 'none';
  })

  controlarModal();
  tratarFormulario();

})();




