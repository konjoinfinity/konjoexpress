Community.remove({}).then(function() {
  Community.create({
    name: "DC Runners",
    description: "For people who love to go running in DC",
    users: [],
    meets: [],
    date: Date.now()
  });

  Community.create({
    name: "Express Developers",
    description: "Meet other express developers",
    users: [],
    meets: [],
    date: Date.now()
  });

  Community.create({
    name: "Live Music Lovers",
    description: "For people who love live music",
    users: [],
    meets: [],
    date: Date.now()
  });
});
