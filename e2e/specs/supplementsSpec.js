'use strict';

var supplementsPage = require('../pageObjects/supplementsPage');

describe('As a owner', function() {

    describe("when I go to supplements", function() {

        var supplements,
            supplementsBefore

        beforeEach(function () {
            supplementsPage.navigate()
            supplements = supplementsPage.getSupplements()
            supplements.count().then(function(initialCount){
                supplementsBefore = initialCount
            })
        })

        it('I should be in the ngRooms.com page', function () {
            expect(browser.getTitle()).toEqual('ngRooms.com')
        })

        it('I should be in the supplements page', function () {
            expect(element(by.css('h2')).getText()).toBe('Supplements')
        })

        it('I should see 1+ supplements', function() {
            expect(supplements.count()).toBeGreaterThan(1)
        });

        it('I should be able to delete supplements', function() {
            supplementsPage.removeFirstSupplement()
            expect(supplements.count()).toBe(supplementsBefore - 1)
        });

    });

});
