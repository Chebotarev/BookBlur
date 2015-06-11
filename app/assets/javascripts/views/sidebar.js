BookBlur.Views.SidebarView = Backbone.CompositeView.extend({
  template: JST['sidebar'],

  className: "sidebar-contents",

  initialize: function (options) {
    this.router = options.router;
    this.lists = options.lists;

    this.lists.fetch();

    var listIndex = new BookBlur.Views.ListsIndex({
      collection: this.lists
    });
    this.addSubview('#lists-index', listIndex);

  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
