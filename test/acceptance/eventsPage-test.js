var chai = require('chai');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
var expect = chai.expect;
var until = webdriver.until;
var By = webdriver.By;

var driver;
var mochaTimeOut = 30000;

var pageSelector;

test.describe('Events Page!', function() {
    this.timeout(mochaTimeOut);
    test.before( function() {
        driver = new webdriver.Builder()
            .withCapabilities( webdriver.Capabilities.chrome() )
            .build();
        pageSelector = By.id('events');
    } );
    test.beforeEach( function() {
        driver.get('http://localhost:3000/#/events');
        driver.wait(until.elementLocated(pageSelector), 2000);
    } );

    test.it( 'shows the main header', function() {
        driver.findElement(By.tagName('h1')).then( function( element ) {
            element.getText().then(function(text) {
                expect(text).to.equal('List All Events');
            });
        });
    } );

    /*test.it( 'displays the events', function() {
        var events = driver.findElements(By.tagName('tr'));
        // 1st event title should be agile
        events
            .then(function( elements ) {
                return elements[0].findElement(By.name('title'));
            })
            .then(function(element) {
                return element.getText();
            })
            .then(function(text) {
                expect(text).to.equal('agile');
            } );
        // 2nd event title should be testTitle
        events
            .then( function( elements ) {
                return elements[1].findElement(By.name('title'));
            })
            .then(function(element) {
                return element.getText();
            })
            .then(function(text) {
                expect(text).to.equal('testTitle');
            } );           
    } );*/

    test.afterEach( function() {
        driver.manage().deleteAllCookies() ;
    } );
 
    test.after(function() {
        driver.quit();
    });
});


