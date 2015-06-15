class Mark < ActiveRecord::Base
  validates :owner_id, :book_id, :location, presence: true

  belongs_to :book
  
  belongs_to(
    :owner,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id
  )
end
