'use strict';

var supplementsPage = require('../pageObjects/supplements.po');

function expectMyStuffToBeEqual(first, second) {
    // Id, name and price should both be the same
    expect(first.sid).toBe(second.sid);
    expect(first.sname).toBe(second.sname);
    expect(first.sprice).toBe(second.sprice);
}

describe('As an user when I navigate to', function() {

    function whereAmI() {
        return supplementsPage.getSubPage();
    }

    describe("the supplements page I", function() {

        var supplements,
            supplementsBefore;

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

        it('be able to add supplements', function () {
            supplementsPage.addSupplement();
            expect(supplementsPage.getNoOfSupplements()).toBe(supplementsBefore + 1);
        });

        it('see 1+ supplements', function () {
            expect(supplementsPage.getNoOfSupplements()).toBeGreaterThan(0);
        });

        it('be able to access a supplement\'s details TO BE RENAMED to reflect whats going on inside', function () {
            // Get firstSupplements Details
            var firstSupplement = supplementsPage.getFirstSupplementDetails();

            //Navigate to First Supplement
            supplementsPage.navigateToFirstSupplement();

            // Get editedSupplement Details
            var editedSupplement = supplementsPage.getEditedSupplementDetails();

            // Id, name and price should both be the same
            expectMyStuffToBeEqual(firstSupplement, editedSupplement);
        });

        it('be able to change a supplement\'s details and save them', function () {
            var newName = 'Yes',
                newPrice = 42;

            // Navigate to First Supplement
            supplementsPage.navigateToFirstSupplement();

            // Enter new details for edited Supplement
            supplementsPage.editSupplement(newName, newPrice);

            // Save details and navigate back to Supplements
            supplementsPage.saveEditedSupplementAndNavigateBackToSupplements();

            var firstSupplement = supplementsPage.getFirstSupplementDetails();

            expect(firstSupplement.sname).toBe(newName);
            expect(firstSupplement.sprice).toBe(String(newPrice));
        });

        it('be able to delete supplements', function () {
            supplementsPage.removeFirstSupplement();
            expect(supplementsPage.getNoOfSupplements()).toBe(supplementsBefore - 1);
        });

    });

});
