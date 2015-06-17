BookBlur.Views.Social = Backbone.CompositeView.extend({
  template: JST['social'],

  className: "social-container",

  initialize: function (options) {
    this.router = options.router;

    this.listenTo(this.router, "route", this.handleRoute);
  },

  handleRoute: function (route, params) {
    if (route === "show") {
      
    }
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
