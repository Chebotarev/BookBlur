BookBlur.Views.MarkModal = Backbone.View.extend({
  template: JST['marks/modal'],

  events: {
    "click div.m-backdrop": "removeFade",
    "click button.close": "removeFade",
    "submit form.mark-form": "handleSubmit"
  },

  initialize: function (option) {
    this.$el.hide();
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var view = this;
    var formData = $(event.currentTarget).serializeJSON().mark;
    view.model.set(formData);
    view.model.save({}, {
      success: function () {
        view.removeFade();
      }
    });
  },

  removeFade: function () {
    this.$el.animate({
      opacity: 0
    }, 200, function() {
      this.remove();
    });
  },

  render: function () {
    var content = this.template({
      mark: this.model
    });
    this.$el.html(content);
    this.$el.fadeIn(200);
    return this;
  }
});
