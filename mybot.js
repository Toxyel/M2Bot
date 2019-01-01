const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");

bot.on("ready", () =>
{
  console.log("Bot has been fucking started SUCCesfully!");
});

bot.on("message", (message) =>
{
  if(message.content.startsWith("ů"))
    message.channel.send("Ses přepsal jak piča, co?");

  if(message.content.startsWith("jo kámo"))
    message.channel.send("V poho kámo");

  if(!message.content.startsWith(config.prefix) || message.author.bot)
      return;



  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(message.content.startsWith(config.prefix + config.prefix) && message.author.id == config.ownerID)
  {
    message.delete();
    const acommand = command.slice(config.prefix.length);
    try
    {
      let commandFile = require(`./acommands/${acommand}.js`);
      commandFile.run(bot, message, args);
    }
    catch (err)
    {
      console.log(err);
    }
    return;
  }




  try
  {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(bot, message, args);
  }
  catch (err)
  {
    message.channel.send("Neplatný příkaz, zkus §help.")
  }
});

bot.login(config.token);
