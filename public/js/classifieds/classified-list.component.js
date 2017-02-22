(function(){
'use strict';

angular.module('app')
.component('classifieds', {
  templateUrl: '/js/classifieds/classified-list.template.html',
  controller: controller
});

controller.$inject = ['$http'];
function controller($http){
  const vm = this;
  vm.$onInit = onInit;
  vm.newPost = newPost;
  vm.updatePost = updatePost;
  vm.deletePost = deletePost;


  function onInit(){
    $http.get('/classifieds')
    .then((results)=>{
      vm.classifieds = results.data;
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function newPost(input){
    console.log(input);
    $http.post('classifieds', input).then((results) => {
    })
    .catch((err) =>{
      console.log(err);
    });
  }

  function updatePost(input){
    $http.patch(`classifieds/${input.id}`, input).then((results) => {
    })
    .catch((err) =>{
      console.log(err);
    });
  }

  function deletePost(input){
    $http.delete(`classifieds/${input.id}`)
      .then((results) => {
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

})();
