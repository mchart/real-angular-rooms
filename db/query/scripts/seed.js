'use strict';

var db = require('../lib/public.js');

var rooms = [
    { id: 1, type: 'room', name: "Premium", address: "Barbican" },
    { id: 2, type: 'room', name: "Hostel",  address: "Camden" },
    { id: 3, type: 'room', name: "Hostel",  address: "Ealing" },
    { id: 4, type: 'room', name: "B&B ",    address: "Westminster" },
    { id: 5, type: 'room', name: "Premium", address: "Piccadilly" }];

db.rooms.store(rooms[0], function(err, result) {
    console.log(result);
} );

db.rooms.storeList(rooms, function(err, result) {
    console.log(result);
    db.rooms.shutdown();
} );

var supplements = [
    { id: 6, type: 'supplement',  name: "Wi-fi",    price: "2.99" },
    { id: 7, type: 'supplement',  name: "Breakfast",price: "5.99" },
    { id: 8, type: 'supplement',  name: "Dinner",   price: "7.99" },
    { id: 9, type: 'supplement',  name: "Sauna",    price: "4.99" },
    { id: 10,type: 'supplement',  name: "Gym",      price: "3.99" }];

db.supplements.store(supplements[0], function(err, result) {
    console.log(result);
} );

db.supplements.storeList(supplements, function(err, result) {
    console.log(result);
    db.supplements.shutdown();
} );