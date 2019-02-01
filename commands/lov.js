exports.run = (bot, message, args) =>
{
      var skill = Math.floor(Math.random() * 3);
      if(skill === 0)
      {
        message.channel.send("Smr�� me�e");
      }
      else if(skill === 1)
      {
        message.channel.send("Siln� t�lo");
      }
      else if(skill === 2)
      {
        message.channel.send("L��ka");
      }
      else
      {
        message.channel.send("To teda.");
      }
}