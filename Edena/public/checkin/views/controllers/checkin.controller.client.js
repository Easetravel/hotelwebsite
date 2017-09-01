
(function() {
    angular
        .module("Checkin")
        .controller("checkinController", checkinController)

    function checkinController($routeParams,$location,reservationService) {
        //declare controller
        var model = this;
        // model.resvNo = $routeParams["resvno"];
        model.mode = 'findcheckin';
        //declare function
        model.getReservationByNo = getReservationByNo;
        // model.deleteWebsite = deleteWebsite;

        //initial function
        function init() {

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
                    model.mode = 'checkin';

                });
        }




    }

})();