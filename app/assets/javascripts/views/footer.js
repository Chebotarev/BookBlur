BookBlur.Views.FooterView = Backbone.View.extend({
  template: JST['footer'],

  className: "centered-btns",

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});
