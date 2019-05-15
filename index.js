const Discord = require('discord.js');
const bot = new Discord.Client();
const ayarlar = require('./ayarlar')

let prefix = "!";
let owner = "293823657384476678";


bot.on("ready", guild => {
    bot.user.setActivity("BOT AYARLANIYOR!", {type: "PLAYING"});
    console.log("Sunucuya giriş yaptım!")
});

bot.on('guildMemberAdd', member => {
    let guild = member.guild;
    let joinRole = guild.roles.find('name', 'T.C Vatandaşı');
    member.sendMessage("")
    member.addRole(joinRole);
  
    const channel = member.guild.channels.find('name', '🎊gelen-giden');
    if (!channel) return;
    const embed = new Discord.RichEmbed()
    .setColor('0x00cc44')
    .setAuthor(bot.user.username, bot.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`:inbox_tray: ${member.user.username} Sunucuya katıldı.`)
    .setTimestamp()
    channel.sendEmbed(embed);
  });
  
  bot.on('guildMemberRemove', member => {
    const channel = member.guild.channels.find('name', '🎊gelen-giden');
    if (!channel) return;
    const embed = new Discord.RichEmbed()
    .setColor('0xff1a1a')
    .setAuthor(bot.user.username, bot.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`:outbox_tray: ${member.user.username} Sunucudan ayrıldı.`)
    .setTimestamp()
    channel.sendEmbed(embed);
  });

bot.on("message", message => {
    if (message.content.toLowerCase() === prefix + "avatarım") {
    message.channel.sendEmbed(new Discord.RichEmbed()
    .setDescription(`Avatarınız:`)
    .setImage(`${message.author.avatarURL} `)
    .setColor("RANDOM"));
       }
    });

    bot.on("message", message => {
  
        if (message.content.toLowerCase() ===  'selam') {
          message.reply('Selam!');
        }  
        
        if (message.content.toLowerCase() ===  'merhaba') {
          message.reply('Merhaba!');
        }  
        
        if (message.content.toLowerCase() ===  'selamlar') {
          message.reply('Selam!');
        }  
        
        if (message.content.toLowerCase() ===  'sa') {
          message.reply('Aleyküm selam!');
        }  
          
        if (message.content.toLowerCase() ===  'merhabalar') {
          message.reply('Merhaba!');
        } 
        
          if (message.content.toLowerCase() ===  'selamun aleykum') {
          message.reply('Aleyküm selam!');
        }

        if (message.content.toLowerCase() === prefix + "ping") {
            const embed = new Discord.RichEmbed()
                .setColor(0xff1a1a)
                .setDescription(":hourglass: Pingim **" + bot.ping + "** ms")
              return message.channel.sendEmbed(embed)
        }  
    });
      
//kırmızı renk kodu 0xff1a1a
//yeşil renk kodu 0x00cc44   
bot.login(process.env.BOT_TOKEN);
