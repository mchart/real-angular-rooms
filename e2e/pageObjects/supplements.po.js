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

    me.getFirstSupplementDetails = function () {
        var firstElement = element.all(by.repeater('supplement in supplements')).first();
        var firstSupplementDetails = {};
        firstSupplementDetails.sid = firstElement.element(by.binding('supplement.id')).getText();
        firstSupplementDetails.sname = firstElement.element(by.binding('supplement.name')).getText();
        firstSupplementDetails.sprice = firstElement.element(by.binding('supplement.price')).getText();
        return firstSupplementDetails;
    };

    me.navigateToFirstSupplement = function () {
        element.all(by.repeater('supplement in supplements')).first().element(by.id('btnSupplementDetails')).click();
    };

    me.getEditedSupplementDetails = function() {
        var supplementDetails = {};

        //supplementDetails.sid = element(by.id('id'));
        supplementDetails.sname = element(by.id('name')).getAttribute('value');
        console.log(supplementDetails.sname)
        supplementDetails.sprice = element(by.id('price'));
        console.log(supplementDetails.sprice)

        element(by.id('btnSaveSupplement')).click();
    };

    me.editSupplement = function (name, price) {
        element(by.id('name')).sendKeys(name);
        element(by.id('price')).sendKeys(price);
        element(by.id('btnSaveNewSupplement')).click();
    }

};

module.exports = new supplementsPage();