window.BookBlur = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var lists = BookBlur.Collections.lists;
    var comments = BookBlur.Collections.comments;

    var router = new BookBlur.Routers.Router({
      $rootEl: $('#content'),
      books: BookBlur.Collections.books,
      lists: lists,
      comments: comments
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

    var footer = new BookBlur.Views.FooterView({
      router: router,
      books: BookBlur.Collections.books
    });

    $('#footer-bar').html(footer.$el);
    footer.render();

    Backbone.history.start();
  }
};
