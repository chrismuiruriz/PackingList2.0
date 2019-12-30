// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'ke.co.nellions.packinglist',
  root: '#app',
  theme: theme,
  cache: false,
  view: {
    pushState: false,
    xhrCache: false,
  },
  routes: routes
});

var mainView = app.views.create('.view-main', {
  url: '/'
});

// Initialize Couch DB
var db = new PouchDB('packinglistv3');
var remoteCouch = false;


