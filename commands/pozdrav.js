exports.run = (bot, message, args) =>
{
  if(args.length === 0)
  {
    message.delete();
    message.channel.send({embed:
      {
        color: 15844367,
        description: `Zdravím tě, týpku se jménem ${message.member.displayName}!`
      }
    }).catch(console.error);
  }

  else
   message.channel.send("Chyba! Tento příkaz nemá argumenty.");
}
