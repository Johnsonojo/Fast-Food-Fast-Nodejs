# Fast-Food-Fast-Nodejs

[![Build Status](https://travis-ci.org/Johnsonojo/Fast-Food-Fast-Nodejs.svg?branch=develop)](https://travis-ci.org/Johnsonojo/Fast-Food-Fast-Nodejs)
[![Coverage Status](https://coveralls.io/repos/github/Johnsonojo/Fast-Food-Fast-Nodejs/badge.svg?branch=develop)](https://coveralls.io/github/Johnsonojo/Fast-Food-Fast-Nodejs?branch=develop)


Fast-Food-Fast is a food delivery service app for a restaurant.

# 
* *See Pivotal Tracker Project Management Board*:
https://www.pivotaltracker.com/n/projects/2396137

* *Fast-Food-Fast Application hosted on heroku*:
https://fast-food-fast-backend.herokuapp.com/

## Table of Content
* [Features](#features)
* [Background](#background)
* [Installation](#installation)
* [Tests](#tests)
* [Endpoints](#endpoints)
* [Authors](#authors)
* [Acknowledgement](#acknowledgement)

## Features
Here are the list of features Fast-Food-Fast offers which are divided into to parts:

### User
- Users can create an account 
- Users can get their email verified upon successful sign up
- Users can login to their account
- Users can get a list of food menu
- Users can get the details of a menu
- Users can place an order for food
- Users can get their order details
- Users can edit their order details
- Users can get their order history,
- Users can edit their profile

### Admin
- Admin can add fast-food items
- Admin can edit a fast-food item
- Admin can delete a fast-food item
- Admin can get a list of fast-food items
- Admin user can get a list of all orders
- Admin user can get a list of orders for a particular user
- Admin can accept and decline orders
- Admin can mark orders as completed
- Admin can get the history of ordered food


## Background

We will build this application with the following technologies:

* [ECMAScript 6](https://en.wikipedia.org/wiki/ECMAScript)
* [NodeJS](https://nodejs.org/en/)
* [ExpressJS](https://en.wikipedia.org/wiki/Express.js)
* [Postgres](https://www.postgresql.org/)
* [Sequelize ORM](https://sequelize.org)
* [Babel](https://babeljs.io/)


## Installation

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes:

* Install [NodeJs](https://nodejs.org/en/download/) and [PostgreSQL](https://www.postgresql.org/download/) on your computer.
* Clone the git repository using `git clone
  git@github.com:Johnsonojo/Fast-Food-Fast-Nodejs.git`
* install [sync-dotenv](https://www.npmjs.com/package/sync-dotenv) to help in syncing your `.env` file with a `.env.sample` file.
* Set up your environment variables in a `.env` file. Follow the pattern in the `src/db/config/config.js` file.
* Create your development and test databases and add their credentials to the `.env` file.
* Run `npm install` on the command line to install all dependencies.
* Run `npm run dev:seed` to setup and seed data into your development database.
* Run `npm run dev:start` to start the server or `npm run dev:start:watch` to watch for file changes while the development server is running.
* Navigate to [localhost:3000](localhost:3000) in your browser to access the application.
* Open postman and verify all shortlisted endpoints.


## Tests

* Type `npm test` to run tests on the command line.

## Endpoints
<table>
<tr><th>Http verbs</th><th>Endpoints</th><th>Functionality</th></tr>
<tr><td>POST</td><td>http:localhost:3000/api/auth/signup</td><td> Register a user ✅✅</td></tr> 
<tr><td>POST</td><td>http:localhost:3000/api/verification</td><td> Verifies a user's email address ✅✅</td></tr>
<tr><td>POST</td><td>http:localhost:3000/api/auth/login</td><td> Login a user ✅✅</td></tr>
<tr><td>PUT</td><td>http:localhost:3000/api/user </td><td> Users can edit their profile ✅✅</td></tr>
<tr><td>GET</td><td>http:localhost:3000/api/user </td><td> Get currently logged in user ✅✅</td></tr>
<tr><td>GET</td><td>http:localhost:3000/api/menu </td><td> Users can get all available menu ✅✅</td></tr>
<tr><td>POST</td><td>http:localhost:3000/api/menu </td><td> Admin can post a menu ✅✅</td></tr>
<tr><td>DELETE</td><td>http:localhost:3000/api/menu/:menuId </td><td> Admin can delete a specific menu ✅✅</td></tr>
<tr><td>PUT</td><td>http:localhost:3000/api/menu/:menuId </td><td> Admin can edit a specific menu ✅✅</td></tr>
<tr><td>GET</td><td>http:localhost:3000/api/menu/:menuId </td><td> Users can get a specific menu ✅✅</td></tr>
<tr><td>POST</td><td>http:localhost:3000/api/orders</td><td> Users can order for food</td></tr>
<tr><td>GET</td><td>http:localhost:3000/api/users/:userId/orders</td><td> Get the order history for a
particular user</td></tr>
<tr><td>GET</td><td>http:localhost:3000/api/users </td><td> Users and Admin can view other users profile</td></tr>
<tr><td>GET</td><td>http:localhost:3000/api/users/:userId </td><td> Users and Admin can get a particular user</td></tr>
<tr><td>GET</td><td>http:localhost:3000/api/users/:userId </td><td> Admin can get a particular user's orders</td></tr>
<tr><td>GET</td><td>http:localhost:3000/api/orders/:orderId</td><td>Admin can get a specific order</td></tr>
<tr><td>GET</td><td>http:localhost:3000/api/orders</td><td> Admin can get all orders</td></tr>
<tr><td>PUT</td><td> http:localhost:3000/api/orders/:orderId </td><td> Admin can update the status of an order</td></tr>
</table>


## Authors
Johnson Ojo

