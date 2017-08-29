(function () {
    angular
        .module("Checkin")
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/checkin.view.client.html",
                // controller: "homeController",
                // controllerAs: "model"
            })
            .when("/checkin", {
                templateUrl: "views/checkin.view.client.html",
                // controller: "homeController",
                // controllerAs: "model"
            })

    }

})();
