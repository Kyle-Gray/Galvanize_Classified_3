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
  vm.onEditButton = onEditButton;
  vm.getClassifieds = getClassifieds;


  function onInit(){
    vm.classifieds = [];
    vm.getClassifieds();
  }

  function getClassifieds(){
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
      vm.getClassifieds();
    })
    .catch((err) =>{
      console.log(err);
    });
  }

  function updatePost(input){
    $http.patch(`classifieds/${input.id}`, input).then((results) => {
      vm.getClassifieds();
    })
    .catch((err) =>{
      console.log(err);
    });
  }

  function onEditButton(classified){
    classified.showEditForm = !classified.showEditForm;
    vm.updateclassifieds = {
      id: classified.id,
      title: classified.title,
      price: classified.price,
      image: classified.item_image,
      description: classified.description,
    };
  }

  function deletePost(classifiedID){
    $http.delete(`classifieds/${classifiedID}`)
      .then((results) => {
        vm.getClassifieds();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

})();
