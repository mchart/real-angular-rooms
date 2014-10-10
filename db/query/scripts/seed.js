'use strict';

var db = require('../lib/public.js');

var rooms = [
    { id: 1, type: 'room', name: "Premium", address: "Barbican" },
    { id: 2, type: 'room', name: "Hostel", address: "Camden" },
    { id: 3, type: 'room', name: "Hostel", address: "Ealing" },
    { id: 4, type: 'room', name: "B&B ", address: "Westminster" },
    { id: 5, type: 'room', name: "Premium", address: "Piccadilly" }];

db.rooms.store(rooms[0], function(err, result) {
    console.log(result);
} );

db.rooms.storeList(rooms, function(err, result) {
    console.log(result);
    db.rooms.shutdown();
} );

var cancellationPolicies = [
    { id: 6, type: "cancellationPolicy", name: "Flexible", description: "Full refund 1 day prior to arrival, except fees" },
    { id: 7, type: "cancellationPolicy", name: "Moderate", description: "Full refund 5 days prior to arrival, except fees" },
    { id: 8, type: "cancellationPolicy", name: "Strict", description: "50% refund up until 1 week prior to arrival, except fees" },
    { id: 9, type: "cancellationPolicy", name: "Super Strict", description: "50% refund up until 30 days prior to arrival, except fees" },
    { id: 10,type: "cancellationPolicy", name: "Long Term", description: "First month down payment, 30 day notice for lease termination" }];

db.cancellationPolicies.store(cancellationPolicies[0], function(err, result) {
    console.log(result);
} );

db.cancellationPolicies.storeList(cancellationPolicies, function(err, result) {
    console.log(result);
    db.cancellationPolicies.shutdown();
} );