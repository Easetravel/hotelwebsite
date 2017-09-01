(function() {
    angular
        .module("Checkin")
        .controller("adminEditController", adminEditController)

    function adminEditController($routeParams,$location, reservationService) {
        //declare controller
        var model = this;
        model.resvNo = $routeParams["resvno"];
        //declare function
        model.updateReservation = updateReservation;
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
                    model.resvId = model.resv._id;
                });
        }

        function updateReservation() {
            reservationService.updateReservation(model.resvId,model.resv)
                .then(function (response) {
                    if(response.data == "1")
                        alert("update success");
                });
        }





    }

})();