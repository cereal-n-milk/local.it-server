const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/local-it';
mongoose.connect(url, {
  useMongoClient: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected sucessfully.');')
});