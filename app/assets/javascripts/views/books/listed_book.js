BookBlur.Views.ListedBook = Backbone.View.extend({
  template: JST['books/listed'],

  tagName: "li",

  className: "list-group-item book-card",

  attributes: function() {
    return {
      "data-id": this.model.id
    }
  },

  initialize: function (options) {
    this.listenTo(this.model, "sync add", this.render);

    this.on("click", this.showBook);
  },

  render: function () {
    var content = this.template({
      book: this.model
    });
    this.$el.html(content);
    return this;
  }
});
