BookBlur.Views.BookSearch = Backbone.View.extend({
  template: JST['books/search'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});
