import { Schema, model, models } from 'mongoose';

const FavouriteSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  data: {
    type: String,
    required: [true, 'Data is required.'],
  },
});

const Favourite = models.Favourite || model('Favourite', FavouriteSchema);

export default Favourite;