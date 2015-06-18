json.array!(@comments) do |comment|
  json.extract! comment, :id, :body

  json.created_at comment.created_at
  
  owner = comment.owner

  json.owner do
    json.id owner.id
    json.username owner.username
  end
end
