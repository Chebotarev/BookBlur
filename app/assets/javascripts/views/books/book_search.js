BookBlur.Views.BookSearch = Backbone.CompositeView.extend({
  template: JST['books/search'],

  events: {
    "keyup input": "getResults"
  },

  initialize: function (options) {
    if (options.resultAddable === undefined) {
      this.resultAddable = false;
    } else {
      this.resultAddable = options.resultAddable;
    }

    if (options.resultLinked === undefined) {
      this.resultLinked = false;
    } else {
      this.resultLinked = options.resultLinked;
    }
  },

  getResults: function (event) {
    if (event.keyCode !== 16) {
      var view = this;
      view.eachSubview(view.removeResult.bind(view));
      $.ajax({
        url: "api/books/search",
        dataType: "json",
        data: { query: $(event.target).val() },
        success: view.addAllResults.bind(view)
      })
    }
  },

  addAllResults: function (books) {
    books.forEach(function (book) {
      this.addResult(book);
    }.bind(this));
  },

  addResult: function (book) {
    var subview = new BookBlur.Views.BookSearchResult({
      model: book,
      addable: this.resultAddable,
      linked: this.resultLinked
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
