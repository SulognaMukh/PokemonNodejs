# Part 1 - Practical

Ash Ketchum caught some Pokémon and wants to find the evolution chain, but he can’t find
it in his Pokedex.
Ash wants to start training with those Pokémon and he is asking for some help to find the
evolution chain and the variations on which they evolve using the Poke API, whose
documentation can be found here https://pokeapi.co/docs/v2

---
## Requirements

For development, you will only need Node.js v16.16.0,npm version 9.6.3 installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

####

## Install

    $ git clone https://github.com/YOUR_USERNAME/PROJECT_TITLE
    $ cd PROJECT_TITLE
    $ yarn install

## Configure Postman Testing 
Postman is a Chrome add-on and application which is used to fire requests to an API.

Features:
Very lightweight and fast
Requests can be organized in groups (called collections) and folders
Tests can be created with verifications for certain conditions on the response
Share workspaces or collections with other people or teams
Publish collections as API documentation
Run tests on collections (using the Collection Runner or Newman)
Monitor collections
Setup mock servers

Download the application here: https://www.getpostman.com/downloads/

Testing Result is shared src\testing\Testing Result.jpg

## Adding dependencies in the project
    npm i axios
    npm i express
   
   Use below version as reference from https://www.npmjs.com/package
    "axios": "^1.4.0",
    "express": "^4.18.2"

## Running the project
    $ npm i
    $ node server.js
