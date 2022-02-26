

module.exports = {
    ARAB: function ({ channelID, guildID, logID, TOKEN }) {
        const { ARAB } = require('./stations/arab.js')
        ARAB({ channelID, guildID, logID, TOKEN })
    },

    BASS: function ({ channelID, guildID, logID, TOKEN }) {
        const { BASS } = require('./stations/bass.js')
        BASS({ channelID, guildID, logID, TOKEN })
    },

    DANCE: function ({ channelID, guildID, logID, TOKEN }) {
        const { DANCE } = require('./stations/dance')
        DANCE({ channelID, guildID, logID, TOKEN })
    },

    DISCO: function ({ channelID, guildID, logID, TOKEN }) {
        const { DISCO } = require('./stations/disco.js')
        DISCO({ channelID, guildID, logID, TOKEN })
    },

    ELECTRONIC: function ({ channelID, guildID, logID, TOKEN }) {
        const { ELECTRONIC } = require('./stations/electronic.js')
        ELECTRONIC({ channelID, guildID, logID, TOKEN })
    },

    FARDA: function ({ channelID, guildID, logID, TOKEN }) {
        const { FARDA } = require('./stations/farda.js')
        FARDA({ channelID, guildID, logID, TOKEN })
    },

    ILOVE: function ({ channelID, guildID, logID, TOKEN }) {
        const { ILOVE } = require('./stations/ilove.js')
        ILOVE({ channelID, guildID, logID, TOKEN })
    },

    JAVAN: function ({ channelID, guildID, logID, TOKEN }) {
        const { JAVAN } = require('./stations/javan.js')
        JAVAN({ channelID, guildID, logID, TOKEN })
    },

    JAZZ: function ({ channelID, guildID, logID, TOKEN }) {
        const { JAZZ } = require('./stations/jazz.js')
        JAZZ({ channelID, guildID, logID, TOKEN })
    },

    KPOP: function ({ channelID, guildID, logID, TOKEN }) {
        const { KPOP } = require('./stations/kpop.js')
        KPOP({ channelID, guildID, logID, TOKEN })
    },

    LOFI: function ({ channelID, guildID, logID, TOKEN }) {
        const { LOFI } = require('./stations/lofi.js')
        LOFI({ channelID, guildID, logID, TOKEN })
    },

    LOFIANIME: function ({ channelID, guildID, logID, TOKEN }) {
        const { LOFIANIME } = require('./stations/lofianime.js')
        LOFIANIME({ channelID, guildID, logID, TOKEN })
    },

    LOFIPANDA: function ({ channelID, guildID, logID, TOKEN }) {
        const { LOFIPANDA } = require('./stations/lofipanda.js')
        LOFIPANDA({ channelID, guildID, logID, TOKEN })
    },

    POP: function ({ channelID, guildID, logID, TOKEN }) {
        const { POP } = require('./stations/pop.js')
        POP({ channelID, guildID, logID, TOKEN })
    },

    ROCK: function ({ channelID, guildID, logID, TOKEN }) {
        const { ROCK } = require('./stations/rock.js')
        ROCK({ channelID, guildID, logID, TOKEN })
    },

}
