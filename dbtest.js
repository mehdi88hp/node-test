exports.dbTest = function () {
    const MongoClient = require('mongodb').MongoClient;
    const options = {useNewUrlParser: true, useUnifiedTopology: true};
    const dbResult = {};
    MongoClient.connect('mongodb://localhost:27017/', options, (err, db) => {
        if (err) {
            return console.log('unable to connect to mongodb server');
        }
        db = db.db('mydb');
        db.collection('cities').insertOne({
            q: 1,
            w: 2,
            s: 3,
        }, (err, res) => {
        })
        db.collection('cities').find().toArray().then((docs) => {
            dbResult.cities = JSON.stringify(docs, undefined, 2);
            console.log(dbResult);

        });

        // db.close();
    });
    var url = "mongodb://localhost:27017/TestDB";

    MongoClient.connect(url, options, function (err, db) {
        if (err) throw err;
        db.close();
    });


    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, options, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydbJadid");
        var myobj = {name: "Company Inc1122", address: "Highway 371122"};
        dbo.collection("collectionJadid2").insertOne(myobj, function (err, res) {
            if (err) throw err;
            db.close();
        });
    });
};
