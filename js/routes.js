var routes = [
  {
    path: '/',
    componentUrl: './views/home.html',
  },
  {
    path: '/home/',
    componentUrl: './views/home.html',
    name: 'home'
  },
  {
    path: '/crew/:id/:rev',
    componentUrl: './views/crew.html',
    name: 'crew',
  },
  {
    path: '/list/:id/:rev',
    componentUrl: './views/list.html',
    name: 'list',
  },
  {
    path: '/client/:id/:rev',
    componentUrl: './views/client-sign.html',
    name: 'client'
  }
];
