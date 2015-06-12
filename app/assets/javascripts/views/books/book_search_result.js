BookBlur.Views.BookSearchResult = Backbone.View.extend({
  template: JST['books/search_result'],

  tagName: "a",

  className: "list-group-item",

  render: function () {
    var content = this.template({
      book: this.model
    });
    this.$el.html(content);
    return this;
  }
});
