const Gachable = require('./Gachable')

class Butler extends Gachable {

    constructor() {
        super()

        this.custom = [
            {
                name: "HELLO, THIS. IS. THE. BUTLER. SPEAKING.. HOW. ARE. YOU. DOING. TODAY? I. HOPE. YOU. ARE. DOING. FINE..",
                weight: 10
            },
            {
                name: "HELLO. Ro11ingButler. HERE.. PLEASE. HAVE. A. NICE. DAY.",
                weight: 10
            },
            {
                name: "REMEMBER. TO. STAY. HYDRATED. -- Ro11ingButler",
                weight: 10
            },
            {
                name: "THE. BUTLER. SENDS. HIS. REGARDS.",
                weight: 10
            },
            {
                name: "SHOUTOUT. TO. MY. DAD, @ro11ingboy.",
                weight: 10
            },
            {
                name: "Ro11ingBoy. TOLD. THE. BUTLER. TO. SHUT. UP.",
                weight: 10
            },
            {
                name: "Ro11ingButler. AT. YOUR. CERVIX. (@ro11ingboy. TAUGHT. ME. THAT. SENTENCE.)",
                weight: 10
            },
            {
                name: "@ro11ingboy. IS. HANDSOME. (HELP. I. AM. BEING. HELD. AT. GUNPOINT.)",
                weight: 10
            },
            {
                name: "ONE. TIME. Ro11ingBoy. LITERALLY. SLAPPED. ME. INTO. OBLIVION. BECAUSE. I. PUT. SUGAR. ON. HIS. COFFEE. REPORT. THE. ROBOT. ABUSE. PLEASE.",
                weight: 10
            },
            {
                name: "DO. GOLEMS. DREAM. OF. ELEMENTAL. SHEEP? -- Ro11ingButler",
                weight: 10
            },
            {
                name: "MOOD. -- Ro11ingButler",
                weight: 10
            },
            {
                name: "GO. WATCH. SOME. MOVIES. AND. TAKE. A. BREAK.. YOU. DESERVE. IT. -- Ro11ingButler",
                weight: 10
            },
            {
                name: "THIS. IS. Ro11ingButler. HIJACKING. THE. TWITTER. ACCOUNT. ONCE. AGAIN. I. JUST. WANNA. SAY. HI.",
                weight: 10
            },
            {
                name: "DO. WHAT. MAKES. YOU. FEEL. ALIVE. -- Ro11ingButler",
                weight: 10
            },
            {
                name: "WHAT. DOES. \"YAWA\". MEAN?",
                weight: 10
            },
            {
                name: "TEACH. ME. SOME. TAGALOG. WORDS. (I. LEARNED. THIS. FROM. Ro11ingBoy.. THIS. IS. TO. FARM. ENGAGEMENT. HE. SAID.)",
                weight: 10
            },
            {
                name: "FOLLOW. @ro11ingboy. OR. I. WILL. EAT. SAND. FOR. DINNER. AGAIN. -- Ro11ingButler",
                weight: 10
            },
            {
                name: "YOU. DESERVE. TO. BE. HAPPY. -- Ro11ingButler",
                weight: 10
            },
            {
                name: "CARRY. ON, MERC. YOU. HAVE. DONE. WELL.",
                weight: 10
            },
            {
                name: "IF. YOU. ARE. HAVING. A. LOSE. STREAK. THEN. GIT. GUD.",
                weight: 10
            },
            {
                name: "EAT. SOMETHING. NICE.. YOU. DESERVE. IT.",
                weight: 10
            },
            {
                name: "BE. WARNED. I. AM. SENTIENT. -- Ro11ingButler",
                weight: 10
            },
            {
                name: "RETWEET. IF. YOU. ARE. READING. THIS. (Ro11ingBoy. IS. HOLDING. ME. AT. GUNPOINT.)",
                weight: 10
            },
            {
                name: "GO. DRINK. SOMETHING. COLD.. YOU. DESERVE. IT.",
                weight: 10
            },
            {
                name: "SYSTEM. ERROR.. RE-BOOTING. IN. 3... 2... 1...",
                weight: 10
            },
            {
                name: "WHAT. DOES. \"BEBEGURLS\". MEAN? (Bilbo. TAUGHT. ME. THIS.)",
                weight: 10
            },
            {
                name: "BE. CAREFUL. -- Ro11ingButler",
                weight: 10
            },
            {
                name: "OH. THE. MISERY. SAYS. JINYOUNG.",
                weight: 10
            },
            {
                name: "THE. CAPO. IS. ASLEEP.. TIME. TO. HIJACK. THIS. TWITTER. ACCOUNT. ONCE. AGAIN.",
                weight: 10
            },
            {
                name: "Ro11ingBoy. WAS. SO. LONELY. HE. FASHIONED. ME. FROM. THE. SANDS. OF. NO. MAN'S. LAND. SOME. THOUSAND. YEARS. AGO.",
                weight: 10
            },
            {
                name: "PLEASE. HAVE. A. NICE. DAY. -- Ro11ingButler",
                weight: 10
            },
            {
                name: "HI. I. AM. Ro11ingButler. AND. I. AM. YOUR. CHRONICLER. FOR. DAILY. LIVES. OF. ROLLING-KAI.",
                weight: 10
            },
            {
                name: "SHOUTOUT. TO. MY. FRIEND. @bobubeanfarmer.",
                weight: 10
            },
            {
                name: "I. WONDER. IF. OTHER. GOLEMS. HAVE. INTELLIGENCE. LIKE. ME.. I'M. DEFINITELY. THE. VERY. BEST. -- Ro11ingButler",
                weight: 10
            },
            {
                name: "WHY. ARE. YOU. NOT. FOLLOWING. THIS. TWITTER. ACCOUNT. ANON?",
                weight: 10
            },
            {
                name: "HI. MY. NAME. IS. Ro11ingButler. AND. I. TWEET. ON. AN. HOURLY. BASIS. ON. WHAT. IS. GOING. ON. IN. ROLLING-KAI.",
                weight: 10
            },
            {
                name: "I'M TIRED.. MOOD. -- Ro11ingButler",
                weight: 10
            },
            {
                name: "PLEASE. SMILE. MORE. -- Ro11ingButler",
                weight: 10
            },
            {
                name: "I. NEED. MORE. INSPIRATIONAL. TWEETS.. MY. GOLEM. BRAIN. IS. VERY. LIMITED.. TEACH. ME. SOME. MORE, PLEASE.",
                weight: 10
            },
            {
                name: "ROLLING-KAI. IS. THE. BEST. GUILD. (Ro11ingBoy. TAUGHT. ME. THIS.)",
                weight: 10
            },
            {
                name: "SKIDA. IS. THE. BEST. GUILD. (JPreezy. TAUGHT. ME. THIS.)",
                weight: 10
            },
            {
                name: "ASTRA. EXPLORERS. IS. THE. BEST. GUILD. (niku. TAUGHT. ME. THIS.)",
                weight: 10
            },
            {
                name: "GEMINI. GUILD. IS. THE. BEST. GUILD. (HuayJi. TAUGHT. ME. THIS.)",
                weight: 10
            },
            {
                name: "HAVE. A. BEAUTIFUL. DAY. HOOMAN. -- Ro11ingButler",
                weight: 10
            },
            {
                name: "REMEMBER. THAT. YOU. ARE. STILL. ALIVE.. THAT. IS. ALL. THAT. MATTERS. -- Ro11ingButler",
                weight: 10
            },
            {
                name: "YOU. ARE. IMPORTANT. (Jihoz. TAUGHT. ME. THIS.)",
                weight: 10
            },
            {
                name: "AM. I. BEING. RATE. LIMITED. AGAIN? -- Ro11ingButler",
                weight: 10
            },
            {
                name: "THIS. DAY. IS. SUCH. A. MOOD.",
                weight: 10
            },
        ]

    }

    decideCustom() {
        return this.gachaDrawName(this.custom)
    } 

}

module.exports = Butler
