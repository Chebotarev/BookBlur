BookBlur.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = options.books;
  },

  routes: {
    "": "index"
  },

  index: function () {
    this.collection.fetch();
    var view = new BookBlur.Views.BooksIndex({
      collection: this.collection
    });
    this._swapView(view)
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
