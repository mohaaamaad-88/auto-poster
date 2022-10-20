const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`http://localhost:${port}`));

const { Collection, Client, Discord, MessageEmbed, WebhookClient, Message } = require('discord.js')

const owner_id = '942404762261930025'
const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_VOICE_STATES",
        "GUILD_MESSAGES",
    ],
});

const file_milf = require('./Milf.json')
//const file_boobs = require('./Data/boobs.json')
const file_img = require('./lust_porn_imgs.json')
//const file_general = require('./Data/general-org.json')




client.once('ready', () => {
    console.log(`${client.user.tag} Is Ready!`)
    client.user.setPresence({ status: "dnd"});
    client.user.setActivity(` Porn `, { type: "PLAYING"})
})


//Milf
client.once('ready', () => {
    const Channel = client.channels.cache.get('1030111277365858324')
    Time = 15 * 10 * 1000; // Set Time For Send Data
    setInterval(function () {
        let Milf = file_milf[Math.floor(Math.random() * file_milf.length)];
        Channel.send({
            content: `**> Milf**\n\n${Milf}`
        })
    }, Time);
})

//General
//client.once('ready', () => {
 //const Channel = client.channels.cache.get(channel_id)
//Time = 15 * 60 * 1000; // Set Time For Send Data
 //setInterval(function () {
// let General = file_general[Math.floor(Math.random() * file_general.length)];
//Channel.send({
 //      content: `**> General**\n\n${General}`
 //    })
  //  }, Time);
//})

//Image
client.once('ready', () => {
    const Channel = client.channels.cache.get('1030104282080497664')
    
    Time = 15 * 15 * 1000; // Set Time For Send Data
    setInterval(function () {
        let Image = file_img[Math.floor(Math.random() * file_img.length)];
        Channel.send({
            embeds: [
                new MessageEmbed()
                .setTitle(`> Image & Gif`)
                .setImage(Image)
                .setColor('RANDOM')
                .setFooter(`bib`)
            ]
        })
    }, Time);
})


//Boobs
//client.once('ready', () => {
    //const Channel = client.channels.cache.get(channel_id)
   // Time = 15 * 60 * 1000; // Set Time For Send Data
   // setInterval(function () {
      //  let Boobs = file_boobs[Math.floor(Math.random() * file_boobs.length)];
      //  Channel.send({
        //    content: `**> Boobs**\n\n${Boobs}`
     //   })
   // }, Time);
//})




client.login('');
