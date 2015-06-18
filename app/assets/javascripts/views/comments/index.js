BookBlur.Views.CommentsIndex = Backbone.View.extend({

  template: JST['comments/index'],

  className: "col-xs-6 col-centered",

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function () {
    var content = this.template({
      comments: this.collection
    });
    this.$el.html(content);
    return this;
  }
});
