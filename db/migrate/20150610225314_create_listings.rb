class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.integer :list_id, null: false
      t.integer :book_id, null: false

      t.timestamps null: false
    end

    add_index :listings, :list_id
    add_index :listings, :book_id
  end
end
