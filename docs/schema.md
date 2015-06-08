# Schema Information

## users
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
username          | string    | not null, unique, indexed
email             | string    | not null, unique, indexed
password-digest   | string    | not null
session-token     | string    | not null, unique


## books
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
author      | string    |
url         | string    | not null


## comments
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
commentable_id    | integer   | not null, foreign key (polymorphic)
commentable_type  | string    | not null, polymorphic type
body              | text      |


## bookmarks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users)
book_id     | integer   | not null, foreign key (references books)
paragraph   | integer   | not null


## notes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users)
bookmark_id | integer   | not null, foreign key (references bookmarks)
body        | text      |
