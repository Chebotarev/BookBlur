BookBlur.Views.ListsIndex = Backbone.CompositeView.extend({

  template: JST['lists/index'],

  events: {
    "click .book-card": "showBook"
  },

  initialize: function () {
    this.listenTo(this.collection, "reset", this.addAllListIndexItems);
    this.listenTo(this.collection, "add", this.addListIndexItem);
  },

  addAllListIndexItems: function (lists) {
    lists.each(function (list) {
      this.addListIndexItem(list);
    }.bind(this));
  },

  addListIndexItem: function (list) {
    var subView = new BookBlur.Views.ListsIndexItem({
      model: list
    });
    this.addSubview('#list-index-items', subView)
  },

  showBook: function (event) {
    var bookId = $(event.currentTarget).data('id');
    Backbone.history.navigate("book/" + bookId, { trigger: true });
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }

});
