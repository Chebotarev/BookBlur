BookBlur.Views.MarksIndex = Backbone.View.extend({

  template: JST['marks/index'],

  className: "col-xs-6 tabbed-content",

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.marks(), "add", this.render);
  },

  render: function () {
    var content = this.template({
      book: this.model,
      marks: this.model.marks()
    });
    this.$el.html(content);
    return this;
  }

});
