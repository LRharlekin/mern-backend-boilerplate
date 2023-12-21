**TAKE NOTE: This is a [template repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository#about-template-repositories).**

In order to use this template and start building, follow the steps in [Creating A Repository From A Template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).

## Project Setup

In order to run the project, setup .env and set MONGO_URI variable equal to DB connection string.

In order to avoid port collisions, in the source code port value is 5000.

# Overview

This is a MERN backend boilerplate, following a standard MVC architecture.

### Adapting the code to your project

**1. Naming changes**

Names (for variables, functions, files, etc.) in the boilerplate are chosen as if the main resource of this project were "items".

Examples:

- The main route to interact with resources is at path `/api/v1/items`.
- The files with this main route as well as the respective controller methods are contained in files named **_items.js_**
- The controller methods for some main CRUD operations are named `getAllItems(), createItem(), deleteItem()` etc.

So, depending on what you are building, it makes sense to rename all of these first.
Do a search-and-replace per file and rename, e.g. if you're building a job board rename everything to: jobs.js, getJobs, createJobs, jobsRouter, etc.
