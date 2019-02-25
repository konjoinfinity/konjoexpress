Models:

Community - Name, Description, Users(Relate), Meets(Relate)
User - Username, Password, Communities(relate)
Meet - Name, Description, Location(Address), Time, Date, Community(relate)

Community has to be created by a user.
Meet can only exist if the community exists, has to be created by a user.
