BookBlur.Views.ListsIndexItem = Backbone.CompositeView.extend({
  template: JST['lists/index_item'],

  className: "panel panel-default",

  events: {
    "click .expand-list": "expand",
    "click .collapse-list": "collapse",
    "click .edit-list": "edit"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
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
    debugger
    this.removeAllBooks();
    var $target = this.$('.collapse-list');
    $target.removeClass("collapse-list");
    $target.empty();

    $target.addClass("expand-list");
    $target.append("<span class='glyphicon glyphicon-menu-right'></span>");
  },

  disbaleBtn: function ($button) {
    $button.attr("disabled", "disabled").
      removeClass("btn-info").
      addClass("btn-default");
  },

  edit: function (event) {
    this.collapse();
    Backbone.history.navigate(
      "list/" + this.model.id + "/edit",
      { trigger: true }
    );
  },

  expand: function () {
    this.addAllBooks();
    var $target = this.$('.expand-list');

    $target.removeClass("expand-list");
    $target.empty();

    $target.addClass("collapse-list");
    $target.append("<span class='glyphicon glyphicon-menu-down'></span>");
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

    if (this.model.books().length === 0) {
      this.disbaleBtn(this.$el.find('.expand-list'));
    }

    this.attachSubviews();
    return this;
  }
});
