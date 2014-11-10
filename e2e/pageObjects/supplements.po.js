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

//    me.getSupplementDetailsByBinding = function () {
//        var firstElement = element.all(by.repeater('supplement in supplements')).first();
//
//        var supplementDetails = {};
//
//        firstElement.element(by.binding('supplement.id')).getText().then(function(text) {
//            console.log(text);
//            supplementDetails.sid = text;
//        });
//
//        firstElement.element(by.binding('supplement.name')).getText().then(function(text) {
//            console.log(text);
//            supplementDetails.sname = text;
//        });
//
//        firstElement.element(by.binding('supplement.price')).getText().then(function(text) {
//            console.log(text);
//            supplementDetails.sprice = text;
//        });
//
//        console.log(supplementDetails);
//        return supplementDetails;
//    };

    me.getDataByBinding = function (su, data) {
        return su.element(by.binding(data)).getText().then(function(text) {
            console.log(text);
            return text;
        });
    };

    me.getFirstSupplementIdByBinding = function () {
        return this.getDataByBinding(this.getFirstSupplement(), 'supplement.id');
    };

    me.getFirstSupplementNameByBinding = function () {
        return this.getDataByBinding(this.getFirstSupplement(), 'supplement.name');
    };

    me.getFirstSupplementPriceByBinding = function () {
        return this.getDataByBinding(this.getFirstSupplement(), 'supplement.price');
    };

    me.navigateToSupplementDetails = function () {
        element.all(by.repeater('supplement in supplements')).first().element(by.id('btnSupplementDetails')).click();
    };

    me.getDataByID = function (data) {
        return element(by.id(data)).getText().then(function(text) {
            console.log(text);
            return text;
        });
    };

    me.getFirstSupplementIdById = function () {
        return this.getDataByID('id');
    };

    me.getFirstSupplementNameById = function () {
        return this.getDataByID('name');
    };

    me.getFirstSupplementPriceById = function () {
        return this.getDataByID('price');
    };

    //Is it working? Test that it finds the element
    me.getName = function () {
        return element(by.id('name'));
    }

};

module.exports = new supplementsPage();