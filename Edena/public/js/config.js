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
            .when("/collection1", {
                templateUrl: "views/collection1.view.client.html",
                // controller: "homeController",
                // controllerAs: "model"
            })
            .when("/collection2", {
                templateUrl: "views/collection2.view.client.html",
                // controller: "homeController",
                // controllerAs: "model"
            })
            .when("/collection3", {
                templateUrl: "views/collection3.view.client.html",
                // controller: "homeController",
                // controllerAs: "model"
            })
            .when("/urban", {
                templateUrl: "views/urban.view.client.html",
                // controller: "homeController",
                // controllerAs: "model"
            })
            .when("/park", {
                templateUrl: "views/park.view.client.html",
                // controller: "homeController",
                // controllerAs: "model"
            })
            .when("/terms", {
                templateUrl: "views/terms.view.client.html",
                // controller: "homeController",
                // controllerAs: "model"
            })
            .when("/profile", {
                templateUrl: "views/profile.view.client.html",
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
