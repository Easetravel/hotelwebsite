(function() {
    angular
        .module("Checkin")
        .controller("adminEditController", adminEditController)

    function adminEditController($routeParams,$location, reservationService) {
        //declare controller
        var model = this;
        model.resvNo = $routeParams["resvno"];
        //declare function
        //  model.getAllReservations = getAllReservations;
        //  model.createReservation = createReservation;

        //initial function
        function init() {
            getReservationByNo();
        }
        init();

        //functions


        function getReservationByNo(){
            reservationService.getReservationByNo(model.resvNo)
                .then(function (response) {
                   model.resv = response.data;
                    model.formatcheckindate = new Date(model.resv.checkindate);
                    model.formatcheckoutdate = new Date(model.resv.checkoutdate);
                });
        }





    }

})();