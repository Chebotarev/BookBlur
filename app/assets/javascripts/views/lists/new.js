BookBlur.Views.ListNew = Backbone.CompositeView.extend({
  template: JST['lists/new'],

  className: "container",

  events: {
    "submit #new-list-form": "createList",
    // "click .add-book-btn": "addBook"
  },

  initialize: function (options) {
    this.addSubview('#new-form-search', new BookBlur.Views.BookSearch());
  },

  // addBook: function (event) {
  //   var bookData = $(event.currentTarget).data();
  //
  //   if (true) {
  //     var $li = $('<li>').
  //       addClass('list-group-item').
  //       text(bookData.title)
  //     $li.appendTo('#new-list-books')
  //   }
  // },

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
