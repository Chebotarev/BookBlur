BookBlur.Views.ListNew = Backbone.CompositeView.extend({
  template: JST['lists/new'],

  className: "container",

  events: {
    "submit #new-list-form": "createList",
    "submit .add-book": "addBook"
  },

  initialize: function (options) {
    this.lists = options.lists;
    this.books = options.books;

    this.addSubview('#new-form-search', new BookBlur.Views.BookSearch());
  },

  addBook: function (event) {
    event.preventDefault();
    event.stopPropagation();
    var book = $(event.currentTarget).serializeJSON().book;
    book.id = parseInt($(event.currentTarget).serializeJSON().book.id);
    var subview = new BookBlur.Views.ListedBook({
      model: book,
      collection: this.books
    });
    this.addSubview('#new-list-books', subview)
  },

  createList: function (event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON();
    var listData = formData.list;
    var list = new BookBlur.Models.List(listData);
    list.save({}, {
      success: function () {
        this.collection.add(list);
      }.bind(this)
    });
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

});
