'use strict';

var db = require('rooms-db-query');

module.exports = function(server){
    server.get('/supplements', function(req, res, next) {
        db.supplements.getList(function(supplements) {
            res.send(200, supplements);
            return next();
        });
    });

    server.del('/supplements/:id', function (req, res, next) {
        var id = parseInt(req.params.id);

        db.supplements.delete(id, function() {
            res.send();
            return next();
        });
    });

};