import { Schema, Document, Types, model } from 'mongoose';
import { IImages } from './Images';

interface ShowcaseModel extends Document {
  name: String;
  designerName: String;
  description: String;
  imageUrl: String;
  url: String;
  gallery: Types.Array<IImages>;
}

const showcaseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  designerName: {
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
  gallery: [{ type: Schema.Types.ObjectId, ref: 'ImagesModel' }],
});

const showCase = model<ShowcaseModel>('showCase', showcaseSchema);

export default showCase;
