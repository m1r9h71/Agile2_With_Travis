var chai = require('chai');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
var expect = chai.expect;
var until = webdriver.until;
var By = webdriver.By;

var driver;
var mochaTimeOut = 30000; 

var pageSelector ;
var navBarSelector ;

test.describe('Home page', function() {
    this.timeout(mochaTimeOut);
    test.before( function() {
        driver = new webdriver.Builder()
            .withCapabilities( webdriver.Capabilities.chrome() )
            .build();
        pageSelector = By.id('home');
        navBarSelector = By.tagName('nav');
    } );
    test.beforeEach( function() {
        driver.get('http://localhost:3000');
        driver.wait(until.elementLocated(pageSelector), 2000);
    } );
    test.it('shows the main body', function() {   
        driver.findElement(pageSelector)
            .then(function(element) {
                expect(element).to.not.equal(null );
            });
    });

    test.it( 'shows the nav bar', function() {
        driver.findElement(navBarSelector)
            .then(function(element) {
                expect(element).to.not.equal(null );
            });
    } );

    test.it( 'shows the buttons', function() {
        driver.findElements(By.tagName('button')).then(function(elements) {
            expect(elements).to.not.equal(null ); 
            elements[0].getText().then(function(text) {
                expect(text).to.equal('Register');
            } )  ;
            elements[1].getText().then(function(text) {
                expect(text).to.equal('Log In');
            } )  ;
        });
    } );

    test.it( 'shows the main image', function() {
        driver.findElement(By.tagName('img')).then(function(element) {
            element.getAttribute('src').then(function(text) {
                expect(text).to.equal(
                    'http://localhost:3000/public/images/marguerite.jpg');
            } );  
        });
    } );
    test.after(function() {
        driver.quit();
    });
});


