import { IBowModelDocument } from '@/@types/types';
import mongoose, { Schema, model } from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const bowModelSchema = new Schema<IBowModelDocument>({
  codeName: {
    type: String,
    required: [true, 'code name field is blank'],
    minlength: [4, 'code name shorter than 4 characters'],
  },
  version: { type: String, required: [true, 'version field is blank'] },
  based: [String],
  height: String,
  length: String,
  mass: String,
  creationDate: {
    type: String,
    minlength: [4, 'Must be at least 4, got {VALUE}'],
  },
  createdVia: [String],
  characteristics: {
    type: String,
    required: [true, 'characteristics field is blank'],
  },
  experimentalType: {
    type: Boolean,
    required: [true, 'experimental type field is blank'],
  },
  massProducted: {
    type: Boolean,
    required: [true, 'mass-producted field is blank'],
  },
  imgUrl: String,
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

bowModelSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

bowModelSchema.plugin(paginate);

export default model<
  IBowModelDocument,
  mongoose.PaginateModel<IBowModelDocument>
>('BOWs', bowModelSchema, 'bows');
