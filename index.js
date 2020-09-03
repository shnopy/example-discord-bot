require("dotenv").config();
const discord = require("discord.js");
const client = new discord.Client();

client.on("ready", () => {
  console.log("Bot ready");
});

client.login(process.env.TOKEN);