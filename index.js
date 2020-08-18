const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;

const MONGO_URI =
  'mongodb+srv://Sudarshan:swW1VcoTCLbPEJmg@cluster0.qvlas.mongodb.net/<dbname>?retryWrites=true&w=majority';

require('./models/User');

app.use(express.json());
app.use(require('./Routes/auth'));

//swW1VcoTCLbPEJmg
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () =>
  console.log('Connected to database.')
);
mongoose.connection.on('error', (err) => console.log('Error:', err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
