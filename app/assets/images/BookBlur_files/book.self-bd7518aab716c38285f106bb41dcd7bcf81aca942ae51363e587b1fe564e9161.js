BookBlur.Models.Book = Backbone.Model.extend({
  urlRoot: "/api/books",

  marks: function () {
    if (!this._marks) {
      this._marks = new BookBlur.Collections.Marks();
    }
    return this._marks
  },

  parse: function (payload) {
    if (payload.marks) {
      this.marks().set(payload.marks)
      delete payload.marks
    }
    return payload
  }
});
