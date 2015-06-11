BookBlur.Views.ListsIndexItem = Backbone.View.extend({
  template: JST['lists/index_item'],

  className: "panel panel-default",

  render: function () {
    var content = this.template({
      list: this.model
    });
    this.$el.html(content);
    return this;
  }
});
