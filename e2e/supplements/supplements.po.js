var request = require('request');

supplementsPage = function () {

    var me = this;

    me.navigateToSupplements = function() {
        browser.get('/supplements');
    };

    me.getSupplements = function() {
        return element.all(by.repeater('supplement in supplements'));
    };

    me.getSubPage = function () {
        return element(by.css('h2')).getText();
    };

    me.navigateToNewSupplement = function () {
        element(by.id('btnNewSupplement')).click();
    };

    me.navigateToFirstSupplement = function () {
        element.all(by.repeater('supplement in supplements')).first().element(by.id('btnSupplementDetails')).click();
    };
    me.removeFirstSupplement = function() {
        element.all(by.repeater('supplement in supplements')).first().element(by.id('btnRemoveSupplement')).click();
    };

    me.getFirstSupplementDetails = function () {
        var firstElement = element.all(by.repeater('supplement in supplements')).first();
        var firstSupplementDetails = {
            id : firstElement.element(by.binding('supplement.id')),
            name : firstElement.element(by.binding('supplement.name')),
            price : firstElement.element(by.binding('supplement.price'))
        };

        return firstSupplementDetails;
    };

    me.sortByPrice = function () {
        element(by.id('sortByPrice')).click();
    }

};

module.exports = new supplementsPage();