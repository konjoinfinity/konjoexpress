const UserSchema = new Schema({
  name: String,
  username: String,
  password: String,
  communities: [Community],
  date: Date
});

module.exports = UserSchema;
