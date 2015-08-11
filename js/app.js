angular.module('angularMovieDB',['movieRouter']).controller('moviesController',['$http','$routeParams',function($http,$routeParams){
  var vm = this;

  vm.list = [];

  $http.get('http://www.omdbapi.com/?s=' + $routeParams.search)
  .then(function(response){
    vm.list = response.data.Search;
  })

}])
