BookBlur.Collections.Lists = Backbone.Collection.extend({
  url: "api/lists",
  model: BookBlur.Models.List,

  getOrFetch: function (id) {
    var list = this.get(id);
    var lists = this;

    if (!list) {
      list = new BookBlur.Models.List({ id: id });
      list.fetch( {
        success: function () {
          lists.add(list)
        }
      });
    } else {
      list.fetch();
    }
    return list;
  }
});

BookBlur.Collections.lists = new BookBlur.Collections.Lists();
