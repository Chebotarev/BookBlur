BookBlur.Models.List = Backbone.Model.extend({
  urlRoot: "/api/lists",

  books: function () {
    if (!this._books) {
      this._books = new BookBlur.Collections.Books();
    }
    return this._books
  },

  parse: function (payload) {
    if (payload.books) {
      this.books().set(payload.books)
      delete payload.books
    }
    return payload
  }
});
