BookBlur.Views.Social = Backbone.CompositeView.extend({
  template: JST['social'],

  className: "social-container",

  events: {
    "click a#bookmarks-social-tab": "showMarks",
    "click a#comments-social-tab": "showComments"
  },

  showMarks: function (event) {
    event.preventDefault();
    
  },

  showComments: function (event) {
    event.preventDefault();
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
