// Handles all the books request's

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
const BookTransaction = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  bookId: {
    type: String,
    required: true,
  },
  bookTitle: {
    type: String,
    required: true,
  },
  // Pending, Accepted , Cancelled
  issueStatus: {
    type: String,
    default: 'PENDING',
  },
  isReturned: {
    type: Boolean,
    default: false,
  },
  extraCharge: {
    type: Number,
    default: 0,
  },
  // when user request a default date will be set, which will be Updated when ADMIN accepts the book request
  issueDate: {
    type: Date,
    default: Date.now(),
  },
  returnDate: {
    type: Date,
    default: null,
  },
})

module.exports = mongoose.model('booktransaction', BookTransaction)
