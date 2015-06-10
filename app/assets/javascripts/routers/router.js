BookBlur.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = options.books;
  },

  routes: {
    "": "index",
    "search/": "search"
  },

  index: function () {
    this.collection.fetch();
    var view = new BookBlur.Views.BooksIndex({
      collection: this.collection
    });
    this._swapView(view)
  },

  search: function () {
    this.collection.fetch();
    var view = new BookBlur.Views.BookSearch({
      collection: this.collection
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
