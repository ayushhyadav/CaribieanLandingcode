const mongoose = require("mongoose");



const PropertyImageSchema = new mongoose.Schema({
  fieldname: String,
  originalname: String,
  encoding: String,
  mimetype: String,
  destination: String,
  filename: String,
  path: String,
  size: Number
});

const ExtraServiceSchema = new mongoose.Schema({
  id: Number,
  item: String,
  description: String,
  number_of_guest: String,
  price: String
});

const PropertySchema = new mongoose.Schema({
  user_id: String,
  email: String,
  property_id: String,
  property_name: String,
  select_view: String,
  property_type: String,
  price_per_night: String,
  guest_count: String,
  bedroom_count: String,
  bathroom_count: String,
  property_description: String,
  property_rules: String,
  country: String,
  state: String,
  city: String,
  street_address: String,
  property_images: [PropertyImageSchema],
  amenties: String,
  extra_service: [ExtraServiceSchema],
  rafting_number_of_guest: String,
  rafting_price: String,
  rafting_description: String,
  rafting_certifcate: String,
  exotic_food_number_of_guest: String,
  exotic_food_price: String,
  exotic_food_description: String,
  exotic_food_certifcate: String,
  Booking_History: { type: Array, default: [] },
  status:'',
});

const UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  dob: String,
  email: String,
  password: String,
  confirm_password: String,
  user_id: String,
  user_type: String,
  Booking_History: { type: Array, default: [] },
  profile_url: String,
  card_image: String,
  country: String,
  identity_type: String,
  property_list: [PropertySchema],
  All_Property_Booking_History: { type: Array, default: [] } 
});

module.exports = mongoose.model("users", UserSchema);
