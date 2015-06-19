BookBlur.Views.BookInfo = Backbone.CompositeView.extend({
  template: JST['book_info'],

  className: "container social-container",

  initialize: function (options) {
    this.router = options.router;
    this.books = options.books;

    this.listenTo(this.router, "route", this.handleRoute.bind(this));
  },

  handleRoute: function (route, params) {
    this.eachSubview(function (subview) {
      subview.remove();
    });

    if (route === "show") {
      var book = this.books.getOrFetch(params[0]);
      var marksView = new BookBlur.Views.MarksIndex({
        model: book
      });
      this.addSubview('div#marks-tab-content', marksView);

      var commentsView = new BookBlur.Views.CommentsIndex({
        collection: book.comments()
      });
      this.addSubview('div#comments-tab-content', commentsView);
    }
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
