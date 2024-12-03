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
const PopularBookSchema = new mongoose.Schema({
  bookId: {
    type: String,
    required: true,
  },
  bookTitle: {
    type: String,
    required: true,
  },
  issueQuantity: {
    type: Number,
    default: 1,
  },
})

module.exports = mongoose.model('PopularBook', PopularBookSchema)
