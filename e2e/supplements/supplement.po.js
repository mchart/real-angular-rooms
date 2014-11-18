var request = require('request');

supplementsPage = function () {

    var me = this;

    me.addSupplement = function(name, price) {
        element(by.id('name')).sendKeys(name);
        element(by.id('price')).sendKeys(price);
    };

    me.saveNewSupplement = function () {
        element(by.id('btnSaveNewSupplement')).click();
    }

    me.getSupplementDetails = function() {
        var supplementDetails = {};
        supplementDetails.sid = element(by.binding('su.id')).getText();
        supplementDetails.sname = element(by.id('name')).getAttribute('value');
        supplementDetails.sprice = element(by.id('price')).getAttribute('value');
        return supplementDetails;
    };

    me.editSupplement = function (name, price) {
        var sname = element(by.id('name'));
        sname.clear();
        sname.sendKeys(name);

        var sprice = element(by.id('price'));
        sprice.clear();
        sprice.sendKeys(price);
    }

    me.saveEditedSupplement = function () {
        element(by.id('btnSaveSupplement')).click();
    };

};

module.exports = new supplementsPage();