//Eliminate all the books for a given author
db.books.remove({ 'authors.name': 'AuthorName3' })

//Eliminate all the death authors
db.authors.remove({ dateOfDeath: { $exists: true } })