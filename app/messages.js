const express = require('express');
const router = express.Router();
const fs = require('fs');

router.post('/', (req, res) => {
    const date = new Date();
    const fileName = './messages/' + date.toISOString() + '.txt';

    const message = {
        "message": req.body.message,
        "datetime": date.toISOString()
    };
    let data = JSON.stringify(message);

    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        }
        res.send(data);
    });

});

router.get('/', (req, res) => {
    const path = './messages';
    const array = [];

    fs.readdir(path, function(err, items) {
        if(err) throw err;
        items.reverse().splice(0, 5).forEach(item => {
            const message = fs.readFileSync(path + '/' + item, 'utf8');
            array.push(JSON.parse(message));
        });
        res.send(JSON.stringify(array));
    });
});



module.exports = router;