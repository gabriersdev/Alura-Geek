(() => {
  
  function controleSenha(condicao, idInputSenha){
    //Campo de entrada da senha
    let inputSenha = document.querySelector(idInputSenha);  
    //Botão que aciona a função
    let btnControleSenha = document.querySelector('#btn-controle-senha');
    //Icon do olho (biblioteca usada: Bootstrap Icons)
    let iconControleSenha = document.querySelector('#icon-controle-senha');
    
    //Para exibir a senha
    if(condicao == 'mostrar'){ 
      inputSenha.setAttribute('type', 'text');
      let atributosEsconderSenha = "controleSenha('esconder','" + idInputSenha + "')";
      btnControleSenha.setAttribute('onclick', atributosEsconderSenha);
      iconControleSenha.setAttribute('class', 'bi bi-eye-slash-fill');
    }else{
      inputSenha.setAttribute('type', 'password');
      let atributosMostrarSenha = "controleSenha('mostrar','" + idInputSenha + "')";
      btnControleSenha.setAttribute('onclick', atributosMostrarSenha);
      iconControleSenha.setAttribute('class', 'bi bi-eye-fill');
    }
    
    inputSenha.focus();
  }

  const btnSenhas = document.querySelectorAll('[data-formulario-senha]');
  btnSenhas.forEach(botao => {
    botao.addEventListener('click', (evento) => {

    })
  })

})();