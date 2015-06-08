# BookBlur

<!-- [Heroku link][heroku]

[heroku]: temp -->

## Minimum Viable Product
BookBlur is clone of NewsBlur for reading and sharing open-source books. Users can:

- [ ] Create accounts
- [ ] Create sessions (log in)
- [ ] View book content
- [ ] Search for books
- [ ] Create reading lists
- [ ] Create and view bookmarks
- [ ] Attach notes to bookmarks
- [ ] Post comments on books
- [ ] Tag books with genres


## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication and Book Display (~ 1 day)
I will write my own authentication system for creating users and logging in according to the best practices taught at App Academy. I will scrape some seed data to work with from the Gutenberg Project, and display them in HTML format on login. By the end of this phase, I will be sure that I can retrieve content and deploy to Heroku.

[Details][phase-one]

### Phase 2: Reading Lists and Book Search (~ 1.5 days)
I will implement a search feature for books by title as a jQuery plugin (possibly through a third party gem). Each result should have a button to allow adding the book to a particular list. The first option should be to create a new reading list.

[Details][phase-two]

### Phase 3: Book Navigation with an Index (~ 2.5 days)
I will create the view for the book navigation page (the landing page after login). It will display the reading list index for the current user, with the book titles in each list. Clicking on the titles will display the book contents in the book show section. This functionality will be controlled by a Backbone app that has models and collections corresponding to lists and books.

[Details][phase-three]

### Phase 4: Bookmarks and Notes (~ 2 days)
I will add models for bookmarks and notes into the Backbone app. Bookmarks will be added dynamically with click event handlers on paragraph tags in the book content section. Notes will be associated with bookmarks and expanded when a bookmark is highlighted. A list of bookmarks for the current book will be displayed in the Book Info section.

[Details][phase-four]

### Phase 5: Comments and Tags on Books (~ 1 day)
I will add the ability for users to leave comments and tags on books in their collection. Comments will have a polymorphic association to allow for replies to comments. The Book Info section will have tabs to switch between Bookmarks and Comments.

[Details][phase-five]

### Bonus Features (TBD)
- [ ] Integrate with the [Gutenberg Project][gutenberg] for content
- [ ] Drag and drop books into reading lists
- [ ] User avatars and profile settings
- [ ] Search for other users and friend them
- [ ] See friend's bookmarks and notes
- [ ] Live feed of friend comments on displayed book
- [ ] Keep library updated through Gutenberg RSS feed
- [ ] Select books by tag/genre
- [ ] Random book recommendations


[gutenberg]: https://www.gutenberg.org/

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
