# Konjo Community

A beautiful app to view, join, and create communities based on shared experience.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Clone the konjoexpress repository from https://github.com/konjoinfinity/konjoexpress/.

### Prerequisites

All of the listed dependencies are required to build and run this application.

npm, express, hbs, body-parser, connect-flash, cookie-parser, express-session, handlebars, method-override, mongodb, mongoose, passport, passport-local, and passport-local-mongoose.

Use the following command to install the dependencies which are in the package.json file.

Ensure you have mongo installed on your local machine.

```
npm install
```

### Installing

After installing the dependencies make sure mongodb is running with the following command:

```
mongod
```

(Leave this terminal window up and running)

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

Add additional notes about how to deploy this on a live system

## Built With

- [handlebars](https://handlebarsjs.com) - Building semantic templates
- [passport](http://www.passportjs.org) - Simple, unobtrusive authentication for Node.js
- [connect-flash](https://github.com/jaredhanson/connect-flash) - Displaying authentication messages.
- [mongodb](https://www.mongodb.com/) - MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need.
- [express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
- [mongoose](https://mongoosejs.com/) - Elegant mongodb object modeling for node.js.

## Contributing

If you would like to contribute to this project, submit an issue or a pull request for review. :-)

## Authors

- **Konjo** - _Initial work_ - [konjoinfinity](https://github.com/konjoinfinity)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc
