var request = require('request');

cancellationPoliciesPage = function () {

    var me = this,
        theRepeater = 'cancellationPolicy in cancellationPolicies';

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
        return me.getAllElements(theRepeater).count();
    };

    me.getAllElements = function(theRepeater) {
        return element.all(by.repeater(theRepeater));
    };
    
    me.getElementById = function(theElement, theId){
        return theElement.element(by.id(theId));
    };

    me.getElementByBinding = function(theElement, theBinding){
        return theElement.element(by.binding(theBinding));
    };

    me.getFirstElement = function () {
        return me.getAllElements(theRepeater).first();
    };

    me.removeFirstCancellationPolicy = function() {
        var firstElement = me.getFirstElement();
        var removeButton = me.getElementById(firstElement, 'btnRemoveCancellationPolicy');
        removeButton.click();
    };

    me.navigateToFirstCancellationPolicy = function () {
        var firstElement = me.getFirstElement();
        var editButton = me.getElementById(firstElement, 'btnEditCancellationPolicy');
        editButton.click();
    };

};

module.exports = new cancellationPoliciesPage();