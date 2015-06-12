BookBlur.Views.BooksIndexItem = Backbone.View.extend({
  template: JST['books/index_item'],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render)

    this.$('.book_container').load("http://localhost:3000/book_source/Metamorphosis.html")
  },

  render: function () {
    var content = this.template({
      book: this.model
    });
    this.$el.html(content);
    return this;
  }
});
