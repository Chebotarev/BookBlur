BookBlur.Views.CommentsIndexItem = Backbone.View.extend({
  template: JST['comments/index_item'],

  tagName: "li",

  className: "list-group-item comment-card",

  initialize: function (options) {
    this.owner = options.owner;
    this.book = options.book;
  },

  render: function () {
    var content = this.template({
      comment: this.model,
      owner: this.owner,
      book: this.book
    });
    this.$el.html(content);
    return this;
  }
});
