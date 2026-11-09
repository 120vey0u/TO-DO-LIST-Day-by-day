const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const values = { 
    '07-11-2026': {
        DSA: false,
        DM1: false,
        OLPAI: false,
        LMS: false,
        ROBOT: false,
        IELTS: false,
        DS: false,
        DEVOPS: false,
        CN: false,
        'PM&L': false,
        WP: false,
        PS: false,
    },
    '08-11-2026': {
        DSA: false,
        DM1: false,
        OLPAI: false,
        LMS: false,
        ROBOT: false,
        IELTS: false,
        DS: false,
        DEVOPS: false,
        CN: false,
        'PM&L': false,
        WP: false,
        PS: false,
    }, 
    '09-11-2026': {
        DSA: false,
        DM1: false,
        OLPAI: false,
        LMS: false,
        ROBOT: false,
        IELTS: false,
        DS: false,
        DEVOPS: false,
        CN: false,
        'PM&L': false,
        WP: false,
        PS: false,
    }
};

const radioChecked = {
    '07-11-2026': {
        'workProgress1': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
        'workProgress2': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
        'workProgress3': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
        'workProgress4': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
        'workProgress5': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
        'workProgress6': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
        'workProgress7': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
        'workProgress8': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
        'workProgress9': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
        'workProgress10': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
        'workProgress11': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
        'workProgress12': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
    }, 
    '08-11-2026': {
        'workProgress1': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
        'workProgress2': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
        'workProgress3': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
        'workProgress4': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
        'workProgress5': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
        'workProgress6': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
        'workProgress7': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
        'workProgress8': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
        'workProgress9': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
        'workProgress10': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
        'workProgress11': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
        'workProgress12': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
    }, 
    '09-11-2026': {
        'workProgress1': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
        'workProgress2': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
        'workProgress3': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
        'workProgress4': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
        'workProgress5': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
        'workProgress6': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
        'workProgress7': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
        'workProgress8': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
        'workProgress9': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
        'workProgress10': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
        'workProgress11': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
        'workProgress12': {
        zero: false,
        aFourth: false,
        aHalf: false,
        threeFourth: false,
        oneHundred: false,
        }, 
    }, 
};

app.get('/', function (req, res) {
    res.send('Hello World!');
})

app.get('/values/:day', function (req, res) {
    const params = req.params;
    const day = params.day;
    res.json(values[day]);
})

app.get('/radioChecked/:day', function (req, res) {
    const params = req.params;
    const day = params.day;
    res.json(radioChecked[day]);
})

app.listen(3030, '0.0.0.0', function () {
    console.log('Server is running at the URL: http://localhost:3030')
})