BookBlur.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.books = options.books;
    this.lists = options.lists;
  },

  routes: {
    "": "news",
    "search": "search",
    "list/new": "newList",
    "list/:id/edit": "editList",
    "book/:id": "show"
  },

  index: function () {
    this.books.fetch();
    var view = new BookBlur.Views.BooksIndex({
      collection: this.books
    });
    this._swapView(view)
  },

  news: function () {
    var view = new BookBlur.Views.NewsFeed();
    this._swapView(view);
  },

  newList: function () {
    var list = new BookBlur.Models.List();
    var view = new BookBlur.Views.ListForm({
      lists: this.lists,
      list: list
    });
    this._swapView(view);
  },

  editList: function (id) {
    var list = this.lists.getOrFetch(id);
    var view = new BookBlur.Views.ListForm({
      lists: this.lists,
      list: list
    });
    this._swapView(view);
  },

  show: function (id) {
    var book = this.books.getOrFetch(id);
    var view = new BookBlur.Views.BookShow({
      model: book
    });
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
