var request = require('request');

cancellationPoliciesPage = function () {

    var me = this;

    me.navigateToCancellationPolicies = function() {
        browser.get('/cancellationPolicies');
    };

    me.getTitle = function () {
        return browser.getTitle();
    };

    me.getSubPage = function () {
        return element(by.css('h2')).getText();
    };

    me.getNoOfCancellationPolicies = function () {
        return element.all(by.repeater('cancellationPolicy in cancellationPolicies')).count();
    };

    me.getCancellationPolicies = function() {
        return element.all(by.repeater('cancellationPolicy in cancellationPolicies'));
    };
    
    me.removeFirstCancellationPolicy = function() {
        element.all(by.repeater('cancellationPolicy in cancellationPolicies')).first().element(by.id('btnRemoveCancellationPolicy')).click();
    };


    me.getFirstCancellationPolicyDetails = function () {
        var firstElement = element.all(by.repeater('cancellationPolicy in cancellationPolicies')).first();
        var firstCancellationPolicyDetails = {};
        firstCancellationPolicyDetails.sid = firstElement.element(by.binding('cancellationPolicy.id')).getText();
        firstCancellationPolicyDetails.sname = firstElement.element(by.binding('cancellationPolicy.name')).getText();
        firstCancellationPolicyDetails.sdescription = firstElement.element(by.binding('cancellationPolicy.description')).getText();
        return firstCancellationPolicyDetails;
    };

    me.getFirstCancellationPolicy = function () {
        return element.all(by.repeater('cancellationPolicy in cancellationPolicies')).first();
    };

    me.navigateToFirstCancellationPolicy = function () {
        element.all(by.repeater('cancellationPolicy in cancellationPolicies')).first().element(by.id('btnEditCancellationPolicy')).click();
    };

};

module.exports = new cancellationPoliciesPage();