BookBlur.Views.ListsIndexItem = Backbone.View.extend({
  template: JST['lists/index_item'],

  tagName: "li",

  className: "list-group-item",

  render: function () {
    var content = this.template({
      list: this.model
    });
    this.$el.html(content);
    return this;
  }
});
