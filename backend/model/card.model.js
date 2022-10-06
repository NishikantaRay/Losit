
import { Schema,model} from 'mongoose';

const CardSchema = new Schema(
  {
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: [Object],
        required: true,
    },
    socialLinks: {
        type: [Object],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
  },
    {
    timestamps: true
  }
);
export default model('Card', CardSchema);