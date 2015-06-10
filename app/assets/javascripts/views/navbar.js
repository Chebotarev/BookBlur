BookBlur.Views.NavView = Backbone.View.extend({

  template: JST['navbar'],

  events: {
    "click #logout": "logout"
  },

  initialize: function (options) {
    this.router = options.router;
  },

  logout: function (event) {
    $.ajax({
      url: "/session",
      type: 'POST',
      data: {_method: 'delete'},
      success: function (html, status, object) {
        window.location = "session/new"
      }
    });

  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});
