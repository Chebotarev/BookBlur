BookBlur.Views.BooksIndex = Backbone.CompositeView.extend({

  template: JST['books/index'],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render)
  },

  render: function () {
    var content = this.template({
      books: this.collection
    });
    this.$el.html(content);
    return this;
  }

});
