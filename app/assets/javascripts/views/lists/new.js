BookBlur.Views.ListNew = Backbone.View.extend({
  template: JST['lists/new'],

  className: "container",

  events: {
    "submit #new-list-form": "createList"
  },

  createList: function (event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON();
    var listData = formData.list;
    var list = new BookBlur.Models.List(listData);
    list.save({}, {
      success: function () {
        this.collection.add(list);
      }.bind(this)
    });
  },

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
