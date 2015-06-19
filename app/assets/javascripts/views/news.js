BookBlur.Views.NewsFeed = Backbone.CompositeView.extend({
  template: JST['news'],

  className: "container",

  attributes: {
    "id": "news-feed"
  },

  initialize: function (options) {
    this.comments = options.comments;

    this.addCommentsIndex();
  },

  addCommentsIndex: function () {
    var subview = new BookBlur.Views.CommentsIndex({
      collection: this.comments
    })
    this.addSubview('div#comments-container', subview);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
