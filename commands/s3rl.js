//works
exports.run = (bot, message, args) =>
{
  if(args.length === 0)
    {
      message.channel.send("Jdi do prdele čuráku vymrdaný!").catch(console.error);
    }
  else
    message.channel.send("Chyba! Tento příkaz nemá argumenty.").catch(console.error);
}
