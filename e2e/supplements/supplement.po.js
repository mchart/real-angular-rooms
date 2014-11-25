var request = require('request');

supplementsPage = function () {

    var me = this;

    me.addSupplement = function(name, price) {
        element(by.id('name')).sendKeys(name);
        element(by.id('price')).sendKeys(price);
    };

    me.clickNewSupplementButton = function () {
        element(by.id('btnSaveNewSupplement')).click();
    };

    me.clickEditSupplementButton = function () {
        element(by.id('btnSaveChangesToSupplement')).click();
    };

    me.getSupplementDetails = function() {
        var supplementDetails = {
            id : element(by.binding('su.id')),
            name : element(by.model('su.name')),
            price : element(by.model('su.price'))

        };
        return supplementDetails;
    };

    //model('su.price')).;
    //id('su.price')).getAttribute('value');

    me.editSupplement = function (name, price) {
        var sname = element(by.model('su.name'));
        sname.clear();
        sname.sendKeys(name);

        var sprice = element(by.model('su.price'));
        sprice.clear();
        sprice.sendKeys(price);
    };

    me.navigateBack = function () {
        element(by.id('back')).click()
    }

};

module.exports = new supplementsPage();