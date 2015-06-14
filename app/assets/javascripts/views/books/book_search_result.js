BookBlur.Views.BookSearchResult = Backbone.View.extend({
  template: JST['books/search_result'],

  tagName: "a",

  className: "list-group-item",

  initialize: function (options) {
    this.addable = options.addable;

    if (options.linked) {
      this.$el.attr("href", "#book/" + this.model.id);
    }
  },

  render: function () {
    var content = this.template({
      book: this.model,
      isAddable: this.addable
    });
    this.$el.html(content);
    return this;
  }
});
