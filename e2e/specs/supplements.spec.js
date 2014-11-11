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
            })
        });

        xit('be in the supplements page', function () {
            expect(supplementsPage.getSubPage()).toBe('Supplements');
        });

        xit('be able to add supplements', function () {
            supplementsPage.addSupplement();
            expect(supplementsPage.getNoOfSupplements()).toBe(supplementsBefore + 1);
        });

        xit('see 1+ supplements', function () {
            expect(supplementsPage.getNoOfSupplements()).toBeGreaterThan(0);
        });

        it('be able to access a supplement\'s details', function () {

            // firstSupplements Details
            var firstSupplement = supplementsPage.getFirstSupplementDetails();

            //Navigate to First Supplement
            supplementsPage.navigateToFirstSupplement();

            // editedSupplement Details
            var editedSupplement = supplementsPage.getEditedSupplementDetails();

            // Making sure data is correct for firstSupplement
            expect(firstSupplement.sid).toBe('Id')
            expect(firstSupplement.sname).toBe('Name')
            expect(firstSupplement.sprice).toBe('Price')

//            // Making sure data is correct for editedSupplement
//            expect(editedSupplement.sid).toBe('Id')
//            expect(editedSupplement.sname).toBe('Name')
//            expect(editedSupplement.sprice).toBe('Price')

            //They should both be the same


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

        xit('be able to delete supplements', function () {
            supplementsPage.removeFirstSupplement()
            expect(supplementsPage.getNoOfSupplements()).toBe(supplementsBefore - 1);
        });

    });

});
