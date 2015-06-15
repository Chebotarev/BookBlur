json.array! @books do |book|
  json.extract!(book, :id, :title, :author, :url)

  json.marks do
    json.array!(book.marks) do |mark|
      if mark.owner_id == current_user.id
        json.extract! mark, :id, :location, :body
      end
    end
  end
end
