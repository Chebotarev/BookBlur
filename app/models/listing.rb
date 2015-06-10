class Listing < ActiveRecord::Base
  validates :list_id, :book_id, presence: true

  belongs_to :list
  belongs_to :book
end
