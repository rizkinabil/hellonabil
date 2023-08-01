import * as mongoose from 'mongoose';
import { Schema, Document, Types, Model } from 'mongoose';

type ShowcaseType = ShowcaseModel & mongoose.Document;
export interface ShowcaseModel {
  name: String;
  description: String;
  imageUrl: String;
  url: String;
}

const showcaseSchema: Schema<ShowcaseType> = new Schema<ShowcaseType>({
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

const showCase = mongoose.model<ShowcaseType>('showCase', showcaseSchema);

export default showCase;
