BookBlur.Views.ListsIndexItem = Backbone.CompositeView.extend({
  template: JST['lists/index_item'],

  className: "panel panel-default",

  events: {
    "click .expand-list": "expand",
    "click .collapse-list": "collapse"
  },

  initialize: function () {
    this.listenTo(this.model.books(), "sync", this.render);
  },

  addAllBooks: function () {
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

  collapse: function () {
    this.removeAllBooks();
    var $target = this.$('.collapse-list');
    $target.removeClass("collapse-list");
    $target.removeClass("glyphicon-menu-down");

    $target.addClass("expand-list");
    $target.addClass("glyphicon-menu-right");

  },

  expand: function () {
    this.addAllBooks();
    var $target = this.$('.expand-list');

    $target.removeClass("expand-list");
    $target.removeClass("glyphicon-menu-right");

    $target.addClass("collapse-list");
    $target.addClass("glyphicon-menu-down");
  },

  removeAllBooks: function () {
    this.model.books().each(function (book) {
      this.removeModelSubview('.books-list', book);
    }.bind(this));
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
