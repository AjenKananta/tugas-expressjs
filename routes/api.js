const express = require('express');
const router = express.Router();

let users = [
    { id: 1, name: "Ajen" },
    { id: 2, name: "Budi" }
];


router.get('/users', (req, res) => {
    res.json(users);
});

router.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    res.json(user || { message: "User not found" });
});

router.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(newUser);
    res.json(newUser);
});

router.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (user) {
        user.name = req.body.name;
        res.json(user);
    } else {
        res.json({ message: "User not found" });
    }
});

router.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id != req.params.id);
    res.json({ message: "User deleted" });
});

router.get('/hello', (req, res) => {
    res.json({ message: "Hello World" });
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;
    res.json({ message: `Login sukses untuk ${username}` });
});

router.get('/search', (req, res) => {
    const keyword = req.query.q;
    res.json({ message: `Search: ${keyword}` });
});

router.patch('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (user) {
        if (req.body.name) user.name = req.body.name;
        res.json(user);
    } else {
        res.json({ message: "User not found" });
    }
});

router.get('/status', (req, res) => {
    res.json({ status: "API running", time: new Date() });
});

module.exports = router;
