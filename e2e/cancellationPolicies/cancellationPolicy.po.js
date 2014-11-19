var request = require('request');

cancellationPolicyPage = function () {

    var me = this;

    me.addCancellationPolicy = function() {
        element(by.id('btnNewCancellationPolicy')).click();
        element(by.id('name')).sendKeys('Name');
        element(by.id('description')).sendKeys('This is the description');
        element(by.id('btnSaveNewCancellationPolicy')).click();
    };

    me.getEditedCancellationPolicyDetails = function () {
        var cancellationPolicyDetails = {};
        cancellationPolicyDetails.sid = element(by.binding('cancellationPolicy.id')).getText(),
            cancellationPolicyDetails.sname = element(by.id('name')).getAttribute('value'),
            cancellationPolicyDetails.sdescription =  element(by.id('description')).getAttribute('value')

        return cancellationPolicyDetails;
    };

    me.editCancellationPolicy = function (name, description) {
        var sname = element(by.id('name'));
        sname.clear();
        sname.sendKeys(name);

        var sdescription = element(by.id('description'));
        sdescription.clear();
        sdescription.sendKeys(description);
    };

    me.saveEditedCancellationPolicyAndNavigateBackToCancellationPolicies = function () {
        element(by.id('btnEditCancellationPolicy')).click();
    };

};

module.exports = new cancellationPolicyPage();