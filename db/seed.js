const Community = require("../models/community");

Community.remove({}).then(function() {
  Community.create({
    name: "DC Runners",
    description: "For people who love to go running in DC",
    users: "Konjo",
    meets: 0,
    date: Date.now()
  });

  Community.create({
    name: "Express Developers",
    description: "Meet other express developers",
    users: "Konjo, James, Jim, Julie",
    meets: 1,
    date: Date.now()
  });

  Community.create({
    name: "Live Music Lovers",
    description: "For people who love live music",
    users: "Konjo, Ruben, Kelly, Mac, Joy",
    meets: 2,
    date: Date.now()
  });

  Community.create({
    name: "Must Love Dogs",
    description: "For people who are die hard dog owners",
    users: "Konjo, Kelly, Joy",
    meets: 10,
    date: Date.now()
  });

  Community.create({
    name: "Cats are the Best",
    description: "Cat lovers only!",
    users: "Kelly, Mac, Joy",
    meets: 8,
    date: Date.now()
  });

  Community.create({
    name: "Travel Enthusiasts",
    description:
      "For people who can't sit still and love to move across borders",
    users: "Doug, Ruben, Joy, Michael, Brian",
    meets: 7,
    date: Date.now()
  });

  Community.create({
    name: "Apple Fans",
    description: "Fans of the company Apple and the products they create",
    users: "Jimmy, John, Kelly, Mac, Joy, Jason, Schmitt, Henry",
    meets: 11,
    date: Date.now()
  });

  Community.create({
    name: "DC Walkers",
    description: "For people who like to walk in the DC area",
    users: "Matthew, Ruben, Kelly, Mac, Joy, Michelle",
    meets: 5,
    date: Date.now()
  });

  Community.create({
    name: "Random Activities",
    description:
      "For people who live life outside the box and enjoy doing different things",
    users: "Konjo, Ruben, Kelly, Mac, Joy, Ethan, Russ",
    meets: 22,
    date: Date.now()
  });

  Community.create({
    name: "DC Musicians",
    description: "For people who love to play music or sing",
    users:
      "Konjo, Ethan, Russ, Alice, Beth, Alison, Doug, Randy, Cathy, Jim, Dru, Ed, Daniel, Diane, Chris",
    meets: 49,
    date: Date.now()
  });
});
