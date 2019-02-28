const { Community } = require("../models/index");

Community.remove({}).then(function() {
  Community.create({
    name: "DC Runners",
    description: "For people who love to go running in DC",
    users: ["Konjo"],
    meets: {
      name: "Rock Creek Run",
      description: "Trail Running",
      location: "Rock Creek Park",
      time: "0700",
      date: "031419",
      community: "DC Runners"
    },
    date: Date.now()
  });

  Community.create({
    name: "Express Developers",
    description: "Meet other express developers",
    users: ["Konjo", "James", "Jim", "Julie"],
    meets: {
      name: "Espresso for Express Devs",
      description: "Code and coffee",
      location: "Clarendon",
      time: "1000",
      date: "030119",
      community: "Express Developers",

      name: "Learn to code with Express",
      description: "Learn to Code",
      location: "Clarendon",
      time: "1200",
      date: "030129",
      community: "Express Developers"
    },
    date: Date.now()
  });

  Community.create({
    name: "Live Music Lovers",
    description: "For people who love live music",
    users: ["Konjo", "Ruben", "Kelly", "Mac", "Joy"],
    meets: {
      name: "John Mayer",
      description: "John Mayer live in concert",
      location: "Capital One Arena",
      time: "1900",
      date: "051419",
      community: "Live Music Lovers"
    },
    date: Date.now()
  });

  Community.create({
    name: "Must Love Dogs",
    description: "For people who are die hard dog owners",
    users: [],
    meets: {
      name: "Must love dogs group movie watch",
      description: "Watch must love dogs with other dog lovers",
      location: "Ballston theater",
      time: "1300",
      date: "031719",
      community: "Must Love Dogs"
    },
    date: Date.now()
  });

  Community.create({
    name: "Cats are the Best",
    description: "Cat lovers only!",
    users: ["Kelly", "Mac", "Joy"],
    meets: {
      name: "Meet other cat lovers",
      description: "Talk cats with other people",
      location: "Starbucks",
      time: "1930",
      date: "041219",
      community: "Cats are the Best"
    },
    date: Date.now()
  });

  Community.create({
    name: "Travel Enthusiasts",
    description:
      "For people who can't sit still and love to move across borders",
    users: ["Doug", "Ruben", "Joy", "Michael", "Brian"],
    meets: {
      name: "Trip to France",
      description: "Tour the southern coast of France",
      location: "Nice",
      time: "1900",
      date: "050619",
      community: "Travel Enthusiasts"
    },
    date: Date.now()
  });

  Community.create({
    name: "Apple Fans",
    description: "Fans of the company Apple and the products they create",
    users: "Jimmy, John, Kelly, Mac, Joy, Jason, Schmitt, Henry",
    meets: {
      name: "Apple keynoete address",
      description: "Watch the keynote address with other fans",
      location: "John's house",
      time: "2000",
      date: "081019",
      community: "Apple Fans"
    },
    date: Date.now()
  });

  Community.create({
    name: "DC Walkers",
    description: "For people who like to walk in the DC area",
    users: "Matthew, Ruben, Kelly, Mac, Joy, Michelle",
    meets: {
      name: "A walk around the mall",
      description: "A group walk around the National Mall",
      location: "Washington Monument",
      time: "1100",
      date: "030219",
      community: "DC Walkers"
    },
    date: Date.now()
  });

  Community.create({
    name: "Random Activities",
    description:
      "For people who live life outside the box and enjoy doing different things",
    users: "Konjo, Ruben, Kelly, Mac, Joy, Ethan, Russ",
    meets: {
      name: "Running and Jumping Jacks",
      description: "Get your heart rate up!",
      location: "Dupont Circle",
      time: "0800",
      date: "030819",
      community: "Random Activities"
    },
    date: Date.now()
  });

  Community.create({
    name: "DC Musicians",
    description: "For people who love to play music or sing",
    users:
      "Konjo, Ethan, Russ, Alice, Beth, Alison, Doug, Randy, Cathy, Jim, Dru, Ed, Daniel, Diane, Chris",
    meets: {
      name: "Soulfire Practice",
      description: "Band Practice",
      location: "The Allards",
      time: "1930",
      date: "Monday Weekly",
      community: "DC Musicians"
    },
    date: Date.now()
  });
});
