class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :book_id, null: false
      t.integer :owner_id, null: false
      t.text :body, null: false

      t.timestamps null: false
    end

    add_index :comments, :book_id
    add_index :comments, :owner_id
  end
end
