BookBlur.Views.ListNew = Backbone.View.extend({
  template: JST['lists/new'],

  className: "container",

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.onRender();
    return this;
  },

  onRender: function () {
    $(".search-container").bookSearch();
  }
});
