'use strict';

var db = require('../lib/public.js');
var Guid = require('guid');

var rooms = [
    { id: Guid.create(), type: 'room', name: "Premium", address: "Barbican" },
    { id: Guid.create(), type: 'room', name: "Hostel", address: "Camden" },
    { id: Guid.create(), type: 'room', name: "Hostel", address: "Ealing" },
    { id: Guid.create(), type: 'room', name: "B&B ", address: "Westminster" },
    { id: Guid.create(), type: 'room', name: "Premium", address: "Piccadilly" }];

db.rooms.store(rooms[0], function(err, result) {
    console.log(result);
} );

db.rooms.storeList(rooms, function(err, result) {
    console.log(result);
    db.rooms.shutdown();
} );

var supplements = [
    { id: Guid.create(), type: 'supplement',  name: "Wi-fi",    price: "2.99" },
    { id: Guid.create(), type: 'supplement',  name: "Breakfast",price: "5.99" },
    { id: Guid.create(), type: 'supplement',  name: "Dinner",   price: "7.99" },
    { id: Guid.create(), type: 'supplement',  name: "Sauna",    price: "4.99" },
    { id: Guid.create(), type: 'supplement',  name: "Gym",      price: "3.99" }];

db.supplements.store(supplements[0], function(err, result) {
    console.log(result);
} );

db.supplements.storeList(supplements, function(err, result) {
    console.log(result);
    db.supplements.shutdown();
} );

var cancellationPolicies = [
    { id: Guid.create(), type: "cancellationPolicy", name: "Flexible", description: "Full refund 1 day prior to arrival, except fees" },
    { id: Guid.create(), type: "cancellationPolicy", name: "Moderate", description: "Full refund 5 days prior to arrival, except fees" },
    { id: Guid.create(), type: "cancellationPolicy", name: "Strict", description: "50% refund up until 1 week prior to arrival, except fees" },
    { id: Guid.create(), type: "cancellationPolicy", name: "Super Strict", description: "50% refund up until 30 days prior to arrival, except fees" },
    { id: Guid.create(), type: "cancellationPolicy", name: "Long Term", description: "First month down payment, 30 day notice for lease termination" }];

db.cancellationPolicies.store(cancellationPolicies[0], function(err, result) {
    console.log(result);
} );

db.cancellationPolicies.storeList(cancellationPolicies, function(err, result) {
    console.log(result);
    db.cancellationPolicies.shutdown();
} );