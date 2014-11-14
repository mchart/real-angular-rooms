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
        supplementDetails.sid = element(by.binding('es.id')).getText();
        supplementDetails.sname = element(by.id('name')).getAttribute('value');
        supplementDetails.sprice = element(by.id('price')).getAttribute('value');
        return supplementDetails;
    };

    me.saveEditedSupplementAndNavigateBackToSupplements = function () {
        element(by.id('btnSaveSupplement')).click();
    };

    me.editSupplement = function (name, price) {
        var sname = element(by.id('name'));
        sname.clear();
        sname.sendKeys(name);

        var sprice = element(by.id('price'));
        sprice.clear();
        sprice.sendKeys(price);
    }

};

module.exports = new supplementsPage();