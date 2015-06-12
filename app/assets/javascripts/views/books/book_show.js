BookBlur.Views.BookShow = Backbone.View.extend({
  template: JST['books/show'],

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({
      book: this.model
    });
    this.$el.html(content);
    this.onRender();
    return this;
  },

  onRender: function () {
    $('#book-container').load(this.model.get('url'));
  }
});
