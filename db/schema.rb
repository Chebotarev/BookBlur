# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150615011419) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "books", force: :cascade do |t|
    t.string   "title",      null: false
    t.string   "author"
    t.string   "url",        null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "books", ["author"], name: "index_books_on_author", using: :btree
  add_index "books", ["title", "author", "url"], name: "index_books_on_title_and_author_and_url", unique: true, using: :btree
  add_index "books", ["title"], name: "index_books_on_title", using: :btree

  create_table "listings", force: :cascade do |t|
    t.integer  "list_id",    null: false
    t.integer  "book_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "listings", ["book_id"], name: "index_listings_on_book_id", using: :btree
  add_index "listings", ["list_id"], name: "index_listings_on_list_id", using: :btree

  create_table "lists", force: :cascade do |t|
    t.string   "title",       null: false
    t.integer  "owner_id",    null: false
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "lists", ["owner_id"], name: "index_lists_on_owner_id", using: :btree
  add_index "lists", ["title", "owner_id"], name: "index_lists_on_title_and_owner_id", unique: true, using: :btree
  add_index "lists", ["title"], name: "index_lists_on_title", using: :btree

  create_table "marks", force: :cascade do |t|
    t.integer  "owner_id",   null: false
    t.integer  "book_id",    null: false
    t.integer  "location",   null: false
    t.text     "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "marks", ["book_id"], name: "index_marks_on_book_id", using: :btree
  add_index "marks", ["location"], name: "index_marks_on_location", using: :btree
  add_index "marks", ["owner_id"], name: "index_marks_on_owner_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
