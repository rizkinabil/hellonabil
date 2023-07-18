import mongoose, { Schema, Document, Types } from 'mongoose';

interface interfaceShowCase extends Document {
  _id: Types.ObjectId;
  name: String;
  urlName: String;
}

const showCaseSchema: Schema<interfaceShowCase> = new Schema<interfaceShowCase>({
  _id: {
    type: Schema.Types.ObjectId,
    ref: 'Project',
  },
  name: {
    type: String,
    required: true,
  },
  urlName: {
    type: String,
    required: true,
  },
});

const showCase = mongoose.model<interfaceShowCase>('showCase', showCaseSchema);

export default showCase;
