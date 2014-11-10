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

        xit('see 1+ supplements', function () {
            expect(supplementsPage.getNoOfSupplements()).toBeGreaterThan(1);
        });

        xit('be able to delete supplements', function () {
            supplementsPage.removeFirstSupplement()
            expect(supplementsPage.getNoOfSupplements()).toBe(supplementsBefore - 1);
        });

        xit('be able to add supplements', function () {
            supplementsPage.addSupplement();
            expect(supplementsPage.getNoOfSupplements()).toBe(supplementsBefore + 1);
        });

        it('be able to access a supplement\'s details', function () {

            var name = supplementsPage.getFirstSupplementNameByBinding(),
                price = supplementsPage.getFirstSupplementPriceByBinding();

            supplementsPage.navigateToSupplementDetails();

            expect(name).toBe(supplementsPage.getName());
            expect(price).toBe(supplementsPage.getFirstSupplementPriceById())
        });

//        it('see details of a supplement if I choose to edit it', function () {
//            expect(supplementsPage.accessFirstSupplement()).toBe(true);
//        });

//        it('see the supplement has been edited and saved if I edited its details', function () {
//            expect(supplementsPage.accessFirstSupplement()).toBe(true);
//        });

    });

});
