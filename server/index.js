const express = require('express')
const cripto = require('cripto')
const cors = require('cors');
const bodyParser = require("body-parser")
const mongoose = require('mongoose');

const Colorlib = require("./Models/Colorlib")


mongoose.connect('mongodb+srv://ilaha:ilaha2002@database.jbmanhz.mongodb.net/Colorlib?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('mongoDB-e qosuldu');
  })
  .catch((error) => {
    console.error('error var:', error);
  });


const app = express()
const PORT = 8080



app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.get('/api', (req, res) => {
    res.send('Hello World!')
  })

  

  //get all Colorlib
app.get('/api/colorlibs', async (req, res) => {
    const colorlibs = await Colorlib.find();
    res.status(200).send({
      // data: Colorlib,
      data: colorlibs,
      message: 'data get succes'
    })
  })
  
  //get all Colorlib By Id
  app.get('/api/colorlibs/:id', async (req, res) => {
    const id = req.params.id;
    const colorlib = await Colorlib.findById(id);
  if (colorlib) {
    res.status(200).send({
      data: colorlib,
      message: 'data get succes'
    })
  } else {
    res.status(404).send({
      message: 'data not found'
    })
  }
})
//create Colorlib
app.post('/api/colorlibs', async (req, res) => {
  const {Body, Title, Likes, ImageURL} = req.body;
  const newColorlib={
    Body:Body,
    Title:Title,
    Likes:Likes,
    ImageURL:ImageURL
  }
let colorlib = await Colorlib.create(newColorlib);
res.status(201).redirect("http://localhost:3000/colorlibs")
})
//delete Colorlib
app.delete('/api/colorlibs/:id', async (req, res) => {
const id = req.params.id;
await Colorlib.findByIdAndRemove(id);
res.status(200).send({
    message: 'data deleted succes'
})
})
//put Colorlib
app.put('/api/colorlibs/:id', async(req, res) => {
const id = req.params.id;
const colorlib = await Colorlib.findById(id);

if (colorlib) {
  const { Body, Title, Likes, ImageURL } = req.body;
  colorlib.Body = Body;
  colorlib.Title = Title;
  colorlib.Likes = Likes;
  colorlib.ImageURL = ImageURL;

  colorlib.save();
  res.status(200).send({
    data: colorlib,
    message: 'data updated succes'
  })
} else {
  res.status(404).send({
    message: 'data not found'
  })
}
})


app.listen(PORT, () => {
console.log(`my app listening on PORT ${PORT}`)
})