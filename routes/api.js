const express = require('express');
const router = express.Router();

// data dummy (biar ga kosong kayak hati)
let users = [
    { id: 1, name: "Ajen" },
    { id: 2, name: "Budi" }
];


// 1. GET all users
router.get('/users', (req, res) => {
    res.json(users);
});

// 2. GET user by id
router.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    res.json(user || { message: "User not found" });
});

// 3. POST add user
router.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(newUser);
    res.json(newUser);
});

// 4. PUT update user
router.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (user) {
        user.name = req.body.name;
        res.json(user);
    } else {
        res.json({ message: "User not found" });
    }
});

// 5. DELETE user
router.delete('/users/:id', (req, res) => {
    users = users.filter(u => u.id != req.params.id);
    res.json({ message: "User deleted" });
});

// 6. GET hello
router.get('/hello', (req, res) => {
    res.json({ message: "Hello World" });
});

// 7. POST login
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    res.json({ message: `Login sukses untuk ${username}` });
});

// 8. GET query example
router.get('/search', (req, res) => {
    const keyword = req.query.q;
    res.json({ message: `Search: ${keyword}` });
});

// 9. PATCH partial update
router.patch('/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (user) {
        if (req.body.name) user.name = req.body.name;
        res.json(user);
    } else {
        res.json({ message: "User not found" });
    }
});

// 10. GET status
router.get('/status', (req, res) => {
    res.json({ status: "API running", time: new Date() });
});

module.exports = router;