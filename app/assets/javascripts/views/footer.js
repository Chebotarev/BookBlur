BookBlur.Views.FooterView = Backbone.View.extend({
  template: JST['footer'],

  className: "container",

  events: {
    "click button#expand-social": "expandSocial"
  },

  expandSocial: function () {
    debugger
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});
