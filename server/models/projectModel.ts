import { IProjectDocument } from '@/@types/types';
import { PaginateModel, Schema, model } from 'mongoose';
import paginatePlugin from 'mongoose-paginate-v2';
import uniqueValidator from 'mongoose-unique-validator';

const projectSchema = new Schema<IProjectDocument>({
  projectName: {
    type: String,
    required: [true, 'Project must be given a name'],
  },
  description: {
    type: String,
    required: [true, 'Project description field must not be blank'],
  },
  models: [{ type: Schema.Types.ObjectId, ref: 'BOWs' }],
  creationDate: {
    type: String,
    minlength: [4, 'Must be at least 4, got {VALUE}'],
  },
  createdAt: {
    type: String,
    required: [true, 'createdAt is null'],
    minlength: [8, 'Must be at least 8, got {VALUE}'],
    // Declares the index options for this schematype.
    index: true,
  },
  updatedAt: {
    type: String,
    minlength: [8, 'Must be at least 8, got {VALUE}'],
  },
});

projectSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

projectSchema.plugin(paginatePlugin);
projectSchema.plugin(uniqueValidator);

export default model<IProjectDocument, PaginateModel<IProjectDocument>>(
  'Projects',
  projectSchema,
  'projects'
);
