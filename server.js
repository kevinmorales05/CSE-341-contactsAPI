const express = require('express');

const mongodb = require('./data/database.js');

const app = express();

const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

mongodb.initDB((err) => {
    if (err) {
        console.log('Database is not connected!');
        console.log(err)
    }
    else {
        app.listen(port, () => {
            console.log(`Running on port ${port}`);
            console.log('Database is connected!');

        });
    }
})


