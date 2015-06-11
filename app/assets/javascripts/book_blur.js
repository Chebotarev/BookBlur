window.BookBlur = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var lists = BookBlur.Collections.lists;
    lists.fetch();

    var router = new BookBlur.Routers.Router({
      $rootEl: $('#content'),
      books: BookBlur.Collections.books
    });

    var navbar = new BookBlur.Views.NavView({
      router: router
    });

    $('#nav').html(navbar.$el);
    navbar.render();

    var sidebar = new BookBlur.Views.SidebarView({
      router: router,
      lists: lists
    });

    $('#sidebar').html(sidebar.$el);
    sidebar.render();

    Backbone.history.start();
  }
};
