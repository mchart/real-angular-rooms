var public = {};

require('./domain/rooms')(public);
require('./domain/cancellationPolicies')(public);

module.exports = public;