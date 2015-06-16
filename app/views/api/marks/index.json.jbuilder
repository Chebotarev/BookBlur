json.array!(@marks) do |mark|
  json.id mark.id
  json.location mark.location
  json.body mark.body
end
