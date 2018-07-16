# TODO Management APP

[![Built with Spacemacs](https://cdn.rawgit.com/syl20bnr/spacemacs/442d025779da2f62fc86c2082703697714db6514/assets/spacemacs-badge.svg)](http://spacemacs.org)

A simple application for the use of TODO management for the control of all functionalities, events and requirements.

## Candidate:
Gabriel Vargas Monroy

### How to use this project

1. **Clone this Repo**
  ```sh
  → https://github.com/vmgabriel/todo-management.git
  ```

2. **Build the Dockerfile**
  ```sh
  → docker-compose build
  ```

3. **Install the node dependencies.  This must be done by running `NPM` inside of the container, since it is a specific flavor of Linux**
  ```sh
  → docker-compose run sails npm install
  ```

4. **If there were no errors in the previous step, you can lift sails**
  ```sh
  → docker-compose up
  ```


5. **And, open the app in your favorite browser on OS/X**
  ```sh
  → open http://$(docker-machine ip default):1337
  ```

6. **Open de page in port 1337**

[LInk Project](http://localhost:1337 "Link Project")


#### Used technologies

Sails
![Image Logo Sails](image/SailsJS_logo.png "Image Sails")

Build practical, production-ready Node.js apps in a matter of weeks, not months. 
Sails is the most popular MVC framework for Node.js, designed to emulate the familiar MVC pattern of frameworks like Ruby on Rails, but with support for the requirements of modern apps: data-driven APIs with a scalable, service-oriented architecture.

a [Sails v1](https://sailsjs.com) application

View Engine - PUG
![Image Logo PUG](image/pug.png "Image PUG")

Pug is a high-performance template engine heavily influenced by Haml and implemented with JavaScript for Node.js and browsers. For bug reports, feature requests and questions, open an issue. For discussion join the chat room.

[Pug](https://pugjs.org/ "pug link")

DB - Persistence - MONGO

![Image Logo Mongo](image/mongo-db-logo.png "Image Mongo")

The MongoDB Server is written in C++ with an extensive suite of tests in JavaScript. To get started with the server, you will want to see Building with Server. For help with the tools, see Building the Tools or http://github.com/mongodb/mongo-tools. If you are looking to instead get started with drivers that connect to the server, check out our list of official drivers for more information.

[Mongo](https://www.mongodb.com/ "mongo link")

Deploy - Docker

![Image Logo Docker](image/docker.png "Image Docker")

Docker is the company driving the container movement and the only container platform provider to address every application across the hybrid cloud. Today’s businesses are under pressure to digitally transform but are constrained by existing applications and infrastructure while rationalizing an increasingly diverse portfolio of clouds, datacenters and application architectures. Docker enables true independence between applications and infrastructure and developers and IT ops to unlock their potential and creates a model for better collaboration and innovation. 

[Docker](https://www.docker.com/ "Docker link")


### Licence

GNU-GPL 3.0
