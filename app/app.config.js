angular
  .module('meanStackBootcamp')
  .config(routeConfig);

function routeConfig($routeProvider) {
  $routeProvider
    .when('/', {
      controller: MainController,
      templateUrl: 'main.html',
      controllerAs: 'vm'
    })
    .when('/autores', {
      controller: AutoresController,
      templateUrl: 'autores.html',
      controllerAs: 'vm'
    })
    .otherwise({
      redirectTo: '/'
    });
}
