class List < ActiveRecord::Base
  validates :title, :owner_id, presence: true
  validates :title, uniqueness: { scope: :owner_id,
    message: "List title already used" }

  belongs_to(
    :owner,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id
  )

  has_many :listings

  has_many :books, through: :listings, source: :book
end
