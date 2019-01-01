//works
exports.run = (bot, message, args) =>
{
  if(args.length === 0)
    {
      message.channel.send({files: ["https://media.discordapp.net/attachments/450404783812116481/453109898633543690/unknown.png"]}).catch(console.error);
    }
  else
    message.channel.send("Chyba! Tento příkaz nemá argumenty.").catch(console.error);
}
