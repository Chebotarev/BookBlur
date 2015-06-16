BookBlur.Views.FooterView = Backbone.View.extend({
  template: JST['footer'],

  className: "container-fluid",

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});
