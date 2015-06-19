BookBlur.Models.Book = Backbone.Model.extend({
  urlRoot: "/api/books",

  marks: function () {
    if (!this._marks) {
      this._marks = new BookBlur.Collections.Marks();
    }
    return this._marks;
  },

  comments: function () {
    if (!this._comments) {
      this._comments = new BookBlur.Collections.Comments();
    }
    return this._comments;
  },

  parse: function (payload) {
    if (payload.marks) {
      this.marks().set(payload.marks);
      delete payload.marks;
    }

    if (payload.comments) {
      this.comments().set(payload.comments);
      delete payload.comments;
    }
    return payload;
  }
});
