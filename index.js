require("dotenv").config();
const discord = require("discord.js");
const config = require("./config.json");
const client = new discord.Client();

client.on("ready", () => {
  console.log("Bot ready");
});