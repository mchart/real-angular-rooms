// This is a configuration file
var extend = require('node.extend');
var privateSetup = require('./private-config.js');
var mainConfig = {};

mainConfig.adminUser = 'Administrator';
//config.adminPassword = ''; - provided through private config
mainConfig.host = 'localhost';
mainConfig.adminPort = '8091';
mainConfig.designPort = '8092';
mainConfig.bucket = 'roomsbucket';
mainConfig.password = 'breakfast';

var roomView = {
    "language" : "javascript",
    "views" : {
        "all" : {
            "map" :  "function (doc, meta) { \n if (doc.type == 'room') { \n emit(doc.id); \n } \n}"
        }
    }
};

var supplementView = {
    "language" : "javascript",
    "views" : {
        "all" : {
            "map" :  "function (doc, meta) { \n if (doc.type == 'supplement') { \n emit(doc.id); \n } \n}"
        }
    }
};

var userView = {
    "language" : "javascript",
    "views" : {
        "all" : {
            "map" :  "function (doc, meta) { \n if (doc.type == 'user') { \n emit(doc.id); \n } \n}"
        }
    }
};

var cancellationPoliciesView = {
    "language" : "javascript",
    "views" : {
        "all" : {
            "map" :  "function (doc, meta) {\n if(doc.type === 'cancellationPolicy') emit(doc.id);\n}"
        }
    }
};

mainConfig.designDocuments = [
	{
	    name: 'roomView',
	    content: JSON.stringify(roomView)
	},
    {
        name: 'supplementView',
        content: JSON.stringify(supplementView)
    },
	{
	    name: 'userView',
	    content: JSON.stringify(userView)
	},
    {
        name: 'cancellationPoliciesView',
        content: JSON.stringify(cancellationPoliciesView)
    }];

var config = extend(true, mainConfig, privateSetup);

module.exports = config;