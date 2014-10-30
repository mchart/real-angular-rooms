// set up ======================================================================
var restify = require('restify'),
 Logger = require('bunyan');

exports.start = function(config) {

    var log = new Logger.createLogger({
            name: 'app-name',
            serializers: {
                req: Logger.stdSerializers.req
            }
        }),
        server = restify.createServer({
            name: 'app-name',
            version: '0.1.0',
            log: log
        });



    server.use(restify.bodyParser())

    require('./rest/rooms')(server);
    require('./rest/cancellationPolicies')(server);
    require('./rest/supplements')(server);
	require('./rest/authentication')(server);

    server.listen(config.port, function() {
        console.log('%s listening at %s', server.name, server.url);
    });
};
