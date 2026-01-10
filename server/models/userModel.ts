import { IUserDocument } from '@/@types/types';
import { PaginateModel, Schema, model } from 'mongoose';
// a plugin which adds pre-save validation for unique fields
// within a Mongoose schema.
import paginate from 'mongoose-paginate-v2';
import uniqueValidator from 'mongoose-unique-validator';

// refers https://mongoosejs.com/docs/typescript.html
const userSchema = new Schema<IUserDocument>({
  username: {
    type: String,
    required: [true, 'username field is blank'],
    minlength: [4, 'username shorter than 4 characters'],
    unique: true,
  },
  passwordHash: { type: String, required: [true, 'password hash is null'] },
  email: { type: String, minlength: [8, 'Must be at least 8, got {VALUE}'] },
  phone: { type: String, minlength: [8, 'Must be at least 8, got {VALUE}'] },
  fullName: {
    type: String,
    minlength: [6, 'Must be at least 6, got {VALUE}'],
    unique: true,
  },
  // For schema definition
  organization: { type: Schema.Types.ObjectId, ref: 'Organizations' },
  createdAt: {
    type: String,
    required: [true, 'createdAt is null'],
    minlength: [8, 'Must be at least 8, got {VALUE}'],
  },
  updatedAt: {
    type: String,
    minlength: [8, 'Must be at least 8, got {VALUE}'],
  },
});

userSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash;
  },
});

// Mongoose doesn't support multi-plugin added at once.
userSchema.plugin(paginate);
userSchema.plugin(uniqueValidator);

// Must match Collection name, otherwise you will find nothing.
export default model<IUserDocument, PaginateModel<IUserDocument>>(
  'Users',
  userSchema,
  'users'
);
