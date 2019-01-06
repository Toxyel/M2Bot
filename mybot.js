const Discord = require("discord.js");
const bot = new Discord.Client();
const token = process.env.token;
const prefix = "§";
const ownerID = process.env.ownerID;
const fs = require("fs");

bot.on("ready", () =>
{
  console.log("Bot has been fucking started SUCCesfully!");
});


bot.on("message", (message) =>
{
  if(message.content.startsWith("ů"))
    message.channel.send("Ses přepsal jak piča, co?");

  if(message.content.includes("jo kámo"))
    message.channel.send("V poho kámo");

  if(message.content.includes("to je blast"))
      message.channel.send("No to je mega.");

  if(message.content.includes(" ?"))
    message.channel.send("Mezera před otazníkem, jo? Jaký to je, když tvůj penis je větší než tvoje IQ?");

  if((message.content.includes(" !")) && ((message.content.includes("! !")) == false))
    message.channel.send("Mezera před vykřičníkem? Jesteś cígnem?");

  if(!message.content.startsWith(prefix) || message.author.bot)
      return;



  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(message.content.startsWith(prefix + prefix) && message.author.id == ownerID)
  {
    message.delete();
    const acommand = command.slice(prefix.length);
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

bot.login(token);
