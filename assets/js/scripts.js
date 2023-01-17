import { converterParaMesBRL, controlarModal } from "./modulos/utilitarios.js";
import { carregarProdutosHome } from "./modulos/carregar-exibicao.js";

(() => 
{

  window.addEventListener("load", () => {
    const areasAnoAtual = document.querySelectorAll("[data-ano-atual]");
    const areasMesAtual = document.querySelectorAll('[data-mes-atual]');
    const dataAtual = new Date();

    areasAnoAtual.forEach(area => {
      area.textContent = `${dataAtual.getFullYear()}`;
    })

    areasMesAtual.forEach(area => {
      area.textContent = `${converterParaMesBRL(dataAtual.getUTCMonth())}`;
    })
  })

  controlarModal();
  carregarProdutosHome();

})();




