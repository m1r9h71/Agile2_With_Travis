var chai = require('chai');
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');
var expect = chai.expect;
var until = webdriver.until;
var By = webdriver.By;

var driver;
var mochaTimeOut = 30000;

var pageSelector;


test.describe('Add an Person! Page', function() {
    this.timeout(mochaTimeOut);
    test.before( function() {
        driver = new webdriver.Builder()
            .withCapabilities( webdriver.Capabilities.chrome() )
            .build();
        pageSelector = By.id('person'); 
        driver.get('http://localhost:3000/#/person');
        driver.wait(until.elementLocated(By.tagName('h1')), 2000);
    });
    
    test.beforeEach( function() {
        driver.get('http://localhost:3000/#/person');
        driver.wait(until.elementLocated(pageSelector), 2000);
    } );
    test.it( 'shows the main header', function() {
        driver.findElement(By.tagName('h1')).then( function( element ) {
            element.getText().then(function(text) {
                expect(text).to.equal('Add a Person');
            });
        });
    } );


    test.it( 'displays the form tag', function() {
        driver.findElement(By.tagName('form'))
            .then( function( element ) {
                expect(element).to.not.equal(null);
            });
    } );


    test.it('shows input boxes', function(){
        driver.findElement(By.className('form-control'))
            .then(function(elements){
                expect(elements).to.not.equal('null');
                
            });
    });

    test.it('shows the add person button', function(){
        driver.findElement(By.tagName('button'))
            .then(function(element){
                expect(element).to.not.equal(null);
            });
            


    });
    

    test.afterEach( function() {
        driver.manage().deleteAllCookies() ;
    } );
 
    test.after(function() {
        driver.quit();
    });
});


