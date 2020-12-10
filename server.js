const express = require('express');
const mongoose = require('mongoose');

const app = express();

//BodyParser included in new express.js
app.use(express.json());