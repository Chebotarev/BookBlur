BookBlur.Views.NavView = Backbone.CompositeView.extend({

  template: JST['navbar'],

  className: "container-fluid",

  events: {
    "click #logout": "logout"
  },

  initialize: function (options) {
    this.router = options.router;

    this.addSubview('.navbar-search', new BookBlur.Views.BookSearch({
      resultLinked: true,
      router: this.router
    }));
  },

  logout: function (event) {
    $.ajax({
      url: "/session",
      type: 'POST',
      data: {_method: 'delete'},
      success: function (html, status, object) {
        window.location = "session/new";
      }
    });
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
