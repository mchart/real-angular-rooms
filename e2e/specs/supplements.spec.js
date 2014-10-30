'use strict';

var supplementsPage = require('../pageObjects/supplements.po');

describe('As a owner', function() {

    describe("when I go to supplements", function() {

        var supplements,
            supplementsBefore

        beforeEach(function () {
            supplementsPage.navigateToSupplements()
            supplements = supplementsPage.getSupplements()
            supplements.count().then(function(initialCount){
                supplementsBefore = initialCount
            })
        })

        it('I should be in the ngRooms.com page', function () {
            expect(supplementsPage.getTitle()).toEqual('ngRooms.com')
        })

        it('I should be in the supplements page', function () {
            expect(supplementsPage.getSubPage()).toBe('Supplements')
        })

        it('I should see 1+ supplements', function () {
            expect(supplementsPage.getNoOfSupplements()).toBeGreaterThan(1)
        });

        it('I should be able to delete supplements', function () {
            supplementsPage.removeFirstSupplement()
            expect(supplementsPage.getNoOfSupplements()).toBe(supplementsBefore - 1)
        });

        it('I should be able to edit existing supplements', function () {
            expect(supplementsPage.editSupplementAtRow(0)).toBe(true)
        })

//        it('I should be able to add supplements', function () {
//            supplementsPage.addSupplement()
//            expect(supplements.count()).toBe(supplementsBefore) // sBefore + 1
//        })

    });

});
