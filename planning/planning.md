Models:

Community - Name, Description, Users(Relate), Meets(Relate)
User - Name, Username, Password, Communities(relate)
Meet - Name, Description, Location(Address), Time, Date, Community(relate)

CRUD:

Community - Create, Read, Update, Delete
User - Create, Read, Update(when added to a new community)
Meet - Create, Read, Update, Delete

Community has to be created by a user.
Meet can only exist if the community exists, has to be created by a user.
When a user joins a community, the user is added to the community property
(users) and the community is added to the user property (communities).

Would like to experiment with tailwind css for the front end.

Screencast:

Features to go over -

Current Features

Authentication
Sign up
Login
Community Index View
Create a Community
View a Community
Edit a Community
Delete a Community
Create a Community Meet
Add a user to a Community
Mobile Responsive Nav Menu

Future Features

Ability to update and delete community meets.
Ability to remove users from a community.
A points feature for every community a user joins, meet they attend, community they create, etc.
Shared experiences for users - (ex. High School, University, Church, Military, Clubs, Groups)
Geolocation to view communities nearby.
Community creator admin and approval process for new members joining.
