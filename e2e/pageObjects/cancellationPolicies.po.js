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

    me.addCancellationPolicy = function() {
        element(by.id('btnNewCancellationPolicy')).click();
        element(by.id('name')).sendKeys('Name');
        element(by.id('description')).sendKeys('This is the description');
        element(by.id('btnSaveNewCancellationPolicy')).click();
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

    me.editCancellationPolicy = function (name, description) {
        var sname = element(by.id('name'));
        sname.clear();
        sname.sendKeys(name);

        var sdescription = element(by.id('description'));
        sdescription.clear();
        sdescription.sendKeys(description);
    }

    me.navigateToFirstCancellationPolicy = function () {
        element.all(by.repeater('cancellationPolicy in cancellationPolicies')).first().element(by.id('btnEditCancellationPolicy')).click();
    };

    me.saveEditedCancellationPolicyAndNavigateBackToCancellationPolicies = function () {
        element(by.id('btnEditCancellationPolicy')).click();
    };

    me.getEditedCancellationPolicyDetails = function () {
        var cancellationPolicyDetails = {};
        cancellationPolicyDetails.sid = element(by.binding('cancellationPolicy.id')).getText(),
            cancellationPolicyDetails.sname = element(by.id('name')).getAttribute('value'),
                cancellationPolicyDetails.sdescription =  element(by.id('description')).getAttribute('value')

        return cancellationPolicyDetails;
    };

};

module.exports = new cancellationPoliciesPage();