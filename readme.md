# Simple Borrow Book API

It's a simple API for handling borrowing books from a library


## Installation

1. Run this code
```
node src/infrastructure/app.js
```
2. After successfull run the project, run this sql command on database GUI 
```
INSERT INTO "Books" ("code","title","author","stock") VALUES ('JK-45','Harry Potter','J.K Rowling',1),('SHR-1','A Study in Scarlet','Arthur Conan Doyle',1),('TW-11','Twilight','Stephenie Meyer',1),('HOB-83','The Hobbit','J.R.R. Tolkien',1),('NRN-7','The Lion, the Witch and the Wardrobe','C.S. Lewis',1) RETURNING "code","title","author","stock";

INSERT INTO "Members" ("code","name") VALUES ('M001', 'Angga'),('M002', 'Ferry'),('M003', 'Putri') RETURNING "code","name";
```

### Hasil untuk soal algoritma ada pada algoritma.md