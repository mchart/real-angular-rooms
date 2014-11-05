
angular.module('ngRooms.domain.cancellationPolicy')

.factory('CancellationPolicyService', ['Restangular', function(restangular) {

		var domain = 'cancellationPolicies';

	return {

		list: function(){
			return restangular.all(domain).getList();
		},

		remove: function(id){
			return restangular.one(domain, id).remove();
		},

		add: function(name, description){
			var cp = {
				type: "cancellationPolicy",
				name: name,
				description: description
			}

			return restangular.all(domain + '/new').post(cp);
		},

		edit: function(id, name, description){

			return restangular.one(domain, id).get().then(function(cancellationPolicy) {
				cancellationPolicy.name = name;
				cancellationPolicy.description = description;
				 return cancellationPolicy.put();
			});
		},

		single: function(id){
			return restangular.one(domain, id).get();
		}
	};

}]);