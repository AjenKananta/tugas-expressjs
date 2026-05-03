const express = require('express');
const app = express();
const apiRoutes = require('./routes/api');

app.use(express.json()); // biar bisa baca JSON
app.use('/api', apiRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server jalan di http://localhost:${PORT}`);
});