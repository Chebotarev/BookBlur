BookBlur.Views.NewsFeed = Backbone.View.extend({
  template: JST['news'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});
