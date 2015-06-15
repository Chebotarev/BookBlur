BookBlur.Views.ListNew = Backbone.CompositeView.extend({
  template: JST['lists/new'],

  className: "container",

  events: {
    "submit #new-list-form": "createList",
    "submit .add-book": "addBook",
    "click .remove-book": "removeBook"
  },

  initialize: function (options) {
    this.lists = options.lists;
    this.books = options.books;

    this.book_ids = [];
    this.addSubview('#new-form-search', new BookBlur.Views.BookSearch({
      resultAddable: true
    }));
  },

  addBook: function (event) {
    event.preventDefault();
    event.stopPropagation();
    var book = $(event.currentTarget).serializeJSON().book;
    book.id = parseInt($(event.currentTarget).serializeJSON().book.id);
    this.book_ids.push(book.id);
    var subview = new BookBlur.Views.ListedBook({
      model: new BookBlur.Models.Book(book),
      removable: true
      // collection: this.books
    });
    this.addSubview('#new-list-books', subview);
  },

  createList: function (event) {
    event.preventDefault();
    var view = this;
    var formData = $(event.currentTarget).serializeJSON();
    formData.list['book_ids'] = view.book_ids;
    var list = new BookBlur.Models.List(formData);
    list.save({}, {
      success: function () {
        view.lists.add(list);
      }
    });
  },

  removeBook: function (event) {
    var $target = $(event.currentTarget);
    var targetId = $target.attr("data-id");
    var index = this.book_ids.indexOf(parseInt(targetId));
    if (index !== -1) {
      this.book_ids.splice(index, 1);
    }
    $target.parent().remove();
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

});
