BookBlur.Views.BookShow = Backbone.View.extend({
  template: JST['books/show'],

  id: "book-show",

  className: "row",

  events: {
    "click #prev-page": "prevPage",
    "click #next-page": "nextPage"
  },

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);
  },

  prevPage: function () {
    var bookView = $("#book-container")[0]
    bookView.scrollTop -= bookView.clientHeight + 40
  },

  nextPage: function () {
    var bookView = $("#book-container")[0]
    bookView.scrollTop += bookView.clientHeight - 40
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.onRender();
    return this;
  },

  onRender: function () {
    $("#book-container").load(this.model.get('url'));
  }
});
