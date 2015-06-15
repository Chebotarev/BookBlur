class CreateMarks < ActiveRecord::Migration
  def change
    create_table :marks do |t|
      t.integer :owner_id, null: false
      t.integer :book_id, null: false
      t.integer :location, null: false
      t.text :body

      t.timestamps null: false
    end

    add_index :marks, :owner_id
    add_index :marks, :book_id
    add_index :marks, :location
  end
end
