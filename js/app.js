angular.module('angularMovieDB',['movieRouter']).controller('moviesController',['$http','$routeParams',function($http,$routeParams){
  var vm = this;

  vm.movieAdditionals = {};

  if ($routeParams.movieId) {

    $http.get('http://omdbapi.com/?i=' + $routeParams.movieId)
    .then(function(response) {

      vm.movie = response.data;
      for(var key in response.data){
        if ( includedDetail(key) ) {
          vm.movieAdditionals[key] = response.data[key];
        }
      }

    })
  } else {

    $http.get('http://www.omdbapi.com/?s=' + $routeParams.search)
    .then(function(response){

      vm.list = response.data.Search;

    })

  }

  function includedDetail(movieDetail) {
    var excludedDetails = ['imdbID','Poster','Type','Response','Plot','Actors']
    for (var i = 0; i < excludedDetails.length; i++) {
      if (movieDetail == excludedDetails[i]) {
        return false;
      }
    }
    return true;
  }

}])
