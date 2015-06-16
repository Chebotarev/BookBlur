BookBlur.Views.FooterView = Backbone.CompositeView.extend({
  template: JST['footer'],

  attributes: {
    "id": "inner-footer"
  },

  events: {
    "click button#expand-social": "expandSocial",
    "click button#collapse-social": "collapseSocial"
  },

  collapseSocial: function (event) {
    $btn = $(event.currentTarget)
    $btn.removeAttr('id');
    $btn.attr('id', 'expand-social');

    $btn.children().
      removeClass("glyphicon-menu-down").
      addClass("glyphicon-menu-up");

    this.socialView.remove();
  },

  expandSocial: function (event) {
    $btn = $(event.currentTarget)
    $btn.removeAttr('id');
    $btn.attr('id', 'collapse-social');

    $btn.children().
      removeClass("glyphicon-menu-up").
      addClass("glyphicon-menu-down");

    var view = new BookBlur.Views.Social();
    $("footer#footer-bar").append(view.$el);
    view.render();
    this.socialView = view;
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
