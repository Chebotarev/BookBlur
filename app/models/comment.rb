class Comment < ActiveRecord::Base
  validates :owner_id, :book_id, :body, presence: true
end
