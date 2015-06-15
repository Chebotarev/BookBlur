json.extract! @book, :title, :author, :url
json.marks do
  json.array!(@book.marks) do |mark|
    if mark.owner_id == current_user.id
      json.location mark.location
      json.body mark.body
    end
  end
end
