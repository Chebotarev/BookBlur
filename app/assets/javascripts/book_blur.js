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
    Backbone.history.start();
  }
};
