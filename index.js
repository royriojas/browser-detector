var addClass = require( 'dom-add-class' );
var query = require( './lib/query' );

var env = require( './lib/parsed-ua' );

var classList = [ ],
  browser, os, device,
  engine, browserName;

// adding browser. firefox, chrome, safari, msie10, msie11, msie, edge
if ( env.browser ) {

  browser = env.browser;
  browserName = browser.name.toLowerCase();

  // in case of ie add msie instead
  if ( browserName === 'ie' ) {
    browserName = 'msie' + browser.major;
    classList.push( 'msie' );
  }

  classList.push( browserName );
}

os = env.os;
// adding os. ios android
if ( os && os.name ) {
  classList.push( os.name.toLowerCase() );
}

device = env.device;
// adding device. iphone ipad
if ( device && device.model ) {
  classList.push( device.model.toLowerCase() );
}

engine = env.engine;
if ( engine && engine.name ) {
  classList.push( engine.name.toLowerCase() );
}

if ( classList.length > 0 ) {
  var $html = query( 'html' );
  addClass( $html, classList.join( ' ' ) );
}

module.exports = env;
