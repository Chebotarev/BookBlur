BookBlur.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.books = options.books;
  },

  routes: {
    "": "index",
    "search": "search",
    "list/new": "newList"
  },

  index: function () {
    this.books.fetch();
    var view = new BookBlur.Views.BooksIndex({
      collection: this.books
    });
    this._swapView(view)
  },

  newList: function () {
    var view = new BookBlur.Views.ListNew();
    this._swapView(view);
  },

  search: function () {
    this.books.fetch();
    var view = new BookBlur.Views.BookSearch({
      collection: this.books
    });
    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});
