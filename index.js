///////////// IMPORTS /////////////
const express = require('express');
//TODO: Joi request validation

// Initiate instance of express and assign to var app
const app = express();
app.use(express.json());

///////////// ASSIGNMENT /////////////
const books = [{
    id: 1,
    author: 'author1',
    title: 'book1'
},
{
    id: 2,
    author: 'author2',
    title: 'book2'
},
{
    id: 3,
    author: 'author3',
    title: 'book3'
}
];

///////////// GET /////////////
app.get('/api/books', (req, res) => { // localhost:3000/api/books
    res.send(books);
});

app.get('/api/books/:id', (req, res) => {
    const book = books.find(c => c.id === parseInt(req.params.id));
    
    if (!book) return res.status(404).send('The book with the given ID was not found.');

    res.send(book);
});

///////////// POST /////////////
app.post('/api/books', (req, res) => {
    const book = {
        id: books.length + 1,
        author: req.body.author,
        title: req.body.title
    }

    books.push(book);
    res.sendStatus(200);
});

///////////// PUT /////////////
app.put('/api/books/:id', (req, res) => {
    const book = books.find(c => c.id === parseInt(req.params.id));

    if (!book) return res.status(404).send('The book with the given ID was not found.');

    book.author = req.body.author
    book.title = req.body.title

    res.sendStatus(200);
});

///////////// DELETE /////////////
app.delete('/api/books/:id', (req, res) => {
    const book = books.find(c => c.id === parseInt(req.params.id));

    if (!book) return res.status(404).send('The book with the given ID was not found.');

    const index = books.indexOf(book);
    books.splice(index, 1);

    res.send(books);
});


///////////// RUN /////////////
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));