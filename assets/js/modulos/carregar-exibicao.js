import { produtosExibicaoHome } from "./conteudos-produtos.js";
import { criarCardProdutosExibicaoHome, criarSecaoProdutosHome } from './criar-elementos-exibicao.js'

const carregarProdutosHome = () => {

  const carregar = (categoria, nome) => {
    const produtosCategoria = Array();
    categoria.forEach(produto => {
      produtosCategoria.push(criarCardProdutosExibicaoHome(produto));
    })
    criarSecaoProdutosHome(nome, produtosCategoria)
  }

  carregar(produtosExibicaoHome.starWars, 'Star Wars');
  carregar(produtosExibicaoHome.consoles, 'Consoles');
  carregar(produtosExibicaoHome.diversos, 'Star Wars');
  
}

export{
  carregarProdutosHome
}