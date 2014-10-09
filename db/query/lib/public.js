var public = {};

require('./domain/rooms')(public);
require('./domain/supplements')(public);

module.exports = public;