Router.route('/', {
  name: 'home'
});

Router.route('/books', {
  name: 'books'
});

Router.configure({
  layoutTemplate: 'layout'
});