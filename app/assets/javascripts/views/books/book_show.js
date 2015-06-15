BookBlur.Views.BookShow = Backbone.View.extend({
  template: JST['books/show'],

  id: "book-show",

  className: "row",

  events: {
    "click #prev-page": "prevPage",
    "click #next-page": "nextPage",
    "click .book-col": "addNewBookmark"
  },

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);
  },

  addNewBookmark: function (event) {
    var $target = $(event.currentTarget).parent();
    $target.children().
      first().
      append("<span class='glyphicon glyphicon-bookmark bookmark'></span>");
  },

  getBookmarks: function () {
    this.model.marks().each(function (mark) {
      var $target = $(".book-row").eq(mark.attributes.location);
      $target.children().first().append("<span class='glyphicon glyphicon-bookmark bookmark'></span>");
    }.bind(this));
  },

  indexElements: function () {
    $("#book-container").children().each(function (idx, el) {
      $(el).wrap("<div class='row book-row'></div>");
      $(el).before("<div class='col-xs-1 bookmark-col'></div>");
      $(el).wrap("<div class='col-xs-11 book-col'></div>");
      $(el).parent().parent().data("location", idx);
    });

    this.getBookmarks();
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
    $("#book-container").load(view.model.get('url'),
      view.indexElements.bind(view));
  }
});
