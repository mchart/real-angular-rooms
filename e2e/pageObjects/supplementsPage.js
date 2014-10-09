var request = require('request');

supplementsPage = function () {

    this.navigate = function() {
        browser.get('/supplement');             //TODO Update for Supplement<b>s<b>
    };

    this.getNoOfSupplements = function() {
        return element.all(by.css('li')).count()
    };

    this.getRoomsRow = function(rowNumber) {
        return element.all(by.css('li')).row(rowNumber)
    };

    this.removeSupplement = function() {
        this.        me.getRoomsRow(rowNumber).$('#btnRemoveRoom').click()
    }

};

module.exports = new supplementsPage();