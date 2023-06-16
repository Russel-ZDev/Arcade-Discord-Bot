const { SlashCommandBuilder } = require("@discordjs/builders");
const {EmbedBuilder} = require('discord.js')
const Minesweeper = require('discord.js-minesweeper');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("minesweeper")
    .setDescription("Generate a minesweeper")
    
    .addStringOption(option =>
      option
    .setName('columns')
    .setDescription('The columns count of a matrix')
    .setRequired(true))
      
    .addStringOption(option =>
      option
    .setName('rows')
    .setDescription('The rows count of a matrix')
    .setRequired(true))

    .addStringOption(option =>
      option
    .setName('mines')
    .setDescription('The number of mines in a matrix')
    .setRequired(true)),
        
    run: async (client, interaction) => {
      const columns = Number(interaction.options.getString('columns'))
      const rows = Number(interaction.options.getString('rows'))
      const mines = Number(interaction.options.getString('mines'))

const matrixbuild = new Minesweeper({columns, rows, mines})
const matrix = matrixbuild.start();

return matrix


? interaction.reply({content:`\`Created a ${columns}x${rows} MineSweeper with ${mines} mines\` \n\n${matrix}`})
: interaction.reply('There was an error creating this minesweeper game!')

    }
 };
