// this model stores user's last borrowed book so it can be used for recommendation algorithm

const mongoose = require('mongoose')

const mongoURI = 'mongodb+srv://admin:Anas1428@cluster0.gvclajj.mongodb.net/library';

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB Atlas successfully!');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err);
  });
const UserLastBook = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  lastBorrowedBookTitle: {
    type: String,
    required: true,
  },
  lastBorrowedBookId: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('userlastbook', UserLastBook)
