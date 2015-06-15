BookBlur.Views.BookShow = Backbone.View.extend({
  template: JST['books/show'],

  id: "book-show",

  className: "row",

  events: {
    "click #prev-page": "prevPage",
    "click #next-page": "nextPage",
    "click .book-row": "addBookmark"
  },

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);
  },

  addBookmark: function (event) {
    var $target = $(event.currentTarget);
    $target.children().
      first().
      append("<div class='glyphicon glyphicon-bookmark'></div>");
  },

  indexElements: function () {
    $("#book-container").children().each(function (idx, el) {
      $(el).wrap("<div class='row book-row'></div>");
      $(el).before("<div class='col-xs-1 bookmark-col'></div>");
      $(el).wrap("<div class='col-xs-11 book-col'></div>");
      $(el).parent().parent().data("location", idx);
    });
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
    var view = this;
    $("#book-container").load(view.model.get('url'), view.indexElements);
  }
});
