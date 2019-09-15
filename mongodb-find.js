// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID, version} = require('mongodb');
console.log('version :', version);
MongoClient.connect('mongodb://localhost:27017/', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //   _id: new ObjectID('57bb36afb3b6a3801d8c479d')
    // }).toArray().then((docs) => {
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //   console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //   console.log(`Todos count: ${count}`);
    // }, (err) => {
    //   console.log('Unable to fetch todos', err);
    // });

    db.db('mydb').collection('cities').find({_id: new ObjectID('5d7e1bc2f85b3975cf194cf4')}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });

    // db.close();
})
;
