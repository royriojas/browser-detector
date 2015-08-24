var userAgent = require( './lib/user-agent' );
var parser = require( 'ua-parser-js' );

module.exports = parser( userAgent );
