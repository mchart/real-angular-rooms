'use strict';

var supplementsPO = require('./supplements.po.js');
var supplementPO = require('./supplement.po.js');
var dbAdmin = require('rooms-db-setup');
var db = require('rooms-db-query');

var couchTimeout = 60 * 1000;  // couch might need a long time before flushing

var Guid = require('guid');

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

        var supplements,
            supplementsBefore;

        var NEW_SUPPLEMENT_DETAILS = { name : 'Massage', price : '21.00'};
        var EDIT_SUPPLEMENT_DETAILS = { name : 'SupplementEdited', price : '42.00'};

        beforeEach(function() {
            var done = false;
            db.supplements.storeList(supplements, function(err, result) {
                console.log('Performed seeding');
                supplementsPO.navigateToSupplements();
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

        iit('I can access the details of the first supplement by clicking edit supplement', function () {

//            var promisedFirstSupplement = supplementsPO.getFirstSupplementDetails()
//            var supplement = {};
//            var done = false;
//
//            promisedFirstSupplement.id.getText().then( function (value) {
//                supplement.id = value;
//            })
//                .then(function() {
//                    promisedFirstSupplement.name.getText().then( function (value) {
//                        supplement.name = value;
//                    })
//                        .then(function() {
//                            promisedFirstSupplement.price.getText().then( function (value) {
//                                supplement.price = value;
//                            })
//                                .then(function() {
//                                    expect(supplement.price).toBe('before supplement.price')
//                                    expect(supplement.name).toBe('before supplement.name')
//                                    expect(supplement.id).toBe('before supplement.id')
//                                    done = true;
//                                })
//                        })
//                })
//            ;
//
//            waitsFor(function(){
//                return done;
//            }, 3000)
//
//            supplementsPO.navigateToFirstSupplement();
//
//            expect(whereAmI()).toBe('Supplement');
//
//            var thisSupplement = supplementPO.getSupplementDetails();
//
//            expect(supplement.price).toBe('after waitsFor supplement.price')
//            expect(supplement.name).toBe('after waitsFor supplement.name')
//            expect(supplement.id).toBe('after waitsFor supplement.id')
//
//            expect(thisSupplement.id.getText()).toBe('thissupp.id')
//            expect(thisSupplement.name.getAttribute('value')).toBe('thissupp.name');
//            expect(thisSupplement.price.getAttribute('value')).toBe('thissupp.price');

        });

        it('I can access a supplement, change its details and it will show up in the supplement list', function () {

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
