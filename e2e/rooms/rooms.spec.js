'use strict';

var roomsPO = require('./rooms.po.js');
var dbAdmin = require('rooms-db-setup');
var db = require('rooms-db-query');
var Guid = require('guid');

var couchTimeout = 60 * 1000;  // couch might need a long time before flushing


var rooms = [
    { id: Guid.create(), type: 'room', name: "Premium", address: "Barbican" },
    { id: Guid.create(), type: 'room', name: "Hostel", address: "Camden" },
    { id: Guid.create(), type: 'room', name: "Hostel", address: "Ealing" },
    { id: Guid.create(), type: 'room', name: "B&B ", address: "Westminster" },
    { id: Guid.create(), type: 'room', name: "Premium", address: "Piccadilly" }];

var flushAndSeed = function() {
    var done = false;

    dbAdmin.flush(function() {
        db.rooms.storeList(rooms, function(err, result) {
            console.log('Performed seeding');
            roomsPO.navigate();
            done = true;
        });
    });

    waitsFor(function(){
        return done;
    }, couchTimeout);
};

describe('As a owner', function() {

  describe("when I go to the list of rooms", function() {

    beforeEach(function() {
        flushAndSeed();
    });

    it('I should see the rooms', function() {

      	expect(roomsPO.getListOfRooms().count()).toBe(rooms.length);

    });

    it('I should be able to delete the first room', function() {

        roomsPO.deleteRoomAtRow(0);

      	expect(roomsPO.getListOfRooms().count()).toBe(rooms.length - 1);

    });

    it('I should be able to go to edit room feature', function() {

        roomsPO.editRoomAtRow(0)

        expect(browser.getCurrentUrl()).toContain('/rooms/edit/');

    });

    it('I should be able to go to the new room feature', function() {

        roomsPO.newRoom.click()

        expect(browser.getCurrentUrl()).toContain('/rooms/new');
    });

  });

});