u1 = User.create!(
  username: "cheb",
  email: "test@example.com",
  password: "password"
)

u2 = User.create!(
  username: "notCheb",
  email: "other@example.com",
  password: "password"
)

b1 = Book.create!(
  title: "A Christmas Carol",
  author: "Charles Dickens",
  url: "./app/assets/books/A_Christmas_Carol.html"
)

b2 = Book.create!(
  title: "Metamorphosis",
  author: "Franz Kafka",
  url: "./app/assets/books/Metamorphosis.html"
)

b3 = Book.create!(
  title: "The Call of the Wild",
  author: "Jack London",
  url: "./app/assets/books/The_Call_of_the_Wild.html"
)
