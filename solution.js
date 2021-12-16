use("books");

db.authors.drop();
db.books.drop();

// -- Insert data --

// Insert at least 3 authors with the following fields

// Name: String
// Last name: String
// Date of Birth: Date
// Date of death: Date
// Country: String

db.authors.insertMany([
	{
		_id: 1,
		firstName: "Nicholas",
		lastName: "Berger",
		country: "Brazil",
		dateOfBirth: new Date("1981-03-27"),
		dateOfDeath: new Date("2021-12-29"),
	},
	{
		_id: 2,
		firstName: "Ima",
		lastName: "Floyd",
		country: "Nigeria",
		dateOfBirth: new Date("1983-09-10"),
		dateOfDeath: new Date("2021-08-14"),
	},
	{
		_id: 3,
		firstName: "Kitra",
		lastName: "Welch",
		country: "Chile",
		dateOfBirth: new Date("1982-11-09"),
		dateOfDeath: new Date("2022-05-03"),
	},
	{
		_id: 4,
		firstName: "Ivor",
		lastName: "Gentry",
		country: "Russian Federation",
		dateOfBirth: new Date("1983-08-10"),
		dateOfDeath: new Date("2021-07-31"),
	},
	{
		_id: 5,
		firstName: "Kim",
		lastName: "Burris",
		country: "Pakistan",
		dateOfBirth: new Date("1981-01-14"),
		dateOfDeath: new Date("2021-02-25"),
	},
	{
		_id: 6,
		firstName: "Rina",
		lastName: "Maldonado",
		country: "Brazil",
		dateOfBirth: new Date("1985-05-01"),
		dateOfDeath: null,
	},
	{
		_id: 7,
		firstName: "Graham",
		lastName: "Hickman",
		country: "Sweden",
		dateOfBirth: new Date("1981-08-15"),
		dateOfDeath: null,
	},
	{
		_id: 8,
		firstName: "Rogan",
		lastName: "Garrett",
		country: "Poland",
		dateOfBirth: new Date("1983-08-23"),
		dateOfDeath: null,
	},
	{
		_id: 9,
		firstName: "Keane",
		lastName: "Porter",
		country: "Vietnam",
		dateOfBirth: new Date("1981-04-16"),
		dateOfDeath: null,
	},
	{
		_id: 10,
		firstName: "Kaseem",
		lastName: "Calhoun",
		country: "Nigeria",
		dateOfBirth: new Date("1984-04-23"),
		dateOfDeath: null,
	},
]);

// Insert at least 10 books with the following fields:

// Title: String
// Release Year: [Date]
// Category: String
// Authors (id, name, lastName): [{id, name, lastName}, … ]

db.books.insertMany([
	{
		_id: 1,
		title: "nunc sed libero.",
		releaseDate: new Date("2016-04-26"),
		category: "Non fiction",
		authors: [],
	},
	{
		_id: 2,
		title: "vel,",
		releaseDate: new Date("2016-01-07"),
		category: "Fantasy",
		authors: [9, 3],
	},
	{
		_id: 3,
		title: "auctor, nunc nulla",
		releaseDate: new Date("2011-02-15"),
		category: "Fiction",
		authors: [3, 4, 2],
	},
	{
		_id: 4,
		title: "egestas hendrerit neque.",
		releaseDate: new Date("2012-08-20"),
		category: "Drama",
		authors: [],
	},
	{
		_id: 5,
		title: "elementum, lorem",
		releaseDate: new Date("2001-07-18"),
		category: "Fiction",
		authors: [6, 10, 3],
	},
	{
		_id: 6,
		title: "Sed id risus",
		releaseDate: new Date("2000-11-16"),
		category: "Fantasy",
		authors: [8, 1],
	},
	{
		_id: 7,
		title: "mauris blandit",
		releaseDate: new Date("2014-11-29"),
		category: "Drama",
		authors: [4, 10, 8],
	},
	{
		_id: 8,
		title: "nisi",
		releaseDate: new Date("2013-11-19"),
		category: "Drama",
		authors: [7],
	},
	{
		_id: 9,
		title: "sit amet ultricies sem",
		releaseDate: new Date("2017-01-29"),
		category: "Non fiction",
		authors: [8, 3],
	},
	{
		_id: 10,
		title: "vulputate, posuere",
		releaseDate: new Date("2012-11-22"),
		category: "Fiction",
		authors: [8],
	},
]);

// -- Update data --

// Add a date of death to one Author

db.authors.update({ _id: 10 }, { $set: { dateOfDeath: new Date() } });

// Add a new release year to a book

db.books.update({ _id: 1 }, { $set: { releaseDate: new Date("2000") } });

// Change the title of a book adding (“New Edition”)

db.books.update(
	{ _id: 1 },
	{
		$set: {
			title: `${db.books.find({ _id: 1 }, { title: 1, _id: 0 }).next().title} New edition`,
		},
	}
);

// -- Get data --

// Select all books

db.books.find();

// Select all books for a given category

db.books.find({ category: "Fiction" });

// Select all books published before 2002

db.books.find({ releaseDate: { $lt: new Date("2002") } });

// Select all books with more than one author

db.books.aggregate([
	{
		$set: {
			numAuthors: { $cond: { if: { $isArray: "$authors" }, then: { $size: "$authors" }, else: 0 } },
		},
	},
	{
		$match: {
			numAuthors: { $gt: 1 },
		},
	},
	{
		$unset: "numAuthors",
	},
]);

// Select all authors

db.authors.find();

// Select all death authors

db.authors.find({ dateOfDeath: { $exists: true, $ne: null } });

// Select all authors born before 1990

db.authors.find({ dateOfBirth: { $lt: new Date("1990") } });

// Select all authors from a given country

db.authors.find({ country: "Poland" });

// -- Delete data --

// Eliminate all the books for a given author (author with id 1)

db.books.deleteMany({ authors: { $in: [1] } });

// Eliminate all the death authors

db.authors.deleteMany({ dateOfDeath: { $exists: true, $ne: null } });
