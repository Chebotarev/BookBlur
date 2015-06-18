BookBlur.Collections.Comments = Backbone.Collection.extend({

  url: "api/comments",

  model: BookBlur.Models.Comment

});

BookBlur.Collections.comments = new BookBlur.Collections.Comments();
