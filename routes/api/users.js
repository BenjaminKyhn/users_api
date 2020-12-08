const express = require('express');
const router = express.Router();

let users = [
    {
        "id": "0",
        "name": "Billy  McCool",
        "age": "30",
        "favouritecolour": "Magenta"
    },
    {
        "id": "1",
        "name": "Søren Kierkegaard",
        "age": "387",
        "favouritecolour": "Black as death"
    }
]

router.get('/', (req, res) => {
    res.json(users);
})

router.get('/:user_id', (req, res) => {
    user = req.params.user_id;
    res.json(users[user]);
})
;

module.exports = router