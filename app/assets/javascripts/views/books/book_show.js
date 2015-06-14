BookBlur.Views.BookShow = Backbone.View.extend({
  template: JST['books/show'],

  id: "book-container",

  events: {

  },

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.onRender();
    return this;
  },

  onRender: function () {
    this.$el.load(this.model.get('url'));
  }
});
