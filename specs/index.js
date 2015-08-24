describe( 'browser-detector', function () {
  var proxyquire = require( 'proxyquire' ).noCallThru();

  it( 'should not add any classes if no info was detected', function () {
    var mockEnv = { };
    var me = this;
    var sandbox = me.sandbox;
    var addClassSpy = sandbox.spy();

    proxyquire( '../', {
      //'./lib/user-agent': 'some user agent',
      './lib/query': function () {
        return { };
      },
      './lib/parsed-ua': mockEnv,
      'dom-add-class': addClassSpy
    } );

    expect( addClassSpy ).to.not.have.been.called;

  } );

  it( 'should add the clasess for the given recognized browser', function () {
    var mockEnv = {
      browser: {
        name: 'chrome'
      }
    };
    var me = this;
    var sandbox = me.sandbox;
    var addClassSpy = sandbox.spy();

    var env = proxyquire( '../', {
      //'./lib/user-agent': 'some user agent',
      './lib/query': function () {
        return { };
      },
      './lib/parsed-ua': mockEnv,
      'dom-add-class': addClassSpy
    } );

    expect( addClassSpy ).to.have.been.calledWith( sandbox.match( { } ), sandbox.match( 'chrome' ) );
    expect( env.browser.name ).to.equal( 'chrome' );

  } );

  it( 'should detect properly ie browsers', function () {
    var mockEnv = {
      browser: {
        name: 'ie',
        major: '10'
      }
    };
    var me = this;
    var sandbox = me.sandbox;
    var addClassSpy = sandbox.spy();

    var env = proxyquire( '../', {
      //'./lib/user-agent': 'some user agent',
      './lib/query': function () {
        return { };
      },
      './lib/parsed-ua': mockEnv,
      'dom-add-class': addClassSpy
    } );

    expect( addClassSpy ).to.have.been.calledWith( sandbox.match( { } ), sandbox.match( 'msie msie10' ) );
    expect( env.browser.name ).to.equal( 'ie' );

  } );

  it( 'should detect properly the os when the name is available', function () {
    var mockEnv = {
      os: {
        name: 'iOS'
      }
    };
    var me = this;
    var sandbox = me.sandbox;
    var addClassSpy = sandbox.spy();

    proxyquire( '../', {
      //'./lib/user-agent': 'some user agent',
      './lib/query': function () {
        return { };
      },
      './lib/parsed-ua': mockEnv,
      'dom-add-class': addClassSpy
    } );

    expect( addClassSpy ).to.have.been.calledWith( sandbox.match( { } ), sandbox.match( 'ios' ) );

  } );

  it( 'should detect properly the os when the name is available', function () {
    var mockEnv = {
      device: {
        model: 'ipad'
      }
    };

    var me = this;
    var sandbox = me.sandbox;
    var addClassSpy = sandbox.spy();

    proxyquire( '../', {
      //'./lib/user-agent': 'some user agent',
      './lib/query': function () {
        return { };
      },
      './lib/parsed-ua': mockEnv,
      'dom-add-class': addClassSpy
    } );

    expect( addClassSpy ).to.have.been.calledWith( sandbox.match( { } ), sandbox.match( 'ipad' ) );

  } );

  it( 'should detect properly the os when the name is available', function () {
    var mockEnv = {
      engine: {
        name: 'webkit'
      }
    };

    var me = this;
    var sandbox = me.sandbox;
    var addClassSpy = sandbox.spy();

    proxyquire( '../', {
      //'./lib/user-agent': 'some user agent',
      './lib/query': function () {
        return { };
      },
      './lib/parsed-ua': mockEnv,
      'dom-add-class': addClassSpy
    } );

    expect( addClassSpy ).to.have.been.calledWith( sandbox.match( { } ), sandbox.match( 'webkit' ) );

  } );

} );
