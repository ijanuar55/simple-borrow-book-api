const sequelize = require('./sequelizeConfig');
const Book = require('../models/Book');
const Member = require('../models/Member');

// (async () => {
//     try {
//         await sequelize.sync();

//         console.log('Database synced successfully.');
//         await Member.bulkCreate([
//             { code: "M001", name: "Angga" },
//             { code: "M002", name: "Ferry" },
//             { code: "M003", name: "Putri" },
//         ]);

//         await Book.bulkCreate([
//             { code: "JK-45", title: "Harry Potter", author: "J.K Rowling", stock: 1 },
//             { code: "SHR-1", title: "A Study in Scarlet", author: "Arthur Conan Doyle", stock: 1 },
//             { code: "TW-11", title: "Twilight", author: "Stephenie Meyer", stock: 1 },
//             { code: "HOB-83", title: "The Hobbit", author: "J.R.R. Tolkien", stock: 1 },
//             { code: "NRN-7", title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis", stock: 1 },
//         ]);
    
    
//         console.log("Mock data inserted.");
        
//     } catch (error) {
//         console.error('Error syncing database or inserting mock data:', error);
//     }
// })();
