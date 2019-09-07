const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index.ejs');
});

app.listen(PORT);
console.log('Server running on Port ' + PORT);