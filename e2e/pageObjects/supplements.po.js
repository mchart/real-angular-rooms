var request = require('request');

supplementsPage = function () {

    var me = this;

    me.navigateToSupplements = function() {
        browser.get('/supplements');
    };

    me.getTitle = function () {
        return browser.getTitle();
    };

    me.getSubPage = function () {
        return element(by.css('h2')).getText();
    };

    me.getNoOfSupplements = function () {
        return element.all(by.repeater('supplement in supplements')).count();
    };

    me.getSupplements = function() {
        return element.all(by.repeater('supplement in supplements'));
    };

    me.getFirstSupplement = function () {
        return element.all(by.repeater('supplement in supplements')).first();
    };

    me.getSupplementsRow = function(row) {
        return element(by.repeater('supplement in supplements').row(row));
    };

    me.removeFirstSupplement = function() {
        element.all(by.repeater('supplement in supplements')).first().element(by.id('btnRemoveSupplement')).click();
    };

    me.addSupplement = function() {
        element(by.id('btnNewSupplement')).click();
        element(by.id('name')).sendKeys('testSupplement');
        element(by.id('price')).sendKeys('42');
        element(by.id('btnSaveNewSupplement')).click();
    };

    me.editSupplement = function() {
        element.all(by.repeater('supplement in supplements')).first().element(by.id('btnSupplementDetails')).click();
        element(by.id('name')).sendKeys('EDITED');
//        element(by.id('price')).sendKeys('11:40');
//        element(by.id('btnSaveNewSupplement')).click();
    };

    me.getName = function () {
        element(by.id('name'));
    };

};

module.exports = new supplementsPage();