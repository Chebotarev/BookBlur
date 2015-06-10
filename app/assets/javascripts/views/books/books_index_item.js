BookBlur.Views.BooksIndexItem = Backbone.View.extend({
  template: JST['books/index_item'],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render)
  },

  render: function () {
    var content = this.template({
      book: this.model
    });
    this.$el.html(content);
    return this;
  }
});
