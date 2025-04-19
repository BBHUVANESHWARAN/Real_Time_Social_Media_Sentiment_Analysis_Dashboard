import mongoose, { Schema } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const uri: any = process.env.MONGODB_URI;

mongoose.connect(uri, {
  dbName: process.env.DB_NAME || 'socialmedia',
})
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ Database connection error:', err));

const twtschema = new Schema({}, { strict: false });

export const tweetModel = mongoose.model('clnTweets', twtschema, 'clnTweets');
