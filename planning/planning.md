Models:

Community - Name, Description, Users(Relate), Meets(Relate)
User - Username, Password, Communities(relate)
Meet - Name, Description, Location(Address), Time, Date, Community(relate)

CRUD:

Community - Create, Read, Update, Delete
User - Create, Read, Update(when added to a new community)
Meet - Create, Read, Update, Delete

Community has to be created by a user.
Meet can only exist if the community exists, has to be created by a user.
