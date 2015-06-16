BookBlur.Views.MarkModal = Backbone.View.extend({
  template: JST['marks/modal'],

  events: {
    "click .m-backdrop": "remove",
    "click button.close": "remove",
    "submit form.mark-form": "handleSubmit"
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var view = this;
    var formData = $(event.currentTarget).serializeJSON().mark;
    view.model.set(formData);
    view.model.save({}, {
      success: function () {
        view.remove();
      }
    })
  },

  render: function () {
    var content = this.template({
      mark: this.model
    });
    this.$el.html(content);
    return this;
  }
});
