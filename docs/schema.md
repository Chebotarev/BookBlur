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


## lists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
owner_id    | integer   | not null, foreign key (references users)
description | text      |


## listings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
list_id     | integer   | not null, foreign key (references lists)
book_id     | integer   | not null, foreign key (references books)


## bookmarks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users)
book_id     | integer   | not null, foreign key (references books)
location    | integer   | not null
body        | text      |


## comments
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
book_id           | integer   | not null, foreign key (references books)
parent_comment_id | integer   | foreign key (references comments)
body              | text      |


## tags
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
name              | string    | not null


## taggings
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
tag_id            | integer   | not null, foreign key (references tags)
book_id           | integer   | not null, foreign key (references books)
