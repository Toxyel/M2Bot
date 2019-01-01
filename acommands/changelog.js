//works (arguments included for future refference)
exports.run = (bot, message, args) =>
{
  if(args.length === 0)
  {
    message.channel.send({embed:
    {
      color: 15844367,
      author:
      {
        name: bot.user.username + " - Changelog (v0.0.1)",
        icon_url: bot.user.avatarURL
      },
      fields:
      [{
        name: "Info",
        value: "Samé dobré věci."
      }],

      footer:
      {
        icon_url: bot.user.avatarURL,
        text: bot.user.username + " v0.0.1 "
      }
    }
  }).catch(console.error);
  }

  else
   console.log("Too many arguments in function changelogmsg.");
}
