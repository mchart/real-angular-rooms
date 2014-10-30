var request = require('request');

supplementsPage = function () {

    var me = this;

    me.navigateToSupplements = function() {
        browser.get('/supplements');
    }

    me.getTitle = function () {
        return browser.getTitle();
    }

    me.getSubPage = function () {
        return element(by.css('h2')).getText()
    }

    me.getNoOfSupplements = function () {
        return element.all(by.repeater('supplement in supplements')).count()
    }

    me.getSupplements = function() {
        return element.all(by.repeater('supplement in supplements'))
    }

    me.getSupplementsRow = function(row) {
        return element(by.repeater('supplement in supplements').row(row))
    }

    me.removeFirstSupplement = function() {
        element.all(by.repeater('supplement in supplements')).first().element(by.id('btnRemoveSupplement')).click()
    }

    me.editSupplementAtRow = function (row) {
        var id = element(by.repeater('supplement in supplements').row(row)).element(by.binding('removeSupplement(supplement.id)'))

    }

    me.addSupplement = function() {
        element(by.id('btnRemoveSupplement')).click()

        //this.getRoomsRow(rowNumber).$('#btnNewSupplement').click()

    }

};

module.exports = new supplementsPage();