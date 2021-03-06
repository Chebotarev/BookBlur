class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :author
      t.string :url, null: false

      t.timestamps null: false
    end

    add_index :books, :title
    add_index :books, :author
    add_index :books, [:title, :author, :url], unique: true
  end
end
