const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const { images } = require('./images');
const Campground = require("../models/campground");

mongoose
  .connect(
    "mongodb+srv://admin:adminpassword@cluster0.bqpjg5r.mongodb.net/yelpcamp",
    {
      useNewUrlParser: true,
      // useCreateIndex: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to DB!"))
  .catch((error) => console.log(error.message));

const sample = (array) => array[Math.floor(Math.random() * array.length)];
const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 100; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: "6480325a116f3dc047c6cd4a",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nihil repellendus quaerat est earum itaque voluptas reiciendis, necessitatibus quisquam quos odit?",
      price,
      geometry: {
        type: "Point",
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ],
      },
      images: [
        {
          url: sample(images),
          filename: "dummy",
        },
      ],
    });
    // console.log(camp);
    await camp.save();
  }
};
seedDB().then(() => {
  mongoose.connection.close();
});
