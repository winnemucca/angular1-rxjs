(function () {
    'use strict';

    function fetchCampList($http) {

    }

    function controller(campListFactory, rx) {
        var vm = this;
       // vm.time = Rx.Observable.interval(1000).take(50);

        // vm.message = "hello from a component controller!";

        // vm.changeMessage = function () {
        //     vm.message = "new message";
        // }

        vm.data = getCampingInfo().then(function (data) {
                    console.log(data);
                    vm.list = data;
                })
        console.log(vm.data);

        vm.$onInit = function () {
            vm.time = Rx.Observable.interval(1000).take(50);
            getCampingInfo().then(function (data) {
                console.log(data);
                vm.list = data;
            })
        }

      

        function getCampingInfo() {
            return campListFactory.getCampList()
                    .then(function (data) {
                        vm.campingInfo = data;
                        return vm.campingInfo;
                    })
        }
    }
    angular.module('campSpot.components.campInfo')
           .component("campInfo", {
                templateUrl: "/src/client/app/components/campInfo/campInfo.component.html",
                controllerAs: "vm",
                controller: ['campListFactory',controller]
           })
})();

