

var express = require("express");
var router = express.Router();

const Contact = require("../models/contact");

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

module.exports = router;

