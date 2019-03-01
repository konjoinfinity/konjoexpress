# Konjo Community

![alt text](http://konjotech.com/community/1.png)

A beautiful app to view, join, and create communities based on shared experience. Once users create an account and are logged in, users can view, create, edit, and delete communities. Once a community has been created, a user can join that community. The user can also create meets for that specific community to include the location, time, and date.

I hope you enjoy the app and create beautiful communities! :-D

-Konjo

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Clone the konjoexpress repository from https://github.com/konjoinfinity/konjoexpress/.

### Prerequisites

All of the listed dependencies are required to build and run this application. Also a Mac computer with OSX is required to run this project locally.

#### Required NPM Packages

- npm
- express
- hbs
- body-parser
- connect-flash
- cookie-parser
- express-session
- handlebars
- method-override
- mongoose
- passport
- passport-local
- passport-local-mongoose.

Ensure you have mongo installed on your local machine. Use the following guide: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

Make sure mongodb is running with the following command:

```
mongod
```

(Leave this terminal window up and running)

### Installing

Use the following command to install the dependencies which are in the package.json file.

```
npm install
```

Once mongodb is running, in a new terminal window type the following command to run the localhost server:

```
nodemon
```

You should see the following output from the command line:

```
[nodemon] 1.18.10
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node index.js`
Running on PORT: 4000
```

You can now visit localhost:4000 in your browser to view the app.

## Deployment

This app has been deployed to heroku here: https://konjocommunity.herokuapp.com/

## Built With

- [handlebars](https://handlebarsjs.com) - Building semantic templates
- [passport](http://www.passportjs.org) - Simple, unobtrusive authentication for Node.js
- [connect-flash](https://github.com/jaredhanson/connect-flash) - Displaying authentication messages.
- [mongodb](https://www.mongodb.com/) - MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need.
- [express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
- [mongoose](https://mongoosejs.com/) - Elegant mongodb object modeling for node.js.

## Contributing

If you would like to contribute to this project, submit an issue or a pull request for review. :-)

## Future Features

- Ability to update community meets.
- Ability to remove users from a community.
- A points feature for every community a user joins, meet they attend, community they create, etc.
- Shared experiences for users - (ex. High School, University, Church, Military, Clubs, Groups)
- Geolocation to view communities nearby.
- Community creator admin and approval process for new members joining.

## Authors

- **Konjo** - [konjoinfinity](https://github.com/konjoinfinity)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Thank you to Ryan White and Cathy Le for assistance in solving nested document issues.
- The inspiration for this project was based upon an original idea by Konjo in December 2018.
- A big thank you to Zakk and Hammad for teaching and continued support for WDI28/SEI2.
