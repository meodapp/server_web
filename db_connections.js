const mongoose = require('mongoose');
// const consts = require('./constants');
// const { DB_HOST, DB_USER, DB_PASS } = consts;
const url = process.env.DB_HOST;
const options = {
    useNewUrlParser: true, // For deprecation warnings
    // useCreateIndex: true, // For deprecation warnings
    useUnifiedTopology: true, // For deprecation warnings
    user: process.env.DB_USER,
    pass: process.env.DB_PASS
};
mongoose
    .connect(url, options)
    .then(() => console.log('Connected to DB'))
    .catch(err => console.log(`connection error: ${err}`));