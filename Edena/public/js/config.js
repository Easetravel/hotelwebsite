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
            .when("/contact", {
                templateUrl: "views/contact.view.client.html",
                // controller: "homeController",
                // controllerAs: "model"
            })
            .when("/aboutus", {
            templateUrl: "views/aboutus.view.client.html",
            // controller: "homeController",
            // controllerAs: "model"
        })
            .when("/collections", {
                templateUrl: "views/collections.view.client.html",
                // controller: "homeController",
                // controllerAs: "model"
            })

    }

})();
