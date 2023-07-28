import * as mongoose from 'mongoose';
import { Schema, Document, Types, Model } from 'mongoose';

type ProjectType = ProjectModel & mongoose.Document;
export interface ProjectModel {
  _id: Types.ObjectId;
  name: String;
  description: String;
  imageUrl: String;
  url: String;
}

const projectSchema: Schema<ProjectType> = new Schema<ProjectType>({
  _id: {
    type: Schema.Types.ObjectId,
    ref: 'Project',
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const showCase = mongoose.model<ProjectType>('showCase', projectSchema);

export default showCase;
