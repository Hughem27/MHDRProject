const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bcrypt = require('bcrypt');
require('dotenv').config();

app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://g00384389:HD4bksPt35xJGUGp@datarep1.kus8esv.mongodb.net/?retryWrites=true&w=majority');


}

const productSchema = new mongoose.Schema({
  title: String,
  image: String,
  description: String,
  price: Number
})

const productModel = mongoose.model('products', productSchema);

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);

const axios = require('axios');


app.get('/api/exchangeRates', async (req, res) => {
  try {
    const response = await axios.get('http://api.exchangeratesapi.io/v1/latest?access_key=788fc21b939b778549f33abc1c2a1724', {
      params: {
        access_key: process.env.EXCHANGE_RATES_API_KEY,
        base: 'GBP',
        symbols: 'USD,AUD,CAD,PLN,MXN'
      }
    });

    res.json(response.data); // Corrected to use 'response.data'
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching exchange rates');
  }
});


// Post for registering a user
app.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      username: req.body.username,
      password: hashedPassword
    });

    await newUser.save();
    res.status(201).send('User created');
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).send('Error registering new user');
  }
});

//  Post for login
app.post('/login', async (req, res) => {
  try {
    console.log('Login request received:', req.body);
    const user = await User.findOne({ username: req.body.username });
    if (user && await bcrypt.compare(req.body.password, user.password)) {
      console.log('Login successful for:', req.body.username);
      res.send('Login successful');
    } else {
      console.log('Invalid credentials for:', req.body.username);
      res.status(400).send('Invalid credentials');
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).send('Error during login');
  }
});


app.delete('/api/product/:id', async (req, res) => {
  console.log("Delete: " + req.params.id);

  let product = await productModel.findByIdAndDelete(req.params.id);
  res.send(product);
})


app.put('/api/product/:id', async (req, res) => {
  console.log("Update: " + req.params.id);

  let product = await productModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(product);
})


app.post('/api/product', (req, res) => {
  console.log(req.body);

  productModel.create({
    title: req.body.title,
    image: req.body.image,
    description: req.body.description,
    price: req.body.price
  })
    .then(() => { res.send("product Created") })
    .catch(() => { res.send("product NOT Created") });

})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/products', async (req, res) => {

  let products = await productModel.find({});
  res.json(products);
})

app.get('/api/product/:identifier', async (req, res) => {
  console.log(req.params.identifier);

  let product = await productModel.findById(req.params.identifier);
  res.send(product);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})