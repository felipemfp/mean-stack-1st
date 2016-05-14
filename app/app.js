angular
  .module('meanStackBootcamp', ['ngRoute']);

angular
  .module('meanStackBootcamp')
    .controller('MainController', MainController)
    .controller('AutoresController', AutoresController);

angular
  .module('meanStackBootcamp').directive('navbar', navbarDirective);

function navbarDirective() {
  return {
    restrict: 'E',
    replace: true,
    template:
    `<ul class="menu">
      <li><a href="#/">Início</a></li>
      <li><a href="#/autores">Autores</a></li>
    </ul>`
  }
}


function MainController() {
  var vm = this;
  vm.titulo = 'Tá codando';
  vm.texto = 'Escreve algo, pô';
}

function AutoresController() {
  var vm = this;
  vm.titulo = 'Autores';
  vm.autores = [
    {
      nome: 'Rick Riordan', visivel: false
    },
    {
      nome: 'Stephen King', visivel: true
    },
    {
      nome: 'Harlan Coben', visivel: true
    },
    {
      nome: 'James Patterson', visivel: true
    }
  ];
  vm.adicionarAutor = adicionarAutor;

  function adicionarAutor(novoAutor, visivel) {
    if (novoAutor) {
      vm.autores.push({nome: novoAutor, visivel: true});
      vm.novoAutor = '';
    }
  }
}
