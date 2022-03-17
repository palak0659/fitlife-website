const mongoose = require('mongoose');

var Yoga = mongoose.model('Yoga', {
  name: {type: String},
  description: { type: String },
  link: {type: String},
  purpose:  {type: String},
  
});

module.exports = { Yoga };