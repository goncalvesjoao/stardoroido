window.React = require('react');
window.ReactRouter = require('react-router');
window.Stardoroido = require('../../src');

// Configuring Stardoroido
// window.appConfig is being populated on public/index.html
// that in turn is being populated by spa/config/spa.js#appConfig entry.
Object.assign(window.Stardoroido.config, window.appConfig);

// Bootstraping your single page app
const { createHistory, useBasename } = require('history');
const history = useBasename(createHistory)({
  basename: document.baseURI.substring(window.location.origin.length, document.baseURI.length - 1),
});
require('react-dom').render(
  React.createElement(ReactRouter.Router, {
    history: history,
    routes: require('./spa').routes,
  }),
  document.getElementById('spa')
);
