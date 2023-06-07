import { Schema, model, models } from 'mongoose';

const WatchLaterSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  data: {
    type: String,
    required: [true, 'Data is required.'],
  },
});

const WatchLater = models.WatchLater || model('WatchLater', WatchLaterSchema);

export default WatchLater;