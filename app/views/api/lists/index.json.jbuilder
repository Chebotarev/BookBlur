json.array!(@lists) do |list|
  if list.owner_id == current_user.id
    json.id list.id
    json.title list.title
    json.description list.description
    json.books list.books
  end
end
