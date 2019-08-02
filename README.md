# Sequelize Passport Demo
This repo utilizes the same structure as we use in The DU Coding Boot Camp, and demonstrates basic MVC. It uses the PassportJS localStrategy for user authentication.

## Getting Started

### Installation/Setup

* Be sure to run an `npm install` to install dependencies.
* On your local computer, create a database for this app.
* Create `.env` at the same level as `server.js` and populate it with values for the following key/value pairs:
    ```
    SESSION_SECRET=yoursecrethere  
    SALT_NUM=8

    DB_USERNAME=root
    DB_PASSWORD=root
    DB_DATABASE=yourdatabasehere
    DB_HOST=localhost
    DB_PORT=8889
    ```
* Run `node server.js` to start the app.

### Deployment

* `/config/config.js` is set up for Heroku/JawsDB; change if needed.
* You will need to add environmental variables (called config vars on Heroku) to supply the values you access locally from your `.env` file.