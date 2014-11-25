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
    { id: '2a8627ee-0b59-e32e-1fc4-80eb59609d07', type: 'supplement',  name: "Wi-fi",    price: "2.99" },
    { id: '53235c7a-5e2e-4b39-6592-643c931353c7', type: 'supplement',  name: "Breakfast",price: "5.99" },
    { id: '88ac6d7c-257c-c85e-4e40-ababd913d160', type: 'supplement',  name: "Dinner",   price: "7.99" },
    { id: 'acc7e0b7-6e8a-62a8-49bb-9cb1e6f0dc08', type: 'supplement',  name: "Sauna",    price: "1.99" },
    { id: 'f7ba97e3-94a4-fb97-6f4e-106b2e72bede', type: 'supplement',  name: "Gym",      price: "3.99" }];

var flushAndSeed = function() {
    var done = false;

    dbAdmin.flush(function() {
        db.supplements.storeList(supplements, function(err, result) {
            console.log('Performed seeding');
            supplementsPO.navigateToSupplements();
            done = true;
        });
    });

    waitsFor(function(){
        return done;
    }, couchTimeout);
};

    describe('As a user when I navigate to', function() {

    describe("the supplements page", function() {

        beforeEach(function() {
            flushAndSeed();
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


        it('I can access the details of the first supplement by clicking edit supplement', function () {

            supplementsPO.navigateToFirstSupplement();

            areFirstSupplementDetailsVisible();

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

            supplementsPO.navigateToFirstSupplement();

            expect(element(by.id('btnSaveChangesToSupplement')).isPresent()).toBe(true);

        });

        it('an add button shows if I clicked on Add Supplement', function () {

            supplementsPO.navigateToNewSupplement();

            expect(element(by.id('btnSaveNewSupplement')).isPresent()).toBe(true);

        });

        it('I should be able to sort supplements by name', function () {

            supplementsPO.sortByPrice();

            checkSortByPriceDescendingWorks();

        });

        it('I can go back by pressing the button back', function () {

            supplementsPO.navigateToNewSupplement();

            supplementPO.navigateBack();

            expect(whereAmI()).toBe('Supplements');

        });

        iit('I can go to the landing page by pressing home button', function () {

            supplementsPO.navigateToNewSupplement();

            supplementPO.navigateHome();

            expect(whereAmI()).toBe('Rooms');

        });

        function whereAmI() {
            return supplementsPO.getSubPage();
        }

        function addNewSupplement() {
            supplementPO.addSupplement(NEW_SUPPLEMENT_DETAILS.name, NEW_SUPPLEMENT_DETAILS.price);
            supplementPO.clickNewSupplementButton();
        }

        function supplementsListHasAtLeastOneSupplement() {
            expect(supplementsPO.getSupplements().count()).toBeGreaterThan(0);
        }

        function changeSupplementDetails() {
            supplementsPO.navigateToFirstSupplement();
            supplementPO.editSupplement(EDIT_SUPPLEMENT_DETAILS.name, EDIT_SUPPLEMENT_DETAILS.price);
            supplementPO.clickEditSupplementButton();
        }

        function checkfirstSupplementHas() {
            var firstSupplement = supplementsPO.getFirstSupplementDetails();
            expect(firstSupplement.name.getText()).toBe(EDIT_SUPPLEMENT_DETAILS.name);
            expect(firstSupplement.price.getText()).toBe('£' + EDIT_SUPPLEMENT_DETAILS.price);
        }

        function areFirstSupplementDetailsVisible() {
            expect(whereAmI()).toBe('Supplement');

            var thisSupplement = supplementPO.getSupplementDetails();

            expect(thisSupplement.id.getText()).toBe(supplements[0].id);
            expect(thisSupplement.name.getAttribute('value')).toBe(supplements[0].name);
            expect(thisSupplement.price.getAttribute('value')).toBe(supplements[0].price);
        }

        function checkSortByPriceDescendingWorks() {
            expect(supplementsPO.getFirstSupplementDetails().price.getText()).toBe('£7.99')
        }

    });

});
