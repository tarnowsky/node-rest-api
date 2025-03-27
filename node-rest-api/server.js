const express = require('express');
const morgan = require('morgan');
const connectDB = require('./src/config/database');
const userRoutes = require('./src/routes/userRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));

connectDB();

app.use('/api/users', userRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Data not found.',
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: 'Server error.',
        error: err.message,
    });
});

app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});