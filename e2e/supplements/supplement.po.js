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
        supplementDetails.id = element(by.binding('su.id')); //element(by.binding('su.id')).getText();
        supplementDetails.name = element(by.id('name'));
        supplementDetails.price = element(by.id('price'));
        return supplementDetails;
    };

    //model('su.price')).;
    //id('su.price')).getAttribute('value');

    me.editSupplement = function (name, price) {
        var sname = element(by.id('name'));
        sname.clear();
        sname.sendKeys(name);

        var sprice = element(by.id('price'));
        sprice.clear();
        sprice.sendKeys(price);
    }

    me.saveChangesOnSupplement = function () {
        element(by.id('btnSaveChangesToSupplement')).click();
    };

};

module.exports = new supplementsPage();