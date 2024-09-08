const express = require('express');
const router = express.Router();
const BookService = require('../../application/BookService');
const MemberService = require('../../application/MemberService');

// Route to borrow a book
router.post('/borrow', async (req, res) => {
    const { memberCode, bookCode } = req.body;

    try {
        const result = await BookService.borrowBook(memberCode, bookCode);
        res.status(200).json({ message: result });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Route to return a book
router.post('/return', async (req, res) => {
    const { memberCode, bookCode } = req.body;

    try {
        const result = await BookService.returnBook(memberCode, bookCode);
        res.status(200).json({ message: result });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Route to check available books (excluding borrowed books)
router.get('/books', async (req, res) => {
    try {
        const books = await BookService.getAvailableBooks();
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route to check all members and their borrowed books
router.get('/members', async (req, res) => {
    try {
        const members = await MemberService.getAllMembers();
        res.status(200).json({ data: members });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
