BookBlur.Views.Social = Backbone.CompositeView.extend({
  template: JST['social'],

  className: "social-container",

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
