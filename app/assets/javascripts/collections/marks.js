BookBlur.Collections.Marks = Backbone.Collection.extend({
  url: "api/marks",

  model: BookBlur.Models.Mark,

  getOrFetch: function (id) {
    var mark = this.get(id);
    var marks = this;

    if (!mark) {
      mark = new BookBlur.Models.Mark({ id: id });
      mark.fetch( {
        success: function () {
          marks.add(mark)
        }
      });
    } else {
      mark.fetch();
    }
    return mark;
  }
});
