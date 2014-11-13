'use strict';

var cancellationPoliciesPage = require('../pageObjects/cancellationPolicies.po');

describe('As a owner', function() {

    describe("when I go to cancellationPolicies", function() {

        var cancellationPolicies,
            cancellationPoliciesBefore;


        beforeEach(function () {
            cancellationPoliciesPage.navigateToCancellationPolicies();
            cancellationPolicies = cancellationPoliciesPage.getCancellationPolicies();
            cancellationPolicies.count().then(function(initialCount){
                cancellationPoliciesBefore = initialCount
            })
        });

        it('I should be in the cancellationPolicies page', function () {
            expect(cancellationPoliciesPage.getSubPage()).toBe('Cancellation policies available');
        });

        it('I should be able to add cancellationPolicies', function () {
            cancellationPoliciesPage.addCancellationPolicy();
            expect(cancellationPoliciesPage.getNoOfCancellationPolicies()).toBe(cancellationPoliciesBefore + 1);
        });

        it('I should see 1+ cancellationPolicies', function () {
            expect(cancellationPoliciesPage.getNoOfCancellationPolicies()).toBeGreaterThan(0);
        });

        it('I should be able to delete cancellationPolicies', function () {
            cancellationPoliciesPage.removeFirstCancellationPolicy();
            expect(cancellationPoliciesPage.getNoOfCancellationPolicies()).toBe(cancellationPoliciesBefore - 1);
        });

        it('I should be able to edit a cancellationPolicy', function () {

            var firstCancellationPolicy = cancellationPoliciesPage.getFirstCancellationPolicy();

            var firstCancellationPolicyId = firstCancellationPolicy.id;
            var firstCancellationPolicyName = firstCancellationPolicy.name;
            var firstCancellationPolicyDescription = firstCancellationPolicy.description;

              // Go to Edit Cancellation Policies
            cancellationPoliciesPage.navigateToFirstElement();

            expect(cancellationPoliciesPage.getSubPage()).toBe('Edit Cancellation Policy');

            var cancellationPolicyBeingEdited = cancellationPoliciesPage.getCancellationPolicyInformation();

            var afterClickFirstCancellationPolicy = cancellationPoliciesPage.getCancellationPolicyInformation();

            var afterClickId = afterClickFirstCancellationPolicy.id;
            var afterClickName = afterClickFirstCancellationPolicy.name;
            var afterClickDescription = afterClickFirstCancellationPolicy.description;

            expect(afterClickId).toBe(firstCancellationPolicyId);
            expect(afterClickName).toBe(firstCancellationPolicyName);
            expect(afterClickDescription).toBe(firstCancellationPolicyDescription);

        });

    });

});