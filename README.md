# Assignment 2 - Automated development process.

Name: ... Matt Hoing 20064457

## Overview.

...... The project is a continuation of this module. Labs have been worked on from the API test lab. code Quality, Webpack, Build Automation, Continuous Integration (Travis) and Selenium Web Driver. The code is pushed to a github repository.

## Environment.

    babel-core 
    babel-loader 
    chai
    chai-http
    chai-things
    clean-webpack-plugin
    coveralls
    cross-env
    css-loader
    eslint
    eslint-plugin-json
    extract-text-webpack-plugin
    file-loader
    html-webpack-plugin
    istanbul
    mocha
    mocha-lcov-reporter
    nodemon
    npm-run-all
    rimraf
    selenium-webdriver
    style-loader
    url-loader
    webpack



## Build automation.

npm test
npm run server
npm build:dev
npm run build:watch
./node_modules/.bin/webpack - builds the babel core config
node bin/www - runs the server
npm run build - rebuilds the bundle
npm run build-prod - builds the app for production
npm run start-prod - starts server in production mode
npm start - runs three scripts in sequence
npm run coverage - runs coverage tests locally
mocha test/acceptance - runs the acceptance tests


## Acceptance Testing.

test/acceptance/eventPage-test.js
test/acceptance/eventsPage-test.js
test/acceptance/homePage-test.js
test/acceptance/personPage-test.js
test/acceptance/peoplePage-test.js

Add an Event! Page
    ✓ shows the main header (54ms)
    ✓ displays the form tag
    ✓ shows Title input box
    ✓ shows input boxes
    ✓ shows the submit button

  Events Page!
    ✓ shows the main header (54ms)

  Home page
    ✓ shows the main body
    ✓ shows the nav bar
    ✓ shows the buttons (78ms)
    ✓ shows the main image

  People Page!
    ✓ shows the main header (47ms)

  Add an Person! Page
    ✓ shows the main header (120ms)
    ✓ displays the form tag
    ✓ shows input boxes
    ✓ shows the add person button


  15 passing (11s)

  ## Continuous Integration.

https://travis-ci.org/m1r9h71/Agile2_With_Travis


## Extra features.
. . . . Briefly state and extra features of your testing that you feel should be high-lighted . . . . .
