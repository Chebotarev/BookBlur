BookBlur.Views.MarksIndex = Backbone.View.extend({

  template: JST['marks/index'],

  className: "col-xs-6 tabbed-content",

  events: {
    "click a.bookmark-link": "scrollMark"
  },

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);
  },

  scrollMark: function (event) {
    event.preventDefault();
    var location = $(event.currentTarget).data('location');
    var $target = $('div.book-row').eq(location);
    
    $target.animatescroll({
      element: 'div#book-container',
      scrollSpeed: 2000,
      easing:'easeInOutQuint'
    });
  },

  render: function () {
    var content = this.template({
      book: this.model,
      marks: this.model.marks()
    });
    this.$el.html(content);
    return this;
  }

});
