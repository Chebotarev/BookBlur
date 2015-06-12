BookBlur.Views.ListedBook = Backbone.View.extend({
  template: JST['books/listed'],

  tagName: "li",

  className: "list-group-item",

  initialize: function (options) {
    this.listenTo(this.model, "sync add", this.render);
  },

  render: function () {
    var content = this.template({
      book: this.model
    });
    this.$el.html(content);
    return this;
  }
});
