var mongoose = require("mongoose");
var reservationSchema = mongoose.Schema({
    reservationnumber: String,
    checkindate:{type:Date, default: Date.now},
    checkoutdate:{type:Date, default: Date.now},
    people: {type:Number, default:0},
    firstname: String,
    lastname: String,
    cardnumber: Number,
    expmounth: Number,
    expyear: Number,
    cvv: Number,
    status: {type: String, enum: ['BOOKED', 'CHECKEDIN', 'CANCELED'], default: "BOOKED"},
    phone: Number,
    email: String


}, {collection: "reservation"});
module.exports = reservationSchema;