# Example discord bot

##### Node.js is a Javascript runtime that allows you to run Javascript code inside your console. Node.js is not a programming language, it's simply a runtime for Javascript.

##### During this activity, I'll be in the Coder Dojo Brighton Discord server voice channel if you need support, you can also direct message me on Slack / Discord.

##### To test your bot, you'll need to be in a Discord server where it doesn't matter if you mess anything up, I've created one such discord: [Coder Dojo Brighton - Test Suite](https://discord.gg/tkKpnUJ).

##### If at any point you have any questions, you can either message me on Discord (`shnopy#2525`), or you can message me on Slack. I'll try to get back to you as quickly as I can

### Things you'll find in this repo

| File         | Description                                                                                           |
| ------------ | ----------------------------------------------------------------------------------------------------- |
| .gitignore   | Shows you what you need to ignore to push a discord bot onto github                                   |
| .env.example | Example `.env` file, you can use this if you're having a hard time making one                         |
| .eslintrc.js | ESlint configuration, you can use this unless you're manually configuring it                          |
| index.js     | Example `index.js` file, you can use this to make sure you've written it correctly or to debug errors |

<br />

## Getting started

### Creating your bot application

- To be able to add your bot to the testing server later on in this tutorial, you'll need to make an application on [Discord's developer page](https://discord.com/developers/applications). If you're not logged in, you'll be prompted to do so.
- Once you're on this page, you'll need to press `New Application` which will prompt you to enter a name for your application. This will also be your bot's name.
  - Once it's created you'll be taken to the dashboard for your application, the only part we're interested in is the `Bot` tab.
  - Once you're on the `bot` tab you'll be able to press `Add Bot`, accept the prompt that comes up.
  - As soon as this is done you can add your bot to the testing server
    - Navigate to the `OAuth2` tab, you'll see an `OAuth2 URL Generator`
    - Check the `bot` box, this will then ask you for permissions
    - Check "Administrator"
    - If you scroll back up to the URL generator, you'll see a link. This is what you will use to invite your bot
  - Keep the window open as you will need the secret token later on.

<br />

### Picking your text editor / IDE

- You can make a discord bot in just about any text editor, but it's recommended to use one with auto-complete as it saves a lot of time. The text/code editor I'm using is [Visual Studio Code](https://code.visualstudio.com/) (VSC)
- It's a very powerful and fast text editor, it allows you to have extensions to assist you in coding.

<br />

### How to install node.js

- Downloading it is a very simple task, just head over to the [Node.js website](https://nodejs.org/en/) and download the latest LTS version.
- It will then download and the setup will take you through some simple options such as where you want to install it. I recommend you install it in the default directory

#### How to install packages

- `npm` is the package manager that comes with node.js, it's what you will be using to install our packages

##### First you will need to initialize an empty project

- This can be done with one very simple command, `npm init`. This will take you through each part of your project and allow you to type in your author name, description, etc.
- You can skip having to accept everything with the `-y` flag. For example: `npm init -y`

##### To install packages, you first need to know what the commands you run do.

- `npm i` is shorthand for `npm install`, this argument allows us to install our packages
- `npm i -g` is shorthand for `npm install --global`, this allows us to install packages globally
- `npm i -D` is shorthand for `npm install --save-dev` this installs the package and saves it into the `devDependencies` section of our package file

#### Package install order

- The order isn't crucial, but it's worth doing the smaller ones first. You can install multiple packages at the same time by appending them to the end of the install command, for example: `npm i discord.js dotenv` would install the `diiscord.js` and the `dotenv` package.

| Package    | Install Command  | How to import / Run                                                                                           | Info                                            |
| ---------- | ---------------- | ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| discord.js | npm i discord.js | `const discord = require("discord.js");`                                                                      |
| dotenv     | npm i dotenv     | `require("dotenv").config();`                                                                                 |
| nodemon    | npm i -g nodemon | From your console in the bot directory run: `nodemon`                                                         |
| eslint     | npm i -D eslint  | From your console in the bot directory run: `npx eslint --init` (**Unless you're using the provided config)** | Only do this if you're using Visual Studio Code |

<br />

## The Setup

### Setting up VSC and `eslint`

- If you're using VSC you'll hopefully have installed the `eslint` package. This allows you to set up exactly how you code so you never stray too far or make too many errors. To get this working with VSC you'll need to install the [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension
- Once that's installed you can either download the `.eslintrc.js` file from the files above or you can run `npx eslint --init` and run through the setup yourself

<br />

## Starting to code

#### Setting up the file structure

- To start with we're going to have a single file handling everything, at a later stage you will have handlers for events, and files for each command.
- The main file of any node.js/Javascript project is `index.js`, this tells the runtime where to start. This is where you will put our code
  - you will need somewhere to store out bot token \*\* **NEVER SHARE THIS TOKEN** \*\*, this can be stored in a file called `.env`, for example: `TOKEN=token-here`

<br />

#### Running the bot

- Head over to your command line
  - Navigate to the directory where your bot is stored
  - Run `nodemon`, this will restart your bot whenever you save the `index.js` file

<br />

#### The actual code

##### Imports

- Now you've setup your file structure and have a simple prefix in place, we can begin to actually code!

  - The example code is avaliable in the repo for those who are finding it hard to follow along

- To start you will need to import our settings from the `.env` file. This can be done by importing the `dotenv` module.

  - `require("dotenv").config();`
  - This loads anything in the `.env` file into the program's environment variables, hiding them from users. You should never commit this file
  - You can access anything in here by writing `process.env.VARNAME`

- The next thing you will need to do is import discord.js, this is the base of any bot written in Javascript

  - `const discord = require("discord.js");`
  - This imports the discord.js module, which you will use to make the bot

- Once they're imported, you should have this in your `index.js` file

```js
require("dotenv").config();
const discord = require("discord.js");
```

<br />

##### Adding the client

- You now need to make a discord client, this will be what you use to communicate to Discord
  - This can be done very simply by adding the line

```js
const client = new discord.Client();
```

- Now you're almost ready to let our bot log in and get it online!
- Before you do that though, you need to add an event listener, this will tell the bot to listen out for this event
  - This allows you to add a function that runs whenever this event is fired
- The event you want to listen for right now is `ready`
  - To add this all you need to do is type:

<br />

##### Adding the "ready" event listener

```js
client.on("ready", () => {});
```

- The `client.on()` part allows us to add the event listener
  - The `()=>{}` is a more modern way of doing `function(){}`, it works exactly the same
- Inside of this function, you simply want to send the console a message to say that the bot is ready
  - This can be done by writing the most basic line of code in Javascript

```js
console.log("Bot ready");
```

- Once you've added that your code should look like this

```js
require("dotenv").config();
const discord = require("discord.js");
const client = new discord.Client();

client.on("ready", () => {
  console.log("Bot ready");
});
```

<br />

##### Logging your bot in

- This is the part where you'll need your token you saw earlier. If you haven't already, you should make a `.env` file and put the token in there.
- Once this is done, navigate over to your code and type this

```js
client.login(process.env.TOKEN);
```

- This tells the client to log in with this token
  - If you now run the bot, you should see that it's online
- Right now it won't do anything as there's nothing to handle messages, this is something we'll do next time.
  - (If you've managed to get here extremely quickly send me a DM on Slack and I'll talk you through making a message handler)
