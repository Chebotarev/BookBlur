user1 = User.create!(
  username: "Guest",
  email: "test@example.com",
  password: "password"
)

user2 = User.create!(
  username: "notCheb",
  email: "other@example.com",
  password: "password"
)

book1 = Book.create!(
  title: "A Christmas Carol",
  author: "Charles Dickens",
  url: "http://localhost:3000/book_source/A_Christmas_Carol.html"
)

book2 = Book.create!(
  title: "Metamorphosis",
  author: "Franz Kafka",
  url: "http://localhost:3000/book_source/Metamorphosis.html"
)

book3 = Book.create!(
  title: "The Call of the Wild",
  author: "Jack London",
  url: "http://localhost:3000/book_source/The_Call_of_the_Wild.html"
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
  description: "This list does not belong to Alex"
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
