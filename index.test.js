const { KPOP , JAZZ } = require('discord-radio')

KPOP({
    channelID: 'VOICE_ID',
    guildID: 'SERVER_ID',
    logID: 'LOG_CHANNEL_ID',
    TOKEN: 'YOUR_BOT_TOKEN'
})

JAZZ({
    channelID: 'VOICE_ID',
    guildID: 'SERVER_ID',
    logID: 'LOG_CHANNEL_ID',
    TOKEN: 'YOUR_BOT_TOKEN'
})

// --------- OR --------- //

const RADIO = require('discord-radio')

RADIO.JAZZ({
    channelID: 'VOICE_ID',
    guildID: 'SERVER_ID',
    logID: 'LOG_CHANNEL_ID',
    TOKEN: 'YOUR_BOT_TOKEN'
})

RADIO.POP({
    channelID: 'VOICE_ID',
    guildID: 'SERVER_ID',
    logID: 'LOG_CHANNEL_ID',
    TOKEN: 'YOUR_BOT_TOKEN'
})

/************************************
    
    * Available function are : 👇
    * ILOVE | JAVAN | JAZZ | KPOP | LOFI 
    * ARAB | BASS | DANCE | DISCO | ELECTRONIC 
    * LOFIPANDA | POP | ROCK | FARDA | LOFIANIME 
    
************************************/
