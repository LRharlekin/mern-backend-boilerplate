**TAKE NOTE: This is a [template repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository#about-template-repositories).**

In order to use this template and start building, follow the steps in [Creating A Repository From A Template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

## Project Setup

In order to run the project, setup .env and set MONGO_URI variable equal to DB connection string.

In order to avoid port collisions, in the source code port value is 5000.

# Overview

This is a MERN backend boilerplate, following a standard MVC architecture.

### Dependencies, connecting to your MongoDB, etc.

- npm i
- provide your Connection String inside a dot.env config file, and assign to MONGO_URI

### Adapting the code to your project

**1. Change the naming**

Names (for variables, functions, files, etc.) in the boilerplate are chosen as if the main resource of this project were "items".

Examples:

- The main route to interact with resources is at path `/api/v1/items`.
- The files with this main route as well as the respective controller methods are contained in files named **_items.js_**
- The controller methods for some main CRUD operations are named `getAllItems(), createItem(), deleteItem()` etc.

So, depending on what you are building, it makes sense to rename all of these first.
Do a search-and-replace per file and rename, e.g. if you're building a job board rename everything to: getJobs, createJobs, jobsRouter, etc.

If you rename the files in the routes and controllers directories (e.g. from items.js to jobs.js), also make sure to rename the respective paths when requiring these modules.

### Script to quickly populate your db with dummy data

The script in populate.js can be executed via node populate command, but is otherwise disconnected from the app.

Create a .json file, point to it from the populate.js script, and run the script to quickly populate a new collection in your MongoDB with data.

## Features

### Req-Res-Lifecycle Diagram

req > passes through middleware > passes through middleware > controller > passes through middleware, etc.

E.g.: createItem (POST request to /api/v1/items) with valid auth header of a logged in / authorized user and with valid req body,

1. passes through **authenticateUser middleware**, where...

- auth header and token are checked,
- then token payload is decrypted,
- and the user's identifying info is attached to req as req.user property,
- before passing the whole req on to the router

2. Router routes the req to the correct controller/handler
3. The controller createItem()

- takes the userID from req.body.user and attaches it to the req.body as .createdBy property
- then creates the new resource via mongoose query .create()
- sends valid response

### Queries implemented / ready to use

- text filter via regex
- sort filter
- select filter
- skip filter
- limit filter
- pagination logic using skip & limit
- numeric filters
