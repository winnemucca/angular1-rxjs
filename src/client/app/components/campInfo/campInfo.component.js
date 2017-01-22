(function () {
    'use strict';

    function fetchCampList($http) {

    }

    function controller(campListFactory, rx) {
        var vm = this;
        // vm.message = "hello from a component controller!";

        // vm.changeMessage = function () {
        //     vm.message = "new message";
        // }

        vm.$onInit = function () {
            vm.campInfo = campListFactory.getCampList().$$state.value;
            console.log('oh please',campListFactory.getCampList().$$state.value)
        }
    }
    angular.module('campSpot.components.campInfo')
           .component("campInfo", {
            templateUrl: "/src/client/app/components/campInfo/campInfo.component.html",
            controllerAs: "vm",
            controller: ['campListFactory',controller]
           })
})();

