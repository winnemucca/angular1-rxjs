(function() {
	'use strict';
	angular
		.module('campSpot.services.campList',[])
		.factory('campListFactory', campListFactory);

		campListFactory.$inject = ['$http', '$log'];

		function campListFactory($http, $log) {
			var url = './src/client/app/Services/campData.json';

			return {
				getCampList: getCampList
			}

			function getCampList() {

				return $http.get(url, {catch: true})
					.then(getCampListComplete)
					.catch(getCampListFailed);

					function getCampListComplete(response) {
						console.log(response.data);
						return response.data;
					}

					function getCampListFailed(error) {
						console.log('error', error);
					}
			}

		} // end of factory
}());
