const express = require('express');
const router = require('./router/mainRouter');
const PORT = 3001;
const app = express();

app.use(express.json());

app.use(express.static('public'));

app.use(router);


app.listen(PORT, () => console.log(`Server is listening on ${PORT}.`));