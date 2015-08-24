var userAgent = require( './user-agent' );
var parser = require( 'ua-parser-js' );

module.exports = parser( userAgent );
