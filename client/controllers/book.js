var myApp=angular.module('myApp');

myApp.controller('BooksController',['$scope','$http','$location','$routeParams',function($scope,$http,$location,$routeParams){
  console.log("controller loaded")
  $scope.getBooks=function(){
    $http.get('/api/books').then(successCallback, errorCallback);
    function successCallback(response){
      //success code
      // refer documentation for response object
        $scope.books=response.data;
      }
      function errorCallback(error){
      //error code
    }
  }

  $scope.getBook=function(){
    var id=$routeParams.id
    $http.get('/api/books/'+id).then(successCallback, errorCallback);
    function successCallback(response){
      //success code
      // refer documentation for response object
      console.log("m in get books");
        $scope.book=response.data;
      }
      function errorCallback(error){
      //error code
    }
  }

  $scope.addBook=function(){
    $http.post('/api/books',$scope.book).then(successCallback, errorCallback);
    function successCallback(response){
      window.location.href="#!/books";
      }
      function errorCallback(error){
      //error code
    }
  }

  $scope.updateBook=function(){
    var id=$routeParams.id;
    $http.put('/api/books/'+id,$scope.book).then(successCallback, errorCallback);
    function successCallback(response){
      window.location.href="#!/books";
      }
      function errorCallback(error){
      //error code
    }
  }

  $scope.removeBook=function(id){
    if(confirm("Are you sure you want to delete?")==true)
    {
      $http.delete('/api/books/'+id).then(successCallback, errorCallback);
      function successCallback(response){
        window.location.href="#!/books";
        }
        function errorCallback(error){
        //error code
      }
    }
    else{
    //  console.log("m in else")
      //var str="#!/books/details/"+""+id
      //console.log(str);
      //window.location.href="#!/books/add";
    //  $location.path('#!/books/add');
    }
  }

}])
