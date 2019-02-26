const MeetSchema = new Schema({
  name: String,
  description: String,
  location: String,
  time: Time,
  date: Date,
  community: [Community]
});

module.exports = MeetSchema;
