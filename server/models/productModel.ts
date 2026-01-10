import { IProductDocument } from '@/@types/types';
import mongoose, { Schema, model } from 'mongoose';
import paginate from 'mongoose-paginate-v2';
import uniqueValidator from 'mongoose-unique-validator';

const medicineSchema = new Schema<IProductDocument>({
  gtin: {
    type: String,
    required: [true, 'gtin is required'],
    minlength: [8, 'Must be atleast 8, got {VALUE}'],
    unique: true,
  },
  name: {
    type: String,
    required: [true, 'medicine must be given a name'],
    minlength: [3, 'Must be atleast 3, got {VALUE}'],
    unique: true,
  },
  slogan: {
    type: String,
    minlength: [3, 'Must be atleast 3, got {VALUE}'],
  },
  imgUrl: String,
  description: {
    type: String,
    required: [true, 'description is required'],
    minlength: [3, 'Must be atleast 3, got {VALUE}'],
  },
  info: {
    pulishedDate: {
      type: String,
      required: [true, 'pulished date is required'],
      minlength: [8, 'Must be atleast 8, got {VALUE}'],
    },
    manufacturer: {
      type: String,
      required: [true, 'manufacturer name is required'],
    },
  },
  genre: String,
  listPrice: { type: Number, required: [true, 'list price is required'] },
  ratings: { type: Number, default: 0 },
  createdAt: {
    type: String,
    required: [true, 'createdAt field is blank'],
    minlength: [8, 'Must be atleast 8, got {VALUE}'],
    // Declares the index options for this schematype.
    index: true,
  },
  updatedAt: {
    type: String,
    minlength: [8, 'Must be atleast 8, got {VALUE}'],
  },
});

medicineSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

medicineSchema.plugin(paginate);
medicineSchema.plugin(uniqueValidator);

export default model<
  IProductDocument,
  mongoose.PaginateModel<IProductDocument>
>('Medicines', medicineSchema, 'medicines');
