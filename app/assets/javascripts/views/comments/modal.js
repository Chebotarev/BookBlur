BookBlur.Views.CommentModal = Backbone.View.extend({
  template: JST['comments/modal'],

  events: {
    "click div.m-backdrop": "removeFade",
    "click button.close": "removeFade",
    "submit form.comment-form": "handleSubmit"
  },

  initialize: function () {
    this.$el.hide();
  },

  handleSubmit: function (event) {
    event.preventDefault();
  },

  removeFade: function () {
    this.$el.animate({
      opacity: 0
    }, 200, function() {
      this.remove();
    });
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.$el.fadeIn(200);
    return this;
  }
});
