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

const MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb://localhost:27017/mydb', (err, db) => {
//     if (err) {
//         return console.log('unable to connect to mongodb server');
//     }
//     console.log('connected to mongodb', db);
//     db.collection('cities').insertOne({
//         test11: 11,
//         test244: 22,
//     }, (err, res) => {
//         console.log(88888888888, err, res)
//     })
//     db.close();
// });

var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb22");
    var myobj = {name: "Company Inc", address: "Highway 37"};
    dbo.collection("customers").insertOne(myobj, function (err, res) {
        // if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});
// app.listen(3000, () => {
//     console.log('running on 3000')
// });