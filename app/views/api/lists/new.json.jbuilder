json.extract! @list, :title, :description
json.books do
  json.array!(@list.books) do |book|
    json.id book.id
    json.title book.title
    json.author book.author
    json.url book.url
  end
end
