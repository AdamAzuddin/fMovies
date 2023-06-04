import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username is invalid. It should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  },
  watchLater: {
    type: String,
    set: function (data) {
      // Convert JSON data to string before saving
      return JSON.stringify(data);
    },
    get: function (data) {
      // Parse the string and convert it back to JSON when retrieving
      try {
        return JSON.parse(data);
      } catch (error) {
        return data;
      }
    },
  },
  favourites: {
    type: String,
    set: function (data) {
      // Convert JSON data to string before saving
      return JSON.stringify(data);
    },
    get: function (data) {
      // Parse the string and convert it back to JSON when retrieving
      try {
        return JSON.parse(data);
      } catch (error) {
        return data;
      }
    },
  },
  watched: {
    type: String,
    set: function (data) {
      // Convert JSON data to string before saving
      return JSON.stringify(data);
    },
    get: function (data) {
      // Parse the string and convert it back to JSON when retrieving
      try {
        return JSON.parse(data);
      } catch (error) {
        return data;
      }
    },
  },
});


const  User = models.User || model("User", UserSchema)

export default User
