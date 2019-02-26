const CommunitySchema = new Schema({
  name: String,
  description: String,
  users: [User],
  meets: [Meet],
  date: Date
});

module.exports = CommunitySchema;
