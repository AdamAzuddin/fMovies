import { Schema, model, models } from 'mongoose';

const CommentSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  username: {
    type: String
  },
  image: {
    type: String
  },
  text: {
    type: String
  }
});

const Comment = models.Comment || model('Comment', CommentSchema);

export default Comment;