var request = require('request');

supplementsPage = function () {

    this.navigate = function() {
        browser.get('/supplements');
    };

    this.getSupplements = function() {
        return element.all(by.repeater('supplement in supplements'))
    }

    this.getSupplementsRow = function(row) {
        return element(by.repeater('supplement in supplements').row(row))
    }

    this.removeFirstSupplement = function() {
        element.all(by.repeater('supplement in supplements')).first().element(by.id('btnRemoveSupplement')).click()
    }

};

module.exports = new supplementsPage();