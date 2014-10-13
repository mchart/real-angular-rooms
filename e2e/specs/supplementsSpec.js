'use strict';

var supplementsPage = require('../pageObjects/supplementsPage');

describe('As a owner', function() {
    describe("when I go to supplements", function() {

        beforeEach(function () {
            supplementsPage.navigate();
        });

        it('I should see the supplements', function() {

            expect(supplementsPage.getNoOfSupplements()).toBe(5);

        });

        it('I should be able to delete supplements', function() {

            var supplements = supplementsPage.getNoOfSupplements();
            supplementsPage.removeSupplement(0);
            expect(supplementsPage.getNoOfSupplements()).toBe(supplements-1)

        });

    });

});
