BookBlur.Views.ListsIndexItem = Backbone.CompositeView.extend({
  template: JST['lists/index_item'],

  className: "panel panel-default",

  render: function () {
    var content = this.template({
      list: this.model
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
