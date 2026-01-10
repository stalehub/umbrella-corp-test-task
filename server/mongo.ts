import mongoose from 'mongoose';
// Declare for using .env variables
import logger from '@/utils/logger.ts';
import dotenv from 'dotenv';

dotenv.config();

function connectToDB() {
  const url =
    import.meta.env.VITE_NODE_ENV === 'test'
      ? import.meta.env.VITE_TEST_MONGODB_URL
      : import.meta.env.VITE_MONGODB_URL;

  if (!url) {
    throw new Error('Database url is undefined');
  }

  mongoose.set('strictQuery', false);

  logger.info('connect to', url);

  mongoose
    .connect(url)
    .then(() => logger.info('MongoDB connected'))
    .catch((error) => {
      logger.error('Failed to connect to MongoDB:', error.message);
    });
}

// Debug config
//mongoose.set('debug', false);

export default connectToDB;
