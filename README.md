# Number's Game

Numbers Game makes the job search organized and systematic by allowing you to compile jobs from different sites, and keep track of jobs in your pipeline. 

Currently, there are no comprehensive web apps to help job seekers organize their job search.  Number's Game intends to solve this problem by being a place where a job seeker can search for jobs, save them, and keep track of job-related deadlines and interview information. The name “Numbers Game” comes from the idea from sales, that consistently applying to a certain quantity of jobs will help you actually find one.  

## Team

  - __Product Owner__: Michael Dziedzic
  - __Scrum Master__: Aimee Rosato
  - __Development Team Members__: Ian Akers, Tim Dang, Fanny Vasquez

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

Number's Game is a Single Page Application that runs on Rethink DB, Koa, React, Redux and Node JS. The entry point to start the site is by running:

```sh
node server/server.js
```

## Requirements

```sh
"axios": "^0.9.1",
"co-body": "^4.0.0",
"google-auth-library": "^0.9.7",
"googleapis": "^4.0.0",
"immutable": "^3.7.6",
"kcors": "^1.1.0",
"koa": "^1.2.0",
"koa-passport": "^1.3.0",
"koa-router": "^5.4.0",
"koa-session": "^3.3.1",
"koa-spa": "^0.1.3",
"material-ui": "^0.15.0-alpha.1",
"passport-google": "^0.3.0",
"passport-google-oauth": "^1.0.0",
"path": "^0.12.7",
"react": "^0.14.6",
"react-addons-css-transition-group": "^0.14.6",
"react-addons-test-utils": "^0.14.7",
"react-bootstrap": "^0.28.3",
"react-dom": "^0.14.6",
"react-redux": "^4.4.1",
"react-router": "^2.0.0-rc5",
"react-router-redux": "^4.0.0",
"react-tap-event-plugin": "^0.2.2",
"redux": "^3.3.1",
"redux-immutable": "^3.0.6",
"redux-thunk": "^2.0.1",
"request": "^2.69.0",
"rethinkdb": "^2.2.2",
"superagent": "^1.8.2",
"thinky": "^2.2.5"
```

## Development

Development for this project was completed during Hack Reactor's Thesis project sprint. It took several intensive weeks and five dedicated developers to deliver the working product you see here.

### Installing Dependencies

From within the root directory:

```sh
npm install
bower install
```

### Roadmap

View the project roadmap [here](https://github.com/toadToadToadToadAndToad/numbers-game/issues)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

@git-commands
git pull --rebase upstream master
git pull --rebase upstream yourbranchhere
