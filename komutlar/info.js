const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {
 
  if (!message.member.roles.has("770535126596714528") && !message.member.hasPermission("MANAGE_MESSAGES") )
   return message.channel.send(hata).then(m =>m.delete(10000))
    let guild = "769946056556806175";
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  var msg = message;
  var üyesayısı = msg.guild.members.size.toString().replace(/ /g, "    ")
  var üs = üyesayısı.match(/([0-9])/g)
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
  '0': `<a:sfr:770520951070261258>`,
    '1': `<a:bir:770520950881124352>`,
    '2': `<a:iki:770520951296622592>`,
    '3': `<a:uc:770520950840098838>`,
    '4': `<a:drt:770520951493492737>`,                      
    '5': `<a:bes:770520950805364776>`,
    '6': `<a:alt:770520951459676170>`,
    '7': `<a:yedi:770520950893838357>`,
    '8': `<a:sekiz:770520951263461377>`,
    '9': `<a:dokuz:770520947744702494>`}[d];
      })
    }/////////////////////////////
  var sessayı = count.toString().replace(/ /g, "    ")
  var üs2 = sessayı.match(/([0-9])/g)
  sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs2) {
    sessayı = sessayı.replace(/([0-9])/g, d => {
      return {
  '0': `<a:sfr:770520951070261258>`,
    '1': `<a:bir:770520950881124352>`,
    '2': `<a:iki:770520951296622592>`,
    '3': `<a:uc:770520950840098838>`,
    '4': `<a:drt:770520951493492737>`,                      
    '5': `<a:bes:770520950805364776>`,
    '6': `<a:alt:770520951459676170>`,
    '7': `<a:yedi:770520950893838357>`,
    '8': `<a:sekiz:770520951263461377>`,
    '9': `<a:dokuz:770520947744702494>`}[d];
      })
    }
 
  /////////////////////////////////////////
    var bostbasansayi = message.guild.roles.get('769947305741647903').members.size.toString().replace(/ /g, "    ")
  var üs2 = bostbasansayi.match(/([0-9])/g)
  bostbasansayi = bostbasansayi.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs2) {
    bostbasansayi = bostbasansayi.replace(/([0-9])/g, d => {
      return {
  '0': `<a:sfr:770520951070261258>`,
    '1': `<a:bir:770520950881124352>`,
    '2': `<a:iki:770520951296622592>`,
    '3': `<a:uc:770520950840098838>`,
    '4': `<a:drt:770520951493492737>`,                      
    '5': `<a:bes:770520950805364776>`,
    '6': `<a:alt:770520951459676170>`,
    '7': `<a:yedi:770520950893838357>`,
    '8': `<a:sekiz:770520951263461377>`,
    '9': `<a:dokuz:770520947744702494>`}[d];
      })
    }
  /////////////////////////////////////////
  var tagdakiler = 0;
  let tag = "✬";
  message.guild.members.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }  
  })
  var tagdakilerr = tagdakiler.toString().replace(/ /g, "    ")
  var üs3 = tagdakilerr.match(/([0-9])/g)
  tagdakilerr = tagdakilerr.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs3) {
    tagdakilerr = tagdakilerr.replace(/([0-9])/g, d => {
      return {
 '0': `<a:sfr:770520951070261258>`,
    '1': `<a:bir:770520950881124352>`,
    '2': `<a:iki:770520951296622592>`,
    '3': `<a:uc:770520950840098838>`,
    '4': `<a:drt:770520951493492737>`,                      
    '5': `<a:bes:770520950805364776>`,
    '6': `<a:alt:770520951459676170>`,
    '7': `<a:yedi:770520950893838357>`,
    '8': `<a:sekiz:770520951263461377>`,
    '9': `<a:dokuz:770520947744702494>`}[d];
      })
    }
  //////////////////////////////////////////
  var onlayn = message.guild.members.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
  var üs4= onlayn.match(/([0-9])/g)
  onlayn = onlayn.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs4) {
    onlayn = onlayn.replace(/([0-9])/g, d => {
      return {
  '0': `<a:sfr:770520951070261258>`,
    '1': `<a:bir:770520950881124352>`,
    '2': `<a:iki:770520951296622592>`,
    '3': `<a:uc:770520950840098838>`,
    '4': `<a:drt:770520951493492737>`,                      
    '5': `<a:bes:770520950805364776>`,
    '6': `<a:alt:770520951459676170>`,
    '7': `<a:yedi:770520950893838357>`,
    '8': `<a:sekiz:770520951263461377>`,
    '9': `<a:dokuz:770520947744702494>`}[d];
      })
    }
  ///codare farkıyla bebeğim
let emoji1 = `<a:kelebek:770521083744485376>`;
 const embed1 = new Discord.RichEmbed()
 .setColor('000000')
 .setAuthor('✬ Paradox')
 .setDescription(`${emoji1} **Sunucumuzda Toplam ** ${üyesayısı} **Üye bulunmakta.** \n\n ${emoji1} **Sunucumuzda Toplam** ${onlayn} **Çevrimiçi üye bulunmakta.** \n\n ${emoji1} **Ses kanallarında Toplam** ${sessayı} **Üye bulunmakta.** \n\n ${emoji1} **Tagımızda Toplam ** ${tagdakilerr} **Kişi bulunmakta.** \n\n ${emoji1} **Boost Basan Toplam ** ${bostbasansayi} **Kişi bulunmakta.**`)
 .setFooter(`Komutu Kullanan Yetkili: ${message.author.username}`)
 
     const hata = new Discord.RichEmbed()
    .setColor('000000')
    .setAuthor(`Hata`)
    .setDescription(`**Bu komutu kullanmaya hakkınız yoktur!**`)
 
  msg.channel.send(embed1);
 
  /*client.setInterval(() => {
  let channel = client.channels.get("694870726280347668");
  channel.setTopic(`Toplam üye: _${üyesayısı.toString()}_ / Çevrimiçi üye: ${onlayn}`); //kanal açıklama oto
}, 10000);*/
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}