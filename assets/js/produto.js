import { carregarProdutosPaginaProduto, carregarDadosProdutoPesquisado } from "./modulos/carregar-exibicao.js";
import { produtosExibicaoHome } from "./modulos/conteudos-produtos.js";

(() => {

  const dadosGET = new URLSearchParams(window.location.search);

  let nomeCategoria;
  let idGET;

  if(dadosGET.get('categoria') !== null && dadosGET.get('id') !== null){
    nomeCategoria = dadosGET.get('categoria').toLowerCase();
    idGET = dadosGET.get('id').toLowerCase();

    let categoria = null;

    switch(nomeCategoria){
      case 'star-wars':
        categoria = produtosExibicaoHome.starWars;
        break;
  
      case 'consoles':
        categoria = produtosExibicaoHome.consoles;
        break;
      
      case 'diversos':
        categoria = produtosExibicaoHome.diversos;
        break;
    }

    const dadosProduto = categoria[idGET];
    const ehValido = (dadosProduto !== undefined) && categoria !== null;

    if(ehValido){
      carregarProdutosPaginaProduto(categoria, nomeCategoria);
      carregarDadosProdutoPesquisado(dadosProduto);
    }

    else{
      
    }
    
  }
  
  else{
    
  }



})();