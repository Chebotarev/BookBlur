BookBlur.Views.Social = Backbone.CompositeView.extend({
  template: JST['social'],

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
      var view = new BookBlur.Views.MarksIndex({
        model: book
      });
      this.addSubview('div#marks-tab-content', view);

      $('div#comments-tab-content').html("<h4>Comments!</h4>");
    }
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
