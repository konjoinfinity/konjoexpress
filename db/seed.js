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
});
