const Book = require('../domain/Book');
const Member = require('../domain/Member');
const Borrow = require('../domain/Borrow');
const { Op } = require('sequelize');

class BookService {
    static async borrowBook(memberCode, bookCode) {
        const member = await Member.findByPk(memberCode);
        const book = await Book.findByPk(bookCode);

        if (!member) {
            throw new Error("Member does not exist.");
        }
        if (!book || book.stock < 1) {
            throw new Error("Book is unavailable.");
        }
        if (member.borrowedBooks.length >= 2) {
            throw new Error("Cannot borrow more than 2 books.");
        }
        if (member.penaltyUntil && new Date() < new Date(member.penaltyUntil)) {
            throw new Error("Member is currently under penalty.");
        }

        member.borrowedBooks = [...member.borrowedBooks, bookCode];
        book.stock -= 1;

        await member.save();
        await book.save();

        await Borrow.create({
            bookCode: bookCode,
            memberCode: memberCode,
        });

        return `Book ${bookCode} successfully borrowed by ${memberCode}.`;
    }

    static async returnBook(memberCode, bookCode) {
        const member = await Member.findByPk(memberCode);
        const book = await Book.findByPk(bookCode);
        const borrow = await Borrow.findOne({
            where: {
                bookCode: bookCode,
                memberCode: memberCode,
            }
        })

        if (!member || !book || !member.borrowedBooks.includes(bookCode)) {
            throw new Error("Invalid return request.");
        }

        const borrowedDate = new Date(borrow.borrowedDate);
        const returnDate = new Date();
        const timeDiff = returnDate.getTime() - borrowedDate.getTime();
        const daysDiff = timeDiff / (1000 * 3600 * 24);

        member.borrowedBooks = member.borrowedBooks.filter(code => code !== bookCode);
        book.stock += 1;

        if (daysDiff > 7) {
            member.penaltyUntil = new Date(returnDate.getTime() + (3 * 24 * 60 * 60 * 1000));
        }

        borrow.returnDate = returnDate;

        await member.save();
        await book.save();
        await borrow.save();

        return `Book ${bookCode} successfully returned by ${memberCode}.`;
    }

    static async getAvailableBooks() {
        const books = await Book.findAll({
        where: {
            stock: {
                [Op.gt]: 0,
            },
        }
        });
        return books;
    }

    static async createBook({ code, title, author, stock }) {
        const book = await Book.create({
            code,
            title,
            author,
            stock,
        });
    
        return book;
    }
}

module.exports = BookService;
