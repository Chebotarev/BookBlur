BookBlur.Views.MarkModal = Backbone.View.extend({
  template: JST['marks/modal'],

  events: {
    "click .m-backdrop": "remove"
  },

  initialize: function () {
  },

  render: function () {
    var content = this.template({
      mark: this.model
    });
    this.$el.html(content);
    return this;
  }
});
