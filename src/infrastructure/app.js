const express = require('express');
const app = express();
const libraryRoutes = require('./routes/libraryRoutes');
const sequelize = require('./sequelizeConfig');

// Sync database models
sequelize.sync()
    .then(() => {
        console.log('Database synced successfully.');
    })
    .catch(err => {
        console.error('Error syncing database:', err);
    });

app.use(express.json());
app.use('/library', libraryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
