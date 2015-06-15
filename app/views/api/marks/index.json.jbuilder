json.array!(@marks) do |mark|
  json.location mark.location
  json.body mark.body
end
