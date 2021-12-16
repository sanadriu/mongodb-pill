db.authors.update({ name: 'AuthorName1' }, { $set: { dateOfDeath: '2021-02-01' } });

db.books.update({ title: 'Book6' }, { $push: { releaseYears: 2005 } })

db.books.update({ title: 'Book9' }, { $set: { title: 'Book9 New Edition' } })