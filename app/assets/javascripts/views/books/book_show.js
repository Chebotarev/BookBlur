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

  indexElements: function () {
    $("#book-container").children().each(function (idx, el) {
      $(el).wrap("<div class='row'></div>");
      $(el).before("<div class='col-xs-1'></div>");
      $(el).wrap("<div class='col-xs-11'></div>");
      $(el).parent().data("location", idx);
    });
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.onRender();
    return this;
  },

  onRender: function () {
    var view = this;
    $("#book-container").load(view.model.get('url'), view.indexElements);
  }
});
