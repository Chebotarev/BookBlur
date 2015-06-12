BookBlur.Views.ListsIndexItem = Backbone.CompositeView.extend({
  template: JST['lists/index_item'],

  className: "panel panel-default",

  initialize: function () {
    this.listenTo(this.model.books(), "sync", this.render);

    this.addAllBooks();
  },

  addAllBooks: function (event) {
    var books = this.model.books();
    books.each(function (book) {
      this.addBook(book);
    }.bind(this));
  },

  addBook: function (book) {
    var subview = new BookBlur.Views.ListedBook({
      model: book
    })
    this.addSubview('.books-list', subview);
    this.render();
  },

  render: function () {
    var content = this.template({
      list: this.model
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
