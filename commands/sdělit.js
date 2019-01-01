exports.run = (bot, message, args) =>
{
  let text = args.join(" ");
  message.delete();
  message.channel.send({embed:
  {
    color: 15844367,
    author:
    {
      name: message.member.displayName + " sděluje:",
      icon_url: message.author.avatarURL
    },
    description: text
  }
}).catch(console.error);
}

//nemá fungovat bez argumentů
