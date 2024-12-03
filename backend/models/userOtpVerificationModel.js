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
  
const UserOtpVerificationModel = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  otpCode: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
})

module.exports = mongoose.model(
  'userEmailVerification',
  UserOtpVerificationModel
)
