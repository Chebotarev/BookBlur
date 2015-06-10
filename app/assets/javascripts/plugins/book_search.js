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
    var $a = $('<a>').addClass('list-group-item').
      addClass('list-group-item-success').
      attr("href", "#").
      text(book.title);
      
    $a.appendTo(this.$results);

  }.bind(this));
};

$.fn.bookSearch = function () {
  return this.each(function () {
    new $.BookSearch(this);
  });
};
