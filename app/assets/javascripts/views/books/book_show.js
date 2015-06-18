BookBlur.Views.BookShow = Backbone.View.extend({
  template: JST['books/show'],

  id: "book-show",

  className: "row",

  events: {
    "click #prev-page": "prevPage",
    "click #next-page": "nextPage",
    "click span.bookmark": "showBookmark"
  },

  initialize: function (options) {
    this.bookmarking = false;
    $("#toggle-bookmark").on("click", this.toggleMark.bind(this));

    this.listenTo(this.model, "sync", this.render);
  },

  addNewBookmark: function (event) {
    var $target = $(event.currentTarget).parent();
    var newMark = new BookBlur.Models.Mark({
      book_id: parseInt(Backbone.history.fragment.slice(5)),
      location: $target.data('location')
    });

    this.toggleMark();

    newMark.save({}, {
      success: function () {
        this.renderBookmark($target, newMark.id, false);
      }.bind(this)
    });
  },

  getBookmarks: function () {
    this.model.marks().each(function (mark) {
      var $target = $(".book-row").eq(mark.attributes.location);
      var hasNote = true;
      if (mark.escape('body') !== "" && mark.escape('body') !== undefined) {
        hasNote = false;
      }
      this.renderBookmark($target, mark.id, hasNote);
    }.bind(this));
  },

  indexElements: function () {
    $("#book-container").children().each(function (idx, el) {
      var $el = $(el);
      $el.wrap("<div class='row book-row'></div>");
      $el.before("<div class='col-xs-1 bookmark-col'></div>");
      $el.wrap("<div class='col-xs-11 book-col'></div>");
      $el.parent().parent().data("location", idx);
    });

    this.getBookmarks();
  },

  prevPage: function () {
    var bookView = $("#book-container")[0]
    bookView.scrollTop -= bookView.clientHeight - 40
  },

  nextPage: function () {
    var bookView = $("#book-container")[0]
    bookView.scrollTop += bookView.clientHeight - 40
  },

  showBookmark: function (event) {
    var markId = $(event.currentTarget).data('id');
    var mark = this.model.marks().getOrFetch(markId);
    var view = new BookBlur.Views.MarkModal({
      model: mark
    });

    $("div#book-show").append(view.$el);
    view.render();
  },

  toggleMark: function (event) {
    var $toggleBtn = $("#toggle-bookmark");

    if (this.bookmarking) {
      $toggleBtn.removeClass('grey');
      $toggleBtn.blur();
      $(".book-col").css('cursor','default').off("click");
      this.bookmarking = false;
    } else {
      $toggleBtn.addClass('grey');
      $toggleBtn.blur();
      $(".book-col").css('cursor','pointer').on("click", this.addNewBookmark.bind(this));
      this.bookmarking = true;
    }
  },

  renderBookmark: function ($targetParent, id, hasNote) {
    var $target = $targetParent.children().first();
    var $bookmark = $("<span class='glyphicon glyphicon-bookmark bookmark'></span>");
    $bookmark.data("id", id);

    $target.append($bookmark);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.onRender();
    return this;
  },

  onRender: function () {
    var view = this;

    // setTimeout to see CSS Spinner
    setTimeout(function () {
    $("#book-container").load(view.model.get('url'),
      view.indexElements.bind(view));
    }, 2000);
  }
});
