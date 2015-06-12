class Listing < ActiveRecord::Base
  validates :book_id, :list, presence: true

  belongs_to :list
  belongs_to :book
end
