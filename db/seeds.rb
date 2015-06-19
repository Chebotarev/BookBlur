user1 = User.create!(
  username: "Guest",
  email: "test@example.com",
  password: "password"
)

user2 = User.create!(
  username: "Not Guest",
  email: "other@example.com",
  password: "password"
)

book1 = Book.create!(
  title: "The War of the Worlds",
  author: "H.G. Wells",
  url: "https://res.cloudinary.com/bookblur/raw/upload/The_War_of_the_Worlds_ra2pic.html"
)

book2 = Book.create!(
  title: "Metamorphosis",
  author: "Franz Kafka",
  url: "https://res.cloudinary.com/bookblur/raw/upload/Metamorphosis_ygmmry.html"
)

book3 = Book.create!(
  title: "The Call of the Wild",
  author: "Jack London",
  url: "https://res.cloudinary.com/bookblur/raw/upload/The_Call_of_the_Wild_okmo7q.html"
)

list1 = List.create!(
  title: "One Book, No Desc",
  owner_id: user1.id
)

list2 = List.create!(
  title: "Many Books, With Desc",
  owner_id: user1.id,
  description: "This Reading List has two books! And a description!"
)

list3 = List.create!(
  title: "No Books Here",
  owner_id: user1.id,
  description: "This list has no books"
)

list4 = List.create!(
  title: "Not My List",
  owner_id: user2.id,
  description: "This list does not belong to Guest"
)

listing1 = Listing.create!(
  list_id: list1.id,
  book_id: book1.id
)

listing2 = Listing.create!(
  list_id: list2.id,
  book_id: book2.id
)

listing3 = Listing.create!(
  list_id: list2.id,
  book_id: book3.id
)

mark1 = Mark.create!(
  owner_id: user1.id,
  book_id: book1.id,
  location: 1
)

mark2 = Mark.create!(
  owner_id: user1.id,
  book_id: book2.id,
  location: 2
)

mark3 = Mark.create!(
  owner_id: user1.id,
  book_id: book1.id,
  location: 3,
  body: "Super cool bookmark!"
)

mark4 = Mark.create!(
  owner_id: user2.id,
  book_id: book2.id,
  location: 4,
  body: "Not my bookmark"
)

comment1 = Comment.create!(
  owner_id: user1.id,
  book_id: book1.id,
  body: "The War of the Worlds is a great book!"
)


comment2 = Comment.create!(
  owner_id: user1.id,
  book_id: book2.id,
  body: "Metamorphosis is also super cool!"
)


comment3 = Comment.create!(
  owner_id: user1.id,
  book_id: book2.id,
  body: "Second comment on Metamorphosis"
)


comment4 = Comment.create!(
  owner_id: user2.id,
  book_id: book2.id,
  body: "Not my comment"
)
