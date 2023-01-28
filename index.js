const { urlencoded, application } = require('express');

const express = require('express');

const port = 25008;

const app = express();

const path = require('path');

const db = require('./config/mongoose');
const Client = require('./models/client');

const Student = require('./models/client');

app.use(urlencoded());

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'assets')));


app.get('/', function (req, res) {
    // return res.end("hi");
    Client.find({}, function (err, record) {
        if (err) {
            console.log("record not fetch from mongodb");
            return false;
        }
        return res.render('', {
            "title": "Ki page"
        })
    })
})

// Delate Data By From

app.get('/delete/:id', function (req, res) {
    var id = req.params.id;
    // console.log(id);
    Student.findByIdAndDelete(id, function (err, data) {
        if (err) {
            console.log("record not deleted");
            return false;
        }
        return res.redirect('/');
    })
})



// Edit Data By From

app.get('/update/', function (req, res) {
    var id = req.query.id;
    Student.findById(id, function (err, data) {
        if (err) {
            console.log("record not found");
            return false;
        }
        return res.render('update', {
            "st_data": data
        })
    })

})

//Update Pages

app.post('/editAdminData', function (req, res) {
    var id = req.body.stId;
    // console.log(id);
    Student.findByIdAndUpdate(id, req.body, function (err, record) {
        if (err) {
            console.log("record not updated");
            return false;
        }
        return res.redirect('/');
    })

})

// Admin Data By Form

// Add Data From sign From
app.post('/cilentdata', function (req, res) {
    // var agedata = req.body.age;
    // var namedata = req.body.name;

    Client.create(req.body, function (err, data) {
        if (err) {
            console.log("record not inserted");
            return false;
        }
        console.log(data);
        return res.redirect('/');
    })
});

app.listen(port, function (err) {
    if (err) {
        console.log("server is not start");
        return false;
    }
    console.log("server is running on port:", port);
})

