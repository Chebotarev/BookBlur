BookBlur.Views.BooksIndex = Backbone.CompositeView.extend({

  template: JST['books/index'],

  className: "books-index",

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "sync", this.addAllBooks);
  },

  addAllBooks: function (collection) {
    collection.each(function (book) {
      this.addBook(book)
    }.bind(this));
  },

  addBook: function (model) {
    var book = this.collection.get(model.id)
    var subview = new BookBlur.Views.BooksIndexItem({
      collection: this.collection,
      model: book
    });
    this.addSubview("#books-index", subview);
  },

  render: function () {
    // var content = this.template({
    //   books: this.collection
    // });
    var content = "Hello"
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }

});
