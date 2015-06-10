BookBlur.Views.BookSearch = Backbone.View.extend({
  template: JST['books/search'],

  className: "container search-container",

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.onRender();
    return this;
  },

  onRender: function () {
    // $("div.search-container").usersSearch();
  }
});
