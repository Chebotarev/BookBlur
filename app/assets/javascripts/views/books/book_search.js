BookBlur.Views.BookSearch = Backbone.View.extend({
  template: JST['books/search'],

  className: "container search-container",

  events: {
    "click .search-result": "listMenu"
  },

  listMenu: function (event) {
    event.preventDefault();
    var $target = $(event.target);
    debugger
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.onRender();
    return this;
  },

  onRender: function () {
    $("div.search-container").bookSearch();
  }
});
