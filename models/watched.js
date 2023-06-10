import { Schema, model, models } from 'mongoose';

const WatchedSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  data: {
    type: String,
    required: [true, 'Data is required.'],
  },
});

const Watched = models.Watched || model('Watched', WatchedSchema);

export default Watched;