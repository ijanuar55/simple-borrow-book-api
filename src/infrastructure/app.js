const express = require('express');
const app = express();
const libraryRoutes = require('./routes/libraryRoutes');
const sequelize = require('./sequelizeConfig');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

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
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// function startServer() {
//     const PORT = process.env.PORT || 3000;
//     const server = app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//     return server;
// }

// module.exports = { app, startServer };