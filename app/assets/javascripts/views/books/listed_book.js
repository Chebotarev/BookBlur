BookBlur.Views.ListedBook = Backbone.View.extend({
  template: JST['books/listed'],

  tagName: "li",

  className: "list-group-item book-card",

  attributes: function() {
    return {
      "data-id": this.model.id
    }
  },

  initialize: function (options) {
    this.listenTo(this.model, "sync add", this.render);
    this.listenTo(Backbone.history, "route", this.markSelected);

    this.parseRoute(Backbone.history.getFragment());
  },

  parseRoute: function (route) {
    if (route.startsWith("book/")) {
      var bookId = parseInt(route.slice(5));
      this.markSelected({}, "show", bookId);
    }
  },

  markSelected: function (router, route, params) {
    if (route === "show" && parseInt(params) === this.model.id) {
      this.$el.addClass("selected");
    } else {
      this.$el.removeClass("selected");
    }
  },

  render: function () {
    var content = this.template({
      book: this.model
    });
    this.$el.html(content);
    return this;
  }
});
