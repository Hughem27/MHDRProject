const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bcrypt = require('bcrypt');


app.use(cors());
app.use(function(req, res, next) {
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

const bookSchema = new mongoose.Schema({
  title:String,
  image:String,
  description:String,
  price:Number
})

const bookModel = mongoose.model('products', bookSchema);

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', UserSchema);


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





app.delete('/api/book/:id',async (req, res)=>{
  console.log("Delete: "+req.params.id);

  let book = await bookModel.findByIdAndDelete(req.params.id);
  res.send(book);
})


app.put('/api/book/:id', async(req, res)=>{
  console.log("Update: "+req.params.id);

  let book = await bookModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.send(book);
})


app.post('/api/book', (req,res)=>{
    console.log(req.body);

    bookModel.create({
      title:req.body.title,
      image:req.body.image,
      description:req.body.description,
      price:req.body.price
    })
    .then(()=>{ res.send("Book Created")})
    .catch(()=>{ res.send("Book NOT Created")});

})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/books', async(req, res)=>{
    
  let books = await bookModel.find({});
  res.json(books);
})

app.get('/api/book/:identifier',async (req,res)=>{
  console.log(req.params.identifier);

  let book = await bookModel.findById(req.params.identifier);
  res.send(book);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})