const { Client, Intents, MessageEmbed } = require('discord.js');
const { name, homepage } = require('../../package.json')

const voiceDiscord = require(`@discordjs/voice`)
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_VOICE_STATES,
    ]
});

module.exports = {
    JAVAN: function ({ channelID, guildID, logID, TOKEN }) {

        client.login(TOKEN)
        client.on("ready", () => {

            console.log(`Logged in as ${client.user.tag}`);
            client.user.setPresence({
                status: 'dnd',
                activities: [{
                    type: 'LISTENING',
                    name: 'RADIO JAVAN',
                }]
            });

            let SERVER = client.guilds.cache.get(guildID)

            const connection = voiceDiscord.joinVoiceChannel({
                channelId: channelID,
                guildId: guildID,
                adapterCreator: SERVER.voiceAdapterCreator,
                selfDeaf: true,
            });

            const player = voiceDiscord.createAudioPlayer();
            const resource = voiceDiscord.createAudioResource('https://rj1.rjstream.com/');

            player.play(resource);
            connection.subscribe(player);

            player.on(voiceDiscord.AudioPlayerStatus.Idle, () => {
                const EMBED = new MessageEmbed()
                    .setTitle('There is currently no resource for the player to be playing')
                    .setThumbnail(client.user.displayAvatarURL({ format: 'png', size: 2048 }))
                    .setDescription(`Powered By : ${[name]}${(homepage)}`)
                    .setTimestamp()

                connection.destroy();
                client.channels.cache.get(logID).send({ embeds: [EMBED] });
            });
        })
    }
}
