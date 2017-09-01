(function () {
    angular
        .module("Edena")
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/home.view.client.html",
                // controller: "homeController",
                // controllerAs: "model"
            })
            .when("/admin", {
                templateUrl: "views/admin.view.client.html",
                controller: "adminController",
                controllerAs: "model"
            })


    }

})();
