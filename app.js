const express = require('express');
const app = express();
const mongoose = require('./database/mongoose');

app.listen(3000, () => console.log('server is running at port: 3000'));