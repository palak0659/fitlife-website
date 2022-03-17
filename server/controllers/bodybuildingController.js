const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {Body  } = require('../models/bodybuilding');

const multer = require('multer');

//define storage for the images

const storage = multer.diskStorage({
  //destination for files
  destination: function (request, file, callback) {
    callback(null, './uploads/images');
  },

  //add back the extension
  filename: function (request, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

//upload parameters for multer
const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 1024 * 1024 * 3,
  },
});

router.get('/', (req, res) => {
    Body.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Body.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/',upload.single('img'), (req, res) => {
    var img = new Body({
        name: req.body.name,
       description: req.body.description,
       link: req.body.link,
       purpose: req.body.purpose
      
    });
   img.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in  Saveing :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        var img = new Body({
            description: req.body.description,
           
           
         });
         Body.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in  Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Body.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in  Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;