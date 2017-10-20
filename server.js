const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

app.set('view engine', 'hbs');

app.get('/', (request, response) => {
    response.send({
        name: 'Rafael',
        likes: [
            'Biking',
            'Node.js'
        ]
    });
});

app.get('/about', (request, response) => {
    response.send('About me');
});

app.get('/help', (request, response) => {
    response.render('help.hbs', {
        pageTitle: 'This is the new title'
    });
});

app.listen(3000);