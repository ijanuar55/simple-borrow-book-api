const express = require('express');
const router = express.Router();
const BookService = require('../../application/BookService');
const MemberService = require('../../application/MemberService');

/**
 * @swagger
 * /library/borrow:
 *   post:
 *     summary: borrow book
 *     description: Borrow a book
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               memberCode:
 *                 type: string
 *                 example: "M001"
 *               bookCode:
 *                 type: string
 *                 example: "JK-45"
 *     responses:
 *       200:
 *         description: Successfull message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Book SHR-1 successfully borrowed by M001."
 */
router.post('/borrow', async (req, res) => {
    const { memberCode, bookCode } = req.body;

    try {
        const result = await BookService.borrowBook(memberCode, bookCode);
        res.status(200).json({ message: result });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

/**
 * @swagger
 * /library/return:
 *   post:
 *     summary: return book
 *     description: Return a book
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               memberCode:
 *                 type: string
 *                 example: "M001"
 *               bookCode:
 *                 type: string
 *                 example: "JK-45"
 *     responses:
 *       200:
 *         description: Successfull message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Book SHR-1 successfully returned by M001."
 */
router.post('/return', async (req, res) => {
    const { memberCode, bookCode } = req.body;

    try {
        const result = await BookService.returnBook(memberCode, bookCode);
        res.status(200).json({ message: result });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

/**
 * @swagger
 * /library/books:
 *   get:
 *     summary: Get all books
 *     description: Retrieve a list of all books in the library
 *     responses:
 *       200:
 *         description: A list of books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   code:
 *                     type: string
 *                     example: "JK-45"
 *                   title:
 *                     type: string
 *                     example: "Harry Potter"
 *                   author:
 *                     type: string
 *                     example: "J.K Rowling"
 *                   stock:
 *                     type: integer
 *                     example: 5
 */
router.get('/books', async (req, res) => {
    try {
        const books = await BookService.getAvailableBooks();
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/**
 * @swagger
 * /api/library/members:
 *   get:
 *     summary: Get all members
 *     description: Retrieve a list of all members and the books they have borrowed
 *     responses:
 *       200:
 *         description: A list of members
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   code:
 *                     type: string
 *                     example: "M001"
 *                   name:
 *                     type: string
 *                     example: "Angga"
 *                   borrowedBooks:
 *                     type: array
 *                     items:
 *                       type: string
 *                       example: "JK-45"
 *                   penaltyUntil:
 *                     type: date
 *                     example: "2024-09-09"
 */
router.get('/members', async (req, res) => {
    try {
        const members = await MemberService.getAllMembers();
        res.status(200).json(members);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
