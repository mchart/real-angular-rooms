'use strict';

var supplementsPage = require('../pageObjects/supplements.po');

describe('As an owner', function() {

    describe("when I navigate to supplements I should", function() {

        var supplements,
            supplementsBefore;

        beforeEach(function () {
            supplementsPage.navigateToSupplements();
            supplements = supplementsPage.getSupplements();
            supplements.count().then(function(initialCount){
                supplementsBefore = initialCount
            });
        });

        it('be in the supplements page', function () {
            expect(supplementsPage.getSubPage()).toBe('Supplements');
        });

        it('be able to add supplements', function () {
            supplementsPage.addSupplement();
            expect(supplementsPage.getNoOfSupplements()).toBe(supplementsBefore + 1);
        });

        it('see 1+ supplements', function () {
            expect(supplementsPage.getNoOfSupplements()).toBeGreaterThan(0);
        });

        it('be able to access a supplement\'s details', function () {
            // Get firstSupplements Details
            var firstSupplement = supplementsPage.getFirstSupplementDetails();

            //Navigate to First Supplement
            supplementsPage.navigateToFirstSupplement();

            // Get editedSupplement Details
            var editedSupplement = supplementsPage.getEditedSupplementDetails();

            // Id, name and price should both be the same
            expect(firstSupplement.sid).toBe(editedSupplement.sid);
            expect(firstSupplement.sname).toBe(editedSupplement.sname);
            expect(firstSupplement.sprice).toBe(editedSupplement.sprice);
        });

        xit('be able to change a supplement\'s details and save them', function () {
            supplementsPage.navigateToFirstSupplement();

            var editedSupplement = supplementsPage.getEditedSupplementDetails();

            supplementsPage.editSupplement('Edited', 12.99);

            var firstSupplement = supplementsPage.getFirstSupplementDetails();

            expect(editedSupplement).not.toBe(firstSupplement);
            expect(firstSupplement.name).toBe('Edited');
            expect(firstSupplement.price).toBe(12.99);
        });

        it('be able to delete supplements', function () {
            supplementsPage.removeFirstSupplement();
            expect(supplementsPage.getNoOfSupplements()).toBe(supplementsBefore - 1);
        });

    });

});
