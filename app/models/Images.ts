import { Schema, model, Document } from 'mongoose';

export interface IImages {
  url: String;
}

export interface ImagesDocument extends IImages, Document {}

const ImagesSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
});

const ImagesModel = model<ImagesDocument>('ImagesModel', ImagesSchema);

export default ImagesModel;
