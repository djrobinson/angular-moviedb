angular.module('movieRouter',['ngRoute']).config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/:search',{
    templateUrl:'/views/movies/index.html',
    controller: 'moviesController',
    controllerAs: 'movies'
  })
}])
