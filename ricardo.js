// This program is created by MajorGamerJay <majorgamerjay@gmail.com> under the MIT License

// Declarations for classes
const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) }});

// Declaring variables:
const infomessage = `helo`;

const dd_info = `dd' info`;
const dd_dark = `dd' dark`;
const dd_help = `dd' help`;

// Declaring embeds:
const help_embed = new Discord.MessageEmbed()
.setTitle('Helo brudda')
.setThumbnail('https://cdn.discordapp.com/attachments/685420020377059383/866783208523169853/unknown3e.png')
.setDescription('*help commands* \n')
.addFields(
    { name: 'dd\' help', value: 'This command!' },
    { name: 'dd\' info', value: 'Basic information about the bot and the server' },
    { name: 'dd\' dark', value: 'Deep Dark Fantasies' },
)
.setColor(0xff0000)
.setTimestamp()
.setFooter('This bot is made by anti-nunur pani gang!')

// Declaring functions
const trigger = (command, author) => console.log(`${command} has been triggered by ${author}`);

function make_embed(member_obj) {
    return new Discord.MessageEmbed()
    .setTitle('Helo brudda, enjoy your stay.')
    .setThumbnail(member_obj.user.displayAvatarURL())
    .setDescription(`Welcome to the server @${member_obj.user.tag}!\n\n`)
    .setFooter(`Account created at ${member_obj.user.createdAt.toLocaleDateString("en-US")} ${member_obj.user.createdAt.toLocaleTimeString("en-US")}`)
    .setColor(0xff0000)
    .setTimestamp();
}

client.on('ready', () => {
    console.log(`Logged the bot in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content.startsWith("dd")) {
        // Info message: dd' info
        if (msg.content === dd_info) {
            msg.reply(infomessage);
            trigger(dd_info, msg.author.tag);
        }

        // Help message:  dd' help
        else if (msg.content === dd_help) {
            msg.channel.send(help_embed);
            trigger(dd_help, msg.author.tag);
        }

        else {
            msg.channel.send("Helo brudda, please say `dd' info`");
            trigger(msg.content, msg.author.tag);
        }
    }
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.systemChannel;
    channel.send(`Welcome to the server ${member}!`);
    channel.send(make_embed(member));
    console.log(`Guild member joined, ${member.user.tag}`);
});

client.login(process.env.BOT_TOKEN);
