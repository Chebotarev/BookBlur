json.extract! @book, :title, :author, :url
json.marks do
  json.array!(@book.marks) do |mark|
    if mark.owner_id == current_user.id
      json.id mark.id
      json.location mark.location
      json.body mark.body
    end
  end
end

json.comments do
  json.array!(@book.comments) do |comment|
    json.id comment.id
    json.body comment.body
    json.created_at time_ago_in_words(comment.created_at)

    json.owner do
      json.username comment.owner.username
    end

    json.book do
      json.title comment.book.title
    end
  end
end
