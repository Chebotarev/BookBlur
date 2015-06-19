json.array!(@comments) do |comment|
  json.extract! comment, :id, :body

  json.created_at time_ago_in_words(comment.created_at)

  owner = comment.owner

  json.owner do
    json.id owner.id
    json.username owner.username
  end

  json.book comment.book
end
