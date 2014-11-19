'use strict';

var cancellationPolicyPage = require('./cancellationPolicy.po.js');
var cancellationPoliciesPage = require('./cancellationPolicies.po.js');

describe('As a owner', function() {

    describe("when I go to cancellationPolicies", function() {

        var cancellationPolicies,
            cancellationPoliciesBefore;

        var NEW_DETAILS = { name : 'EditedName', description: 'EditDescription'};

        beforeEach(function () {
            cancellationPoliciesPage.navigateToCancellationPolicies();
            cancellationPolicies = cancellationPoliciesPage.getAllElements('cancellationPolicy in cancellationPolicies');
            cancellationPolicies.count().then(function(initialCount){
                cancellationPoliciesBefore = initialCount
            })
        });

        function beInside(firstCancellationPolicy) {
            var editedCancellationPolicy = cancellationPolicyPage.getEditedCancellationPolicyDetails();
            expect(firstCancellationPolicy.sid).toBe(editedCancellationPolicy.sid);
            expect(firstCancellationPolicy.sname).toBe(editedCancellationPolicy.sname);
            expect(firstCancellationPolicy.sdescription).toBe(editedCancellationPolicy.sdescription);
        }

        function changeCancellationPolicyDetails(NEW_DETAILS) {
            cancellationPoliciesPage.navigateToFirstCancellationPolicy();
            cancellationPolicyPage.editCancellationPolicy(NEW_DETAILS.name, NEW_DETAILS.description);
            cancellationPolicyPage.saveEditedCancellationPolicyAndNavigateBackToCancellationPolicies();
        }

        function firstCancellationPolicyHas(NEW_DETAILS) {
            var firstCancellationPolicy = getFirstCancellationPolicyDetails();

            expect(firstCancellationPolicy.sname).toBe(NEW_DETAILS.name);
            expect(firstCancellationPolicy.sdescription).toBe(NEW_DETAILS.description);
        }

        function getFirstCancellationPolicyDetails () {
            var theElement =  cancellationPoliciesPage.getFirstElement();
            var details = {};
            details.sid = cancellationPoliciesPage.getElementByBinding(theElement, 'cancellationPolicy.id').getText();
            details.sname = cancellationPoliciesPage.getElementByBinding(theElement, 'cancellationPolicy.name').getText();
            details.sdescription = cancellationPoliciesPage.getElementByBinding(theElement, 'cancellationPolicy.description').getText();
            return details;
        };

        it('I should be in the cancellationPolicies page', function () {
            expect(cancellationPoliciesPage.getSubPage()).toBe('Cancellation policies available');
        });

        it('I should be able to add cancellationPolicies', function () {

            cancellationPolicyPage.addCancellationPolicy();

            expect(cancellationPoliciesPage.getNoOfCancellationPolicies()).toBe(cancellationPoliciesBefore + 1);
        });

        it('I should see 1+ cancellationPolicies', function () {
            expect(cancellationPoliciesPage.getNoOfCancellationPolicies()).toBeGreaterThan(0);
        });

        it('can access the details of the first cancellationPolicy', function () {

            var firstCancellationPolicy = getFirstCancellationPolicyDetails();
            cancellationPoliciesPage.navigateToFirstCancellationPolicy();

            beInside(firstCancellationPolicy);

        });

        it('can access a cancellationPolicy, change its details and it will show up in list of cancellationPolicies', function () {

            changeCancellationPolicyDetails(NEW_DETAILS);
            firstCancellationPolicyHas(NEW_DETAILS);

        });

        it('be able to delete cancellationPolicies', function () {
            cancellationPoliciesPage.removeFirstCancellationPolicy();

            expect(cancellationPoliciesPage.getNoOfCancellationPolicies()).toBe(cancellationPoliciesBefore - 1);

        });


    });

});