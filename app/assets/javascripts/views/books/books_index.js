BookBlur.Views.BooksIndex = Backbone.CompositeView.extend({

  template: JST['books/index'],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addBook);
  },

  addBook: function (model) {
    debugger
    var book = this.collection.get(model.id)
    var subview = new BookBlur.Views.BooksIndexItem({
      collection: this.collection,
      model: book
    });
    this.addSubview(".books-index", subview);
  },

  render: function () {
    var content = this.template({
      books: this.collection
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }

});
