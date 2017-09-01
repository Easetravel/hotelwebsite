(function () {
    angular
        .module("Checkin")
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/templates/checkin.view.client.html"
                // controller: "homeController",
                // controllerAs: "model"
            })
            .when("/checkin", {
                templateUrl: "views/templates/checkin.view.client.html"
                // controller: "homeController",
                // controllerAs: "model"
            })
            .when("/admin", {
                templateUrl: "views/templates/admin.view.client.html",
                controller: "adminController",
                controllerAs: "model"
            })
            .when("/admin/:resvno", {
                templateUrl: "views/templates/admin-edit.view.client.html",
                controller: "adminEditController",
                controllerAs: "model"
            })

    }

})();
