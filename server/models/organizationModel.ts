import { IEmployeeDocument } from '@/@types/types';
import mongoose, { Schema, model } from 'mongoose';
import paginate from 'mongoose-paginate-v2';
import uniqueValidator from 'mongoose-unique-validator';

const employeeSchema = new Schema({
  organizationName: {
    type: String,
    required: true,
    minlength: [6, 'Must be atleast 6, got {VALUE}'],
  },
  employeeName: {
    type: String,
    required: true,
    minlength: [3, 'Must be atleast 3, got {VALUE}'],
    unique: true,
  },
  employeeNumber: {
    type: String,
    required: true,
    minlength: [3, 'Must be atleast 3, got {VALUE}'],
    unique: true,
  },
  sex: {
    type: String,
    enum: ['male', 'female'],
    required: true,
  },
  unit: {
    type: String,
    required: true,
    minlength: [3, 'Must be atleast 3, got {VALUE}'],
  },
  idCard: {
    cardNumber: {
      type: Number,
      required: true,
      minlength: [6, 'Must be atleast 6, got {VALUE}'],
    },
    securityLevel: {
      type: String,
      required: true,
      minlength: [6, 'Must be atleast 6, got {VALUE}'],
    },
  },
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

employeeSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

employeeSchema.plugin(paginate);
employeeSchema.plugin(uniqueValidator);

export default model<
  IEmployeeDocument,
  mongoose.PaginateModel<IEmployeeDocument>
>('Organizations', employeeSchema, 'organizations');
