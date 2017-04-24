app.controller('AddAnimalCtrl', function($scope, AnimalFact, ZookeeperFact){


  const popPage = () => {
    AnimalFact.getAll()
    .then((animals) => {
      $scope.animals = animals.animals
      $scope.$apply()
    })

    ZookeeperFact.getAll()
    .then((zookeepers) => {
      $scope.zookeepers = zookeepers.zookeepers;
      $scope.$apply()
    })
  }

  popPage()

  resetCheckboxes = (arrayOfCheckboxes) => {
    for (var i = 0; i < arrayOfCheckboxes.length; i++) {
      arrayOfCheckboxes[i].checked = false
    }
  }

  $scope.addAnimal = () => {
    let selectedzookeepers = [];
    for (var i = 0; i < $scope.zookeepers.length; i++) {
      if($scope.zookeepers[i].checked){
        selectedzookeepers.push($scope.zookeepers[i])
      }
    }
    console.log("checked zookeepers", selectedzookeepers)
    $scope.newAnimal.zookeepers = selectedzookeepers;
    AnimalFact.add($scope.newAnimal)
    .then((data) => {})
    $scope.newAnimal = {}
    resetCheckboxes($scope.zookeepers)
  }

  $scope.addZookeeper = () => {
    ZookeeperFact.add($scope.newZookeeper)
    .then(() => { 
      $scope.zookeepers.push($scope.newZookeeper)
      $scope.newZookeeper = {}
      $scope.$apply()
    })
  }

  $scope.deleteZookeeper = (id) => {
    ZookeeperFact.delete(id)
    .then(() => {
      popPage()
    })
  }
})