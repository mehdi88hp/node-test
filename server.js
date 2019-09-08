const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

let app = express();
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});
hbs.registerHelper('screamIt', (str) => {
    return str.toUpperCase();
});

/*middle wares*/
app.use((req, res, next) => {
    let now = new Date().toString();
    let log = `${now}: ${req.method} , ${req.url}`;
    fs.appendFile('server.log', log + "\n", (err) => {
        if (err)
            console.log(err)
    });
    next();
});
// app.use((req, res, next) => {
//     res.render('maintenanceMode.hbs')
// });
app.use(express.static(__dirname + '/public'));
/*end of middle wares*/


app.get('/', (request, response) => {
    response.render('about.hbs', {
        day: new Date().getDay(),
        welcomeMessage: 'welcome to my first website',
    });
});
app.listen(3000, () => {
    console.log('running on 3000')
});