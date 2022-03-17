const mongoose = require('mongoose');

var Doctor = mongoose.model('Doctor', {
  name: {type: String},
  address: {type: String},
  description: { type: String },
  contact: {type: String},
  
});

module.exports = { Doctor };