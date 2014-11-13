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

    me.getFirstCancellationPolicy = function () {
        var firstElement = element.all(by.repeater('cancellationPolicy in cancellationPolicies')).first();


        var id = firstElement.element(by.binding('cancellationPolicy.id')).getText();
        var name = firstElement.element(by.binding('cancellationPolicy.name')).getText();
        var description = firstElement.element(by.binding('cancellationPolicy.description')).getText();

        return {
            id: id,
            name: name,
            description: description

        }
    };

    me.navigateToFirstElement = function () {
        element.all(by.repeater('cancellationPolicy in cancellationPolicies')).first().element(by.id('btnEditCancellationPolicy')).click();
    };

    me.getCancellationPolicyInformation = function () {
        return {
            id: element(by.binding('cancellationPolicy.id')).getText(),
            name: element(by.id('name')).getAttribute('value'),
            description: element(by.id('description')).getAttribute('value')
        }
    }

};

module.exports = new cancellationPoliciesPage();