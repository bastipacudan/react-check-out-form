const express = require('express');
const app = express();
const port = 3000;
const path =require('path')
const bodyParser = require('body-parser');
 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, './public')));

app.get('/get', (req, res) => {
  res.send({body: 'hello'});
})

app.post('/send', (req,res) => {
    console.log(req.body)
    res.send({msg: 'data sent'})
})

app.listen(port, () => console.log(`Listening to port ${port}`))


