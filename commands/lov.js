﻿exports.run = (bot, message, args) =>
{
      var skill = Math.floor(Math.random() * 3);
      if(skill === 0)
      {
        message.channel.send("Smršť meče");
      }
      else if(skill === 1)
      {
        message.channel.send("Silné tělo");
      }
      else if(skill === 2)
      {
        message.channel.send("Léčka");
      }
      else
      {
        message.channel.send("To teda.");
      }
}