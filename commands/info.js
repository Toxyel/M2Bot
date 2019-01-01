//something needs to be added here
exports.run = (bot, message, args) =>
{
  if(args.length === 0)
  {
    message.channel.send({embed:
      {
        color: 15844367,
        description: "Metin2 bot, který je dobrý a bude lepší.",
        author:
        {
          name: "About " + bot.user.username,
          icon_url: bot.user.avatarURL
        },
        thumbnail:
        {
          url: bot.user.avatarURL
        },
        fields:
        [{
          name: "Autor",
          value: "Toxyel"
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
    message.channel.send("Chyba! Tento příkaz nemá argumenty.").catch(console.error);
}
