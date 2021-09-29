"use strict";

const mongoose = require('mongoose'),
        Schema = mongoose.Schema;

// initialize paginate
const mongoosePaginate = require('mongoose-paginate');
//  setting its defaults options
mongoosePaginate.paginate.options = {
  limit: 3 // how many records on each page
};

const PetSchema = new Schema({
  name: { type: String, required: true }
  , birthday: {type: String, required: true }
  , species: { type: String, required: true }
  , picUrl: { type: String, required: true }
  , picUrlSq: { type: String, required: true }
  , avatarUrl: { type: String, required: true }
  , favoriteFood: { type: String, required: true }
  , description: { type: String, minlength: 140, required: true }
  , price: {type: Number, required: true }
}, {
  timestamps: true
});

PetSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Pet', PetSchema);
