BookBlur.Views.BookSearch = Backbone.CompositeView.extend({
  template: JST['books/search'],

  events: {
    "keydown input": "getResults"
  },

  getResults: function (event) {
    if (event.keyCode !== 16) {
      var view = this;
      view.eachSubview(view.removeResult.bind(view));

      setTimeout(function () {
        $.ajax({
          url: "api/books/search",
          dataType: "json",
          data: { query: $(event.target).val() },
          success: view.addAllResults.bind(view)
        })
      }, 0);
    }
  },

  addAllResults: function (books) {
    books.forEach(function (book) {
      this.addResult(book);
    }.bind(this));
  },

  addResult: function (book) {
    var subview = new BookBlur.Views.BookSearchResult({
      model: book
    });
    this.addSubview('.search-results', subview);
  },

  removeResult: function (subview) {
    subview.remove();
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
