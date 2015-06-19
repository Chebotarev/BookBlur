BookBlur.Views.CommentsIndex = Backbone.CompositeView.extend({

  template: JST['comments/index'],

  className: "col-xs-6 col-centered",

  initialize: function (options) {
    this.listenTo(this.collection, "sync", this.addAllCommentsIndexItems);
    this.listenTo(this.collection, "add", this.addCommentIndexItem);
  },

  addAllCommentsIndexItems: function () {
    this.eachSubview(function (subview) {
      subview.remove();
    });
    
    this.collection.each(function (comment) {
      this.addCommentIndexItem(comment);
    }.bind(this));
  },

  addCommentIndexItem: function (comment) {
    var subview = new BookBlur.Views.CommentsIndexItem({
      model: comment,
      owner: comment.get('owner'),
      book: comment.get('book')
    });

    this.addSubview('#comment-index-items', subview);
  },

  render: function () {
    var content = this.template({
      comments: this.collection
    });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
