const { KPOP, JAZZ } = require('discord-radio')

KPOP({
    channelID: 'VOICE_ID',
    guildID: 'SERVER_ID',
    logID: 'LOG_CHANNEL_ID',
    TOKEN: 'YOUR_BOT_TOKEN',
    Presence: {
        status: 'dnd',
        type: 'LISTENING',
        name: 'ROCK STATION',
    }
})

JAZZ({
    channelID: 'VOICE_ID',
    guildID: 'SERVER_ID',
    logID: 'LOG_CHANNEL_ID',
    TOKEN: 'YOUR_BOT_TOKEN',
    Presence: {
        status: 'dnd',
        type: 'LISTENING',
        name: 'ROCK STATION',
    }
})

// --------- OR --------- //

const RADIO = require('discord-radio')

RADIO.JAZZ({
    channelID: 'VOICE_ID',
    guildID: 'SERVER_ID',
    logID: 'LOG_CHANNEL_ID',
    TOKEN: 'YOUR_BOT_TOKEN',
    Presence: {
        status: 'dnd',
        type: 'LISTENING',
        name: 'ROCK STATION',
    }
})

RADIO.POP({
    channelID: 'VOICE_ID',
    guildID: 'SERVER_ID',
    logID: 'LOG_CHANNEL_ID',
    TOKEN: 'YOUR_BOT_TOKEN',
    Presence: {
        status: 'dnd',
        type: 'LISTENING',
        name: 'ROCK STATION',
    }
})

/************************************
    
    * Available function are : 👇
    * ILOVE | JAVAN | JAZZ | KPOP | LOFI 
    * ARAB | BASS | DANCE | DISCO | ELECTRONIC 
    * LOFIPANDA | POP | ROCK | FARDA | LOFIANIME 
    
************************************/
