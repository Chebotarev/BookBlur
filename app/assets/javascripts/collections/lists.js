BookBlur.Collections.Lists = Backbone.Collection.extend({
  url: "api/lists",
  model: BookBlur.Models.List
});

BookBlur.Collections.lists = new BookBlur.Collections.Lists();
