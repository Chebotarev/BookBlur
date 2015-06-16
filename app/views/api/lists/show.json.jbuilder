json.extract! @list, :id, :title, :description
json.books do
  json.array!(@list.books) do |book|
    json.extract! book, :id, :title, :author
  end
end
