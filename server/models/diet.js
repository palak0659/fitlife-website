const mongoose = require('mongoose');

var Diet = mongoose.model('Diet', {
  description: { type: String },
  loss:  {type: String},
  
});

module.exports = { Diet };