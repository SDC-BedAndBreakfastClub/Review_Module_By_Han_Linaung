# AirBnB-Clone Reviews Module

> Service responsible for rendering a component clone of Airbnb's Reviews Module.

## Related Projects

- https://github.com/BedandBreakfastClub/airbnb-clone-photo-module
- https://github.com/BedandBreakfastClub/airbnb-clone-booking-module
- https://github.com/BedandBreakfastClub/airbnb-clone-similar-listings-module

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Download, install and run all the related project services, then run the following command:

```sh
npm run react-dev
npm start
```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 8.12.0
- MySQL 5.7

## CRUD

- GET api/rooms/:id/photos/ - gets photo by id from database
- POST api/rooms/:id/photos/ - adds photo by id to database
- PUT api/rooms/:id/photos/ - updates photo by id in database
- DELETE api/rooms/:id/photos/ - removes photo by id from database

### Installing Dependencies

From within the root directory:

```sh
npm install
```

### Seeding the database

From within the root directory:

```
npm run seed
```

### Running the server

From within the root directory:

```
npm run react-dev
npm start
```
