class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.string :title, null: false
      t.integer :owner_id, null: false
      t.text :description

      t.timestamps null: false
    end

    add_index :lists, :title
    add_index :lists, :owner_id
    add_index :lists, [:title, :owner_id], unique: true
  end
end
