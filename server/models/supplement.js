const mongoose = require('mongoose');

var Supplement = mongoose.model('Supplement', {
  
  supplementname : {type: String},
  description: { type: String },
  purpose : {type: String},

 
  
});

module.exports = { Supplement };