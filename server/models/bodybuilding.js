const mongoose = require('mongoose');

var Body = mongoose.model('Body', {
  name: {type: String},
  description: { type: String },
  link: {type: String},
  purpose:  {type: String},
  
});

module.exports = {Body};