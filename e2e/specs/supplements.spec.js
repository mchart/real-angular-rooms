'use strict';

var supplementsPage = require('../pageObjects/supplements.po');

describe('As an user when I navigate to', function() {

    describe("the supplements page I", function() {

        var supplements,
            supplementsBefore;

        var NEW_DETAILS = { name : 'EditedName', price : '41.99'};


        function whereAmI() {
            return supplementsPage.getSubPage();
        }

        function supplementListHasAtLeastOneSupplement() {
            expect(supplementsPage.getNoOfSupplements()).toBeGreaterThan(0);
        }

        function beInside(firstSupplement) {
            var editedSupplement = supplementsPage.getEditedSupplementDetails();
            expect(firstSupplement.sid).toBe(editedSupplement.sid);
            expect(firstSupplement.sname).toBe(editedSupplement.sname);
            expect(firstSupplement.sprice).toBe(editedSupplement.sprice);
        }

        function changeSupplementDetails(NEW_DETAILS) {
            supplementsPage.navigateToFirstSupplement();
            supplementsPage.editSupplement(NEW_DETAILS.name, NEW_DETAILS.price);
            supplementsPage.saveEditedSupplementAndNavigateBackToSupplements();
        }

        function firstSupplementHas(NEW_DETAILS) {
            var firstSupplement = supplementsPage.getFirstSupplementDetails();
            expect(firstSupplement.sname).toBe(NEW_DETAILS.name);
            expect(firstSupplement.sprice).toBe(NEW_DETAILS.price);
        }

        beforeEach(function () {
            supplementsPage.navigateToSupplements();
            supplements = supplementsPage.getSupplements();
            supplements.count().then(function(initialCount){
                supplementsBefore = initialCount
            });
        });

        it('am in the supplements page', function () {

            expect(whereAmI()).toBe('Supplements');

        });

        it('can add supplements to the list of supplements', function () {

            supplementsPage.addSupplement();

            expect(supplementsPage.getNoOfSupplements()).toBe(supplementsBefore + 1);

        });
/*
        it('see at least one supplement in the list', function () {

            supplementListHasAtLeastOneSupplement();

        });
*/
        it('can access the details of the first supplement', function () {

            var firstSupplement = supplementsPage.getFirstSupplementDetails();

            supplementsPage.navigateToFirstSupplement();

            beInside(firstSupplement);

        });

        it('can access a supplement, change its details and it will show up in the supplement list', function () {

            changeSupplementDetails(NEW_DETAILS);

            firstSupplementHas(NEW_DETAILS);

        });

        it('be able to delete supplements', function () {

            supplementsPage.removeFirstSupplement();

            expect(supplementsPage.getNoOfSupplements()).toBe(supplementsBefore - 1);

        });

    });

});
