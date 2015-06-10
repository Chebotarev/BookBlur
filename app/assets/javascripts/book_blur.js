window.BookBlur = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new BookBlur.Routers.Router({
      $rootEl: $('#content'),
      books: BookBlur.Collections.books
    });

    var navbar = new BookBlur.Views.NavView({
      router: router
    });

    $('#nav').html(navbar.$el);
    navbar.render();
    Backbone.history.start();
  }
};
