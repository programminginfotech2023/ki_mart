const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  msg: {
    type: String,
    required: true,
  },
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
