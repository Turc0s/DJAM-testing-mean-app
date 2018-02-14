

var express = require("express");
var router = express.Router();

const Contact = require("../models/contact");
const Book = require("../models/book");

// --------------------------  BOOKS

// // get all books
// router.get("/books", (req, res, next) => {
//     // res.send("Retrieving the contact list");
//     Book.find((err, contacts) => {
//         res.json(contacts);
//     });
// });

// // add book
// router.post("/book", (req, res, next) => {
//     // logic to add contact
//     let newBook = new Book({
//         isbn: req.body.isbn,
//     title: req.body.title,
//     author: req.body.author,
//     description: req.body.description,
//     published_year: req.body.published_year,
//     publisher: req.body.publisher
//     });

//     newBook.save((err, book) => {
//         if (err) {
//             res.json({ msg: "Failed to add book" });
//         } else {
//             res.json({ msg: "Book successfully added" });
//         }
//     });
// });

// // delete book
// router.delete("/book/:id", (req, res, next) => {
//     // logic to delete contact
//     Book.remove({ _id: req.params.id }, (err, result) => {
//         if (err) {
//             res.json(err);
//         } else {
//             res.json(result);
//         }
//     });
// });

// DJAM TUTORIAL

// get all books
router.get("/books", (req, res, next) => {
    Book.find((err, books) => {
        if(err) {
            return next(err);
        }
        res.json(books);
    });
});

// get a single book
router.get("/book/:id", (req, res, next) => {
    Book.findById(req.params.id, (err, book) => {
        if(err) {
            return next(err);
        }
        res.json(book);
    });
});

// add new book
router.post("/book", (req, res, next) => {
    Book.create(req.body, (err, book) => {
        if(err) {
            return next(err);
        }
        res.json(book);
    });
});

// update book
router.put("/book/:id", (req, res, next) => {
    Book.findByIdAndUpdate(req.params.id, req.body, (err, book) => {
        if (err) return next(err);
        res.json(book);
      });
});

// delete book
router.delete('/book/:id', (req, res, next) => {
    Book.findByIdAndRemove(req.params.id, req.body, (err, book) => {
      if (err) return next(err);
      res.json(book);
    });
  });

// --------------------------  CONTACTS

// retrieving contacts
router.get("/contacts", (req, res, next) => {
    // res.send("Retrieving the contact list");
    Contact.find((err, contacts) => {
        res.json(contacts);
    });
});

// add contact
router.post("/contact", (req, res, next) => {
    // logic to add contact
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });

    newContact.save((err, contact) => {
        if (err) {
            res.json({ msg: "Failed to add contact" });
        } else {
            res.json({ msg: "Contact successfully added" });
        }
    });
});

// delete contacts
router.delete("/contact/:id", (req, res, next) => {
    // logic to delete contact
    Contact.remove({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

// ---------------------------

module.exports = router;

