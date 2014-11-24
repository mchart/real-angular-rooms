'use strict';

var supplementsPO = require('./supplements.po.js');
var supplementPO = require('./supplement.po.js');
var dbAdmin = require('rooms-db-setup');
var db = require('rooms-db-query');
var Guid = require('guid');

var couchTimeout = 60 * 1000;  // couch might need a long time before flushing

var NEW_SUPPLEMENT_DETAILS = { name : 'Massage', price : '21.00'};
var EDIT_SUPPLEMENT_DETAILS = { name : 'SupplementEdited', price : '42.00'};

var supplements = [
    { id: Guid.create(), type: 'supplement',  name: "Wi-fi",    price: "2.99" },
    { id: Guid.create(), type: 'supplement',  name: "Breakfast",price: "5.99" },
    { id: Guid.create(), type: 'supplement',  name: "Dinner",   price: "7.99" },
    { id: Guid.create(), type: 'supplement',  name: "Sauna",    price: "4.99" },
    { id: Guid.create(), type: 'supplement',  name: "Gym",      price: "3.99" }];

var flushAndSeed = function() {
    var done = false;

    dbAdmin.flush(function() {
        done = true;
    });

    waitsFor(function(){
        return done;
    }, couchTimeout);
};
flushAndSeed();

describe('As a user when I navigate to', function() {

    describe("the supplements page", function() {

        beforeEach(function() {
            var done = false;
            db.supplements.storeList(supplements, function(err, result) {
                console.log('Performed seeding');
                supplements.navigateToSupplements();
                done = true;
            });

            waitsFor(function(){
                return done;
            }, couchTimeout);
        });

        it('I am in the supplements page', function () {

            expect(whereAmI()).toBe('Supplements');

        });

        it('I can add supplements to the list of supplements', function () {

            supplementsPO.navigateToNewSupplement();

            addNewSupplement();

            expect(supplementsPO.getSupplements().count()).toBe(supplements.length + 1);

        });

        it('I see at least one supplement in the list', function () {

            supplementsListHasAtLeastOneSupplement();

        });

        it('I can access a supplement and change its details', function () {

            changeSupplementDetails();

            checkfirstSupplementHas();

        });

        it('I am able to delete supplements', function () {

            supplementsPO.removeFirstSupplement();

            expect(supplementsPO.getSupplements().count()).toBe(supplements.length - 1);

        });

        it('an edit button shows if I clicked on Edit Supplement', function () {

//            supplementPO.getSave

        });

        it('an add button shows if I clicked on Add Supplement', function () {



        });

        it('I should be able to sort supplements by name', function () {



        });

        it('I can go back by pressing the button back', function () {



        });

        it('I can go to the landing page by pressing home button', function () {



        });

        function whereAmI() {
            return supplementsPO.getSubPage();
        }

        function addNewSupplement() {
            supplementPO.addSupplement(NEW_SUPPLEMENT_DETAILS.name, NEW_SUPPLEMENT_DETAILS.price);
            supplementPO.saveNewSupplement();
        }

        function supplementsListHasAtLeastOneSupplement() {
            expect(supplementsPO.getSupplements().count()).toBeGreaterThan(0);
        }

        function changeSupplementDetails() {
            supplementsPO.navigateToFirstSupplement();
            supplementPO.editSupplement(EDIT_SUPPLEMENT_DETAILS.name, EDIT_SUPPLEMENT_DETAILS.price);
            supplementPO.saveChangesOnSupplement();
        }

        function checkfirstSupplementHas() {
            var firstSupplement = supplementsPO.getFirstSupplementDetails();
            expect(firstSupplement.name).toBe(EDIT_SUPPLEMENT_DETAILS.name);
            expect(firstSupplement.price).toBe('£' + EDIT_SUPPLEMENT_DETAILS.price);
        }

    });

});
