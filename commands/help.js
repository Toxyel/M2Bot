//works, needs update after each new .js
exports.run = (bot, message, args) =>
{
  if(args.length === 0)
  {
    message.channel.send({embed:
    {
      color: 15844367,
      author:
      {
        name: bot.user.username + " - Nápověda",
        icon_url: bot.user.avatarURL
      },
      fields:
      [{
        name: "§Help utility",
        value: "Seznam utilitních příkazů."
      },
      {
        name: "§Help game",
        value: "Seznam herních příkazů."
      },
      {
        name: "§Info",
        value: "Zobrazí info o botovi."
      },
      {
        name: ":question:",
        value: "Několik hidden příkazů..."
      }],

      footer:
      {
        icon_url: bot.user.avatarURL,
        text: bot.user.username + " v0.0.1 "
      }
    }
    }).catch(console.error);
  }

  else if(args[0]==="utility")
  {
    message.channel.send({embed:
    {
      color: 15844367,
      author:
      {
        name: bot.user.username + " - Nápověda - Utility",
        icon_url: bot.user.avatarURL
      },
      fields:
      [{
        name: "§Pozdrav",
        value: "Pozdraví tě."
      },
      {
        name: "§Sdělit <text>",
        value: "Řekne větu."
      }],
      footer:
      {
        icon_url: bot.user.avatarURL,
        text: bot.user.username + " v0.0.1 "
      }
    }
    }).catch(console.error);
  }

  else if (args[0]==="game")
  {
    message.channel.send({embed:
    {
      color: 15844367,
      author:
      {
        name: bot.user.username + " - Nápověda - Game",
        icon_url: bot.user.avatarURL
      },
      fields:
      [{
        name: "Zatím nic",
        value: "xxx"
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
    message.channel.send("Nesprávné argumenty příkazu. Zkus §help | §help utility | §help game.").catch(console.error);


}
