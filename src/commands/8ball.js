const { SlashCommandBuilder } = require("@discordjs/builders");
const {EmbedBuilder} = require('discord.js')
const config = require('../../config.json')

module.exports = {
  data: new SlashCommandBuilder()
    .setName("8ball")
    .setDescription("Generate an answer with one of 8 responses")
    
    .addStringOption(option =>
      option
    .setName('question')
    .setDescription('Your Prompt')
    .setRequired(true)),
        
    run: async (client, interaction) => {
const question = interaction.options.getString('question')

const embed = new EmbedBuilder()
.setTitle(client.user.username) 
.setColor(0x000000)       
.setThumbnail(`https://cdn.discordapp.com/attachments/712226602674552852/1119218232419700747/768px-8_ball_icon.png`)

const response1 = `It is certain`
const response2 = `It is decidedly so.`
const response3 =`Without a doubt.`
const response4 =`Yes definitely.`
const response5 = `You may rely on it.`

const response6 = `As I see it, yes.`
const response7 = `Most likely.`
const response8 = `Outlook good.`
const response9 = `Yes.`
const response10 = `Signs point to yes.`

const response11 = `Reply hazy, try again.`
const response12 = `Ask again later.`
const response13 = `Better not tell you now.`
const response14 = `Cannot predict now.`
const response15 = `Concentrate and ask again.`

const response16 = `Don't count on it.`
const response17 = `My reply is no.`
const response18 = `My sources say no.`
const response19 = `Outlook not so good.`
const response20 = `Very doubtful.`

function generateRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1) + min);
}

const repsonseNumber = generateRandomNumber(1,20)


if(repsonseNumber === 1 ){embed.setDescription(`${question}? \n ${response1}`)}
if(repsonseNumber === 2 ){embed.setDescription(`${question}? \n ${response2}`)}
if(repsonseNumber === 3 ){embed.setDescription(`${question}? \n ${response3}`)}
if(repsonseNumber === 4 ){embed.setDescription(`${question}? \n ${response4}`)}
if(repsonseNumber === 5 ){embed.setDescription(`${question}? \n ${response5}`)}
if(repsonseNumber === 6 ){embed.setDescription(`${question}? \n ${response6}`)}
if(repsonseNumber === 7 ){embed.setDescription(`${question}? \n ${response7}`)}
if(repsonseNumber === 8 ){embed.setDescription(`${question}? \n ${response8}`)}
if(repsonseNumber === 9 ){embed.setDescription(`${question}? \n ${response9}`)}
if(repsonseNumber === 10){embed.setDescription(`${question}? \n ${response10}`)}

if(repsonseNumber === 11){embed.setDescription(`${question}? \n ${response11}`)}
if(repsonseNumber === 12){embed.setDescription(`${question}? \n ${response12}`)}
if(repsonseNumber === 13){embed.setDescription(`${question}? \n ${response13}`)}
if(repsonseNumber === 14){embed.setDescription(`${question}? \n ${response14}`)}
if(repsonseNumber === 15){embed.setDescription(`${question}? \n ${response15}`)}
if(repsonseNumber === 16){embed.setDescription(`${question}? \n ${response16}`)}
if(repsonseNumber === 17){embed.setDescription(`${question}? \n ${response17}`)}
if(repsonseNumber === 18){embed.setDescription(`${question}? \n ${response18}`)}
if(repsonseNumber === 19){embed.setDescription(`${question}? \n ${response19}`)}
if(repsonseNumber === 20){embed.setDescription(`${question}? \n ${response20}`)}

interaction.reply({embeds:[embed]})

    }
 };
