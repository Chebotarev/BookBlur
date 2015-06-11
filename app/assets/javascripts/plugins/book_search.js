$.BookSearch = function (el) {
  this.$el = $(el);
  this.$input = this.$el.find('input');
  this.$results = this.$el.find('.search-results');

  this.$input.on("input", this.handleInput.bind(this));
};

$.BookSearch.prototype.handleInput = function (event) {
  if (this.$input.val() === "") {
    this.renderResults([]);
    return;
  }

  $.ajax({
    url: "api/books/search",
    dataType: "json",
    data: { query: this.$input.val() },
    success: this.renderResults.bind(this)
  })
};

$.BookSearch.prototype.renderResults = function (books) {
  this.$results.empty();
  books.forEach(function (book) {
    var $btn = $('<button>').
      addClass('btn-sm').
      addClass('btn-success').
      text("Add")

    var $a = $('<a>').
      addClass('list-group-item').
      addClass('list-group-item').
      addClass('search-result').
      attr("href", "#").
      data("id", book.id).
      text(" " + book.title);

    $a.prepend($btn);
    $a.appendTo(this.$results);

  }.bind(this));
};

$.fn.bookSearch = function () {
  return this.each(function () {
    new $.BookSearch(this);
  });
};
