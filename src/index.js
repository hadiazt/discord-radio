

module.exports = {
    ARAB: function ({ channelID, guildID, logID, TOKEN, Presence: { status, type, name } }) {
        const { ARAB } = require('./stations/arab.js')
        ARAB({ channelID, guildID, logID, TOKEN, Presence: { status, type, name } })
    },

    BASS: function ({ channelID, guildID, logID, TOKEN, Presence: { status, type, name } }) {
        const { BASS } = require('./stations/bass.js')
        BASS({ channelID, guildID, logID, TOKEN, Presence: { status, type, name } })
    },

    DANCE: function ({ channelID, guildID, logID, TOKEN, Presence: { status, type, name } }) {
        const { DANCE } = require('./stations/dance')
        DANCE({ channelID, guildID, logID, TOKEN, Presence: { status, type, name } })
    },

    DISCO: function ({ channelID, guildID, logID, TOKEN, Presence: { status, type, name } }) {
        const { DISCO } = require('./stations/disco.js')
        DISCO({ channelID, guildID, logID, TOKEN, Presence: { status, type, name } })
    },

    ELECTRONIC: function ({ channelID, guildID, logID, TOKEN, Presence: { status, type, name } }) {
        const { ELECTRONIC } = require('./stations/electronic.js')
        ELECTRONIC({ channelID, guildID, logID, TOKEN, Presence: { status, type, name } })
    },

    FARDA: function ({ channelID, guildID, logID, TOKEN, Presence: { status, type, name } }) {
        const { FARDA } = require('./stations/farda.js')
        FARDA({ channelID, guildID, logID, TOKEN, Presence: { status, type, name } })
    },

    ILOVE: function ({ channelID, guildID, logID, TOKEN, Presence: { status, type, name } }) {
        const { ILOVE } = require('./stations/ilove.js')
        ILOVE({ channelID, guildID, logID, TOKEN, Presence: { status, type, name } })
    },

    JAVAN: function ({ channelID, guildID, logID, TOKEN, Presence: { status, type, name } }) {
        const { JAVAN } = require('./stations/javan.js')
        JAVAN({ channelID, guildID, logID, TOKEN, Presence: { status, type, name } })
    },

    JAZZ: function ({ channelID, guildID, logID, TOKEN, Presence: { status, type, name } }) {
        const { JAZZ } = require('./stations/jazz.js')
        JAZZ({ channelID, guildID, logID, TOKEN, Presence: { status, type, name } })
    },

    KPOP: function ({ channelID, guildID, logID, TOKEN, Presence: { status, type, name } }) {
        const { KPOP } = require('./stations/kpop.js')
        KPOP({ channelID, guildID, logID, TOKEN, Presence: { status, type, name } })
    },

    LOFI: function ({ channelID, guildID, logID, TOKEN, Presence: { status, type, name } }) {
        const { LOFI } = require('./stations/lofi.js')
        LOFI({ channelID, guildID, logID, TOKEN, Presence: { status, type, name } })
    },

    LOFIANIME: function ({ channelID, guildID, logID, TOKEN, Presence: { status, type, name } }) {
        const { LOFIANIME } = require('./stations/lofianime.js')
        LOFIANIME({ channelID, guildID, logID, TOKEN, Presence: { status, type, name } })
    },

    LOFIPANDA: function ({ channelID, guildID, logID, TOKEN, Presence: { status, type, name } }) {
        const { LOFIPANDA } = require('./stations/lofipanda.js')
        LOFIPANDA({ channelID, guildID, logID, TOKEN, Presence: { status, type, name } })
    },

    POP: function ({ channelID, guildID, logID, TOKEN, Presence: { status, type, name } }) {
        const { POP } = require('./stations/pop.js')
        POP({ channelID, guildID, logID, TOKEN, Presence: { status, type, name } })
    },

    ROCK: function ({ channelID, guildID, logID, TOKEN, Presence: { status, type, name } }) {
        const { ROCK } = require('./stations/rock.js')
        ROCK({ channelID, guildID, logID, TOKEN, Presence: { status, type, name } })
    },

}
