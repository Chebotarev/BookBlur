BookBlur.Views.FooterView = Backbone.CompositeView.extend({
  template: JST['footer'],

  attributes: {
    "id": "inner-footer"
  },

  className: "row",

  events: {
    "click button#expand-social": "expandSocial",
    "click button#collapse-social": "collapseSocial"
  },

  initialize: function (options) {
    this.router = options.router;
    this.books = options.books;

    this.listenTo(this.router, "route", this.handleRoute);
  },

  collapseSocial: function (event, btn) {
    $btn = $(event.currentTarget) || btn;
    $btn.removeAttr('id');
    $btn.attr('id', 'expand-social');

    $btn.children().
      removeClass("glyphicon-menu-down").
      addClass("glyphicon-menu-up");

    this.socialView.$el.hide("slide", { direction: "down" }, 500);
  },

  expandSocial: function (event) {
    $btn = $(event.currentTarget)
    $btn.removeAttr('id');
    $btn.attr('id', 'collapse-social');

    $btn.children().
      removeClass("glyphicon-menu-up").
      addClass("glyphicon-menu-down");

    this.socialView.$el.show("slide", { direction: "down" }, 500);
  },

  handleRoute: function (route, params) {
    if (route !== "show") {
      if (!this.socialView.$el.hasClass("hidden")) {
        $("button#collapse-social").click();
      }
      this.$("button.toggle-view").attr("disabled", "disabled");
      this.$("button#toggle-bookmark").attr("disabled", "disabled");
      this.$("button#post-comment").attr("disabled", "disabled");
    } else {
      this.$("button.toggle-view").removeAttr("disabled");
      this.$("button#toggle-bookmark").removeAttr("disabled");
      this.$("button#post-comment").removeAttr("disabled");
    }
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.onRender();
    return this;
  },

  onRender: function () {
    var view = new BookBlur.Views.Social({
      router: this.router,
      books: this.books
    });

    $("footer#footer-bar").append(view.$el);
    view.$el.toggle();
    view.render();

    this.socialView = view;
  }
});
