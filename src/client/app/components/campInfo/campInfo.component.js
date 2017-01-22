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

        vm.$onInit = function () {
            vm.info = getCampingInfo();
            vm.time = Rx.Observable.interval(1000).take(50);
            console.log(vm.info);
        }

      

        function getCampingInfo() {
            return campListFactory.getCampList()
                    .then(function (data) {
                        vm.campingInfo = data;
                        console.log('vm.campingInfo',vm.campingInfo);
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

