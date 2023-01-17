const criarCardProdutosExibicaoHome = (dados) => {

  const itemLista = document.createElement('li');
  itemLista.classList.add('lista__item');

  const figure = document.createElement('figure');
  figure.classList.add('lista__item__figura');

  const img = document.createElement('img');
  img.classList.add('lista__item__figura__imagem');
  img.setAttribute('alt', dados.nomeProduto);
  img.setAttribute('src', `./assets/img/produtos/${dados.imagem}`);


  const figurecaption = document.createElement('figurecaption');
  figurecaption.classList.add('lista__item__figura__descricao');

  const h5 = document.createElement('h5');
  h5.textContent = dados.nomeProduto;

  const span = document.createElement('span');
  span.textContent = (dados.valor).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

  figurecaption.appendChild(h5);
  figurecaption.appendChild(span);


  const link = document.createElement('a');
  link.href = '#';
  link.classList.add('lista__item__figura__botao');
  link.textContent = 'Ver produto';

  figure.appendChild(img);
  figure.appendChild(figurecaption);
  figure.appendChild(link);

  itemLista.appendChild(figure);

  return itemLista;
}

const criarSecaoProdutosHome = (nomeSecao, cards) => {
  
  const secao = document.createElement('section');
  secao.classList.add('produtos');


  const cabecalhoProdutos = document.createElement('div');
  cabecalhoProdutos.classList.add('produtos__cabecalho');

  const titulo = document.createElement('h3');
  titulo.classList.add('produtos__cabecalho__titulo');
  titulo.textContent = nomeSecao;

  const link = document.createElement('a');
  link.href = './todos-produtos.html';
  link.classList.add('produtos__cabecalho__botao');
  link.innerHTML += `Ver tudo <i class="bi bi-arrow-right"></i>`;
  
  cabecalhoProdutos.appendChild(titulo);
  cabecalhoProdutos.appendChild(link);


  const listaProdutos = document.createElement('div');
  listaProdutos.classList.add('lista__produtos');
  
  const lista = document.createElement('ul');
  lista.classList.add('lista');

  cards.forEach(card => {
    lista.appendChild(card);
  })

  listaProdutos.appendChild(lista);


  secao.appendChild(cabecalhoProdutos);
  secao.appendChild(listaProdutos);

  const main = document.querySelector('.conteudo');
  main.appendChild(secao);
}

export{
  criarCardProdutosExibicaoHome,
  criarSecaoProdutosHome
}