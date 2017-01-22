(function() {
	'use strict';

	angular
		.module('campSpot.services.campList',[])
		.factory('campListFactory', campListFactory);

		campListFactory.$inject = ['$http', '$log'];

		function campListFactory($http, $log) {
			return {
				getCampList: getCampList
			}

			function getCampList() {
				var url = './src/client/app/Services/campData.json';
				return $http.get(url)
					.then(getCampListComplete)
					.catch(getCampListFailed);

					function getCampListComplete (response) {
						return response.data;
					}

					function getCampListFailed (error) {
						console.log('error', error);
					}
			}
		}
}());
