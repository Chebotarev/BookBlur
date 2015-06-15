class Book < ActiveRecord::Base
  validates :title, :url, presence: true
  validates :title, uniqueness: { scope: :author,
    message: "Book already exists"}

  has_many :listings

  has_many :lists

  has_many :marks
end
