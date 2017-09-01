var app = require("../../express");
var reservationModel = require("../model/reservation.model.server");

//post
app.post("/reservationapi/create", createReservation);
//get
app.get("/reservationapi/byresvno/:resvno", findReservationByReserveNo);
app.get("/reservationapi/byname/:firstname/:lastname", findReservationByName);
app.get("/reservationapi/all", getAllReservations);
//put
app.put("/reservationapi/resv/:resvid", updateReservation);
//delete


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

// function deleteTransaction(req, res) {
//     var transactionId = req.params.transactionId;
//     transactionModel
//         .deleteTransaction(transactionId)
//         .then(function (transaction) {
//             res.send("1");
//         }, function (err) {
//             res.send("0");
//         });
// }