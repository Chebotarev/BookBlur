BookBlur.Views.ListsIndex = Backbone.CompositeView.extend({

  template: JST['lists/index'],

  initialize: function () {
    this.listenTo(this.collection, "sync add", this.render);
    this.listenTo(this.collection, "reset", this.addAllListIndexItems);
    this.listenTo(this.collection, "add", this.addListIndexItem);
  },

  addAllListIndexItems: function (lists) {
    lists.each(function (list) {
      this.addListIndexItem(list);
    }.bind(this));
  },

  addListIndexItem: function (list) {
    list.books().fetch();
    var subView = new BookBlur.Views.ListsIndexItem({
      model: list
    });
    this.addSubview('#list-index-items', subView)
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }

});
