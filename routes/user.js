const express = require('express');
const router = express.Router();
const User = require('../models/User');
const _userDAL = require('../dal/UserDAL');

const userDAL = new _userDAL();

router.get('/', (req, res) => {
    res.send("USER API");
});

router.post('/new-user', (req, res, next) => {
    const user = new User(null, req.body.companyId, req.body.name, req.body.surname, req.body.email, req.body.password);
    userDAL.createUser(user, (data) => {
        res.json(data);
    });
});

router.get('/:id', (req, res, next) => {
    const user = new User();
    userDAL.getById(req.params.id, (data) => {
        res.json(data);
    });
})

module.exports = router;