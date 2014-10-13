var request = require('request');

supplementsPage = function () {

    this.navigate = function() {
        browser.get('/supplements');
    };

    this.getNoOfSupplements = function() {
        return element.all(by.css('li')).count()
    };

    this.getRoomsRow = function(rowNumber) {
        return element.all(by.css('li')).row(rowNumber)
    };

    this.removeSupplement = function() {
        //TODO
    }

};

module.exports = new supplementsPage();