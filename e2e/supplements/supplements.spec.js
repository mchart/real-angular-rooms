'use strict';

var supplementsPO = require('./supplements.po.js');
var supplementPO = require('./supplement.po.js');

describe('As an user when I navigate to', function() {

    describe("the supplements page I", function() {

        var supplements,
            supplementsBefore;

        var NEW_SUPPLEMENT_DETAILS = { name : 'NewSupplement', price : '20.99'};
        var EDIT_SUPPLEMENT_DETAILS = { name : 'SupplementEdited', price : '41.99'};


        function whereAmI() {
            return supplementsPO.getSubPage();
        }

        function addNewSupplement(supplement) {
            supplementPO.addSupplement(supplement.name, supplement.price);
            supplementPO.saveNewSupplement();
        }

        function supplementsListHasAtLeastOneSupplement() {
            expect(supplementsPO.getSupplements().count()).toBeGreaterThan(0);
        }

        function checkWeAreInside(firstSupplement) {
            var editedSupplement = supplementPO.getSupplementDetails();
            expect(firstSupplement.sid).toBe(editedSupplement.sid);
            expect(firstSupplement.sname).toBe(editedSupplement.sname);
            expect(firstSupplement.sprice).toBe(editedSupplement.sprice);
        }

        function changeSupplementDetails(supplement) {
            supplementsPO.navigateToFirstSupplement();
            supplementPO.editSupplement(supplement.name, supplement.price);
            supplementPO.saveEditedSupplement();
        }

        function checkfirstSupplementHas(supplement) {
            var firstSupplement = supplementsPO.getFirstSupplementDetails();
            expect(firstSupplement.sname).toBe(supplement.name);
            expect(firstSupplement.sprice).toBe(supplement.price);
        }

        beforeEach(function () {
            supplementsPO.navigateToSupplements();
            supplements = supplementsPO.getSupplements();
            supplements.count().then(function(initialCount){
                supplementsBefore = initialCount
            });
        });

        it('am in the supplements page', function () {

            expect(whereAmI()).toBe('Supplements');

        });

        it('can add supplements to the list of supplements', function () {

            supplementsPO.navigateToNewSupplement();

            addNewSupplement(NEW_SUPPLEMENT_DETAILS);

            expect(supplementsPO.getSupplements().count()).toBe(supplementsBefore + 1);

        });

        it('see at least one supplement in the list', function () {

            supplementsListHasAtLeastOneSupplement();

        });

        it('can access the details of the first supplement', function () {

            var firstSupplement = supplementsPO.getFirstSupplementDetails();

            supplementsPO.navigateToFirstSupplement();

            checkWeAreInside(firstSupplement);

        });

        it('can access a supplement, change its details and it will show up in the supplement list', function () {

            changeSupplementDetails(EDIT_SUPPLEMENT_DETAILS);

            checkfirstSupplementHas(EDIT_SUPPLEMENT_DETAILS);

        });

        it('be able to delete supplements', function () {

            supplementsPO.removeFirstSupplement();

            expect(supplementsPO.getSupplements().count()).toBe(supplementsBefore - 1);

        });

        it('see an edit button if I clicked on Edit Supplement', function () {



        });

        it('see an add button if I clicked on Add Supplement', function () {



        });

    });

});
