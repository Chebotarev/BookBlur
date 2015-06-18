class Comment < ActiveRecord::Base
  validates :owner_id, :book_id, :body, presence: true

  belongs_to(
    :owner,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id
  )

  belongs_to :book
end
