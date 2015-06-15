BookBlur.Collections.Marks = Backbone.Collection.extend({
  url: "api/marks",

  model: BookBlur.Models.Mark,

  initialize: function (models, options) {
    this.book = options.book;
  }

});
