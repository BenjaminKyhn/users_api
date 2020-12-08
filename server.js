const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendFile('view/index.html', { root: __dirname });
});

app.use('/api/users', require('./routes/api/users'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));