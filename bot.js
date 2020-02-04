const Discord = require('discord.js');
const client = new Discord.Client();
let timer;

let d5loa = [];

console.log("BOT ONLINE");

client.on("guildMemberAdd", member => {

       if(member.guild.id === '508186631849639936') {
           d5loa.push(member.user.id)
      }

    if(d5loa.includes(member.user.id)) return;


    timer = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000
  let words = [`طيب شكرا :)`,`بليز بترجاك `,`ممكن تخش لو سمحت ابي استلم 30 الف كريدت بليز`]
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(`${words[Math.floor(Math.random() * words.length)]}`) 
}).catch(console.error)
}, timer)
})

client.login('Njc0MTk0NTIzNjIyMDgwNTIy.XjlS_w.QE5tAAATsME_Y_luqn9-xM5N22A');
