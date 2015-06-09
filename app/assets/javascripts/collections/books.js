BookBlur.Collections.Books = Backbone.Collection.extend({

  url: "/api/books",
  model: BookBlur.Models.Book,

  getOrFetch: function (id) {
    var book = this.get(id);
    var books = this;

    if (!book) {
      book = new BookBlur.Models.Book({ id: id });
      book.fetch( {
        success: function () {
          books.add(book)
        }
      });
    } else {
      book.fetch();
    }
    return book;
  }

});

BookBlur.Collections.books = new BookBlur.Collections.Books();
