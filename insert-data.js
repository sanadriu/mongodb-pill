// Insert authors
db.authors.insert({ name: 'AuthorName1', lastName: 'AuthorLastname1', dateOfBirth: '1950-02-01', dateOfDeath: '2020-02-01', country: 'Spain' })

db.authors.insert({ name: 'AuthorName2', lastName: 'AuthorLastname2', dateOfBirth: '1960-02-01', country: 'Spain' })

db.authors.insert({ name: 'AuthorName3', lastName: 'AuthorLastname3', dateOfBirth: '1970-02-01', country: 'France' })

// Insert books
db.books.insert({ title: 'Book0', releaseYears: [2001, 2010], category: 'Lifestyle', authors: [{ id: '60f7a6d4f9b0299616569b90', name: 'AuthorName1', lastName: 'AuthorLastname1' }] })
db.books.insert({ title: 'Book1', releaseYears: [2001], category: 'Productivity', authors: [{ id: '60f7a6e5f9b0299616569b91', name: 'AuthorName2', lastName: 'AuthorLastname2' }] })
db.books.insert({ title: 'Book2', releaseYears: [1999], category: 'Lifestyle', authors: [{ id: '60f7a6d4f9b0299616569b90', name: 'AuthorName1', lastName: 'AuthorLastname1' }, { id: '60f7a6e5f9b0299616569b91', name: 'AuthorName2', lastName: 'AuthorLastname2' }] })
db.books.insert({ title: 'Book3', releaseYears: [2010], category: 'Lifestyle', authors: [{ id: '60f7a6d4f9b0299616569b90', name: 'AuthorName1', lastName: 'AuthorLastname1' }] })
db.books.insert({ title: 'Book4', releaseYears: [2010, 2015], category: 'Cooking', authors: [{ id: '60f7a6d4f9b0299616569b90', name: 'AuthorName1', lastName: 'AuthorLastname1' }] })
db.books.insert({ title: 'Book5', releaseYears: [1991, 2010], category: 'Sports', authors: [{ id: '60f7a6e5f9b0299616569b91', name: 'AuthorName2', lastName: 'AuthorLastname2' }] })
db.books.insert({ title: 'Book6', releaseYears: [1995], category: 'Romance', authors: [{ id: '60f7a6faf9b0299616569b92', name: 'AuthorName3', lastName: 'AuthorLastname3' }] })
db.books.insert({ title: 'Book7', releaseYears: [2011], category: 'History', authors: [{ id: '60f7a6faf9b0299616569b92', name: 'AuthorName3', lastName: 'AuthorLastname3' }] })
db.books.insert({ title: 'Book8', releaseYears: [2011, 2020], category: 'Cooking', authors: [{ id: '60f7a6d4f9b0299616569b90', name: 'AuthorName1', lastName: 'AuthorLastname1' }] })
db.books.insert({ title: 'Book9', releaseYears: [2021], category: 'History', authors: [{ id: '60f7a6e5f9b0299616569b91', name: 'AuthorName2', lastName: 'AuthorLastname2' }] })
