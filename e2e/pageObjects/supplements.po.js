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

    me.openFirstSupplement = function () {
//        element(by.repeater('supplement in supplements').row(rowNumber)).element(by.id('btnEditSupplement')).click();
        var firstElement = element.all(by.repeater('supplement in supplements')).first();
        var sid =   firstElement.element(by.binding('supplement.id'));
        var sname = firstElement.element(by.binding('supplement.name'));
        var sprice = firstElement.element(by.binding('supplement.price'));
        firstElement.element(by.id('btnEditSupplement')).click();
        console.log('***************YADDAYADDAYADDA*****************');
        console.log('////////SID ' + sid);
        console.log('////////SName ' + sname);
        console.log('////////SPrice ' + sprice);

        element(by.id('name')).getText().then(function(text) {
            console.log(text);
        });
        element(by.id('price')).getText().then(function(text) {
            console.log(text);
        });

//        element.all(by.repeater('supplement in supplements')).first().element(by.id('btnRemoveSupplement')).click();
//        var id = element(by.repeater('supplement in supplements').row(row)).element(by.binding('removeSupplement(supplement.id)'));
//        communicate with DB check if supplement.id = id exists
//        update supplement with new data
//        check data was correctly updated
//        return true
    };
};

module.exports = new supplementsPage();