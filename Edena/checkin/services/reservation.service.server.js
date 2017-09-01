var app = require("../../express");
var stripe = require("stripe")("sk_test_D8L9ZFyO3IkOkIEOXWwbV18Z");

var reservationModel = require("../model/reservation.model.server");

//post
app.post("/reservationapi/create", createReservation);
app.post("/reservationapi/charge", chargeCard);
//get
app.get("/reservationapi/byresvno/:resvno", findReservationByReserveNo);
app.get("/reservationapi/byname/:firstname/:lastname", findReservationByName);
app.get("/reservationapi/all", getAllReservations);
//put
app.put("/reservationapi/resv/:resvid", updateReservation);
//delete
app.delete("/reservationapi/resv/:resvid", deleteReservation);

function chargeCard(req,res) {

    var token = req.body.stripeToken; // Using Express
    // var resvno = req.body.resvno;
    // var firstname = req.body.firstname;
    // var lastname = req.body.lastname;
    // var phone = req.body.phone;
    // var email = req.body.email;
    // var numberofguests = req.body.numberofguests;


    var charge = stripe.charges.create({
        amount: 100,
        currency: "usd",
        description: "Example charge",
        source: token,
    }, function(err, charge) {
        var show = charge;
        var showerr = err;
        res.redirect('/checkin/#!/thankyou');
        // asynchronously called
    });
}


function createReservation(req,res) {
    reservationModel
        .createReservation()
        .then(function (resv) {
            res.json(resv);
        });
}


function findReservationByReserveNo(req,res) {
    var resvNo = req.params.resvno;
    reservationModel
        .findReservationByReserveNo(resvNo)
        .then(function (resv) {
            res.json(resv);
        }, function (err) {
            res.sendStatus(404).send(err);
        });
}


function findReservationByName(req,res) {
    var firstname = req.params.firstname;
    var lastname = req.params.lastname;
    reservationModel
        .findReservationByName(firstname,lastname)
        .then(function (resv) {
            res.json(resv);
        }, function (err) {
            res.sendStatus(404).send(err);
        });
}


function updateReservation(req, res){
    var resvId = req.params.resvid;
    var newResv = req.body;
    reservationModel
        .updateReservation(resvId,newResv)
        .then(function (resv) {
            res.send("1");
        }, function (err) {
            res.send("0");
        });
}

function getAllReservations(req,res) {
    reservationModel
        .getAllReservations()
        .then(function (resv) {
            res.json(resv);
        }, function (err) {
            res.sendStatus(404).send(err);
        });
}

function deleteReservation(req, res) {
    var resvId = req.params.resvid;
    reservationModel
        .deleteReservation(resvId)
        .then(function (resv) {
            res.send("1");
        }, function (err) {
            res.send("0");
        });
}