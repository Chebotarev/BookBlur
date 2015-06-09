class Book < ActiveRecord::Base
  validates :title, :url, presence: true
  validates :title, uniqueness: { scope: :author,
    message: "Book already exists"}
end
