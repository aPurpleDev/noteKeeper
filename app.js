const express = require('express');
const bodyparser = require('body-parser');

const app = express();

let noteArray = [];

app.use(bodyparser.json(),bodyparser.urlencoded({ extended: true }));

app.get('/', (request,response) => {
    response.render('view.ejs', {noteArray});
} );

app.get('/submitted', (request, response) => {
    console.log(request.query.note);
    noteArray.push(request.query.note);
    console.log(noteArray);

    response.render('view.ejs', {noteArray});
});

app.listen(8075);