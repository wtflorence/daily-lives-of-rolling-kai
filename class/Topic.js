const Gachable = require("./Gachable")

class Topic extends Gachable {
    constructor() {
        super()

        this.topic = [
            {
                name: "how to make more money",
                weight: 10
            },
            {
                name: "nothing",
                weight: 10
            },
            {
                name: "nothing in particular",
                weight: 10
            },
            {
                name: "politics",
                weight: 10
            },
            {
                name: "science",
                weight: 10
            },
            {
                name: "the metaverse",
                weight: 10
            },
            {
                name: "a funny joke",
                weight: 10
            },
            {
                name: "a corny joke",
                weight: 10
            },
            {
                name: "salads",
                weight: 10
            },
            {
                name: "dinner",
                weight: 10
            },
            {
                name: "lunch",
                weight: 10
            },
            {
                name: "breakfast",
                weight: 10
            },
            {
                name: "how fishes sleep",
                weight: 1
            },
            {
                name: "the universe",
                weight: 10
            },
            {
                name: "civil war",
                weight: 1
            },
            {
                name: "$SLP prices",
                weight: 10
            },
            {
                name: "$VIS prices",
                weight: 10
            },
            {
                name: "DeFi",
                weight: 10
            },
            {
                name: "cryptocurrency trading",
                weight: 10
            },
            {
                name: "flipping NFTs",
                weight: 10
            },
            {
                name: "NFTs",
                weight: 10
            },
            {
                name: "crypto",
                weight: 10
            },
            {
                name: "web3",
                weight: 10
            },
            {
                name: "old crushes",
                weight: 1
            },
            {
                name: "the future",
                weight: 10
            },
            {
                name: "the past",
                weight: 10
            },
            {
                name: "the present",
                weight: 10
            },
            {
                name: "fighting",
                weight: 10
            },
            {
                name: "The Satoshi Seven",
                weight: 10
            },
            {
                name: "Satoshi Nakamoto's true identity",
                weight: 10
            },
            {
                name: "catching Venari",
                weight: 10
            },
            {
                name: "painting",
                weight: 10
            },
            {
                name: "drawing",
                weight: 10
            },
            {
                name: "their crush",
                weight: 1
            },
            {
                name: "the weather",
                weight: 10
            },
            {
                name: "the rain",
                weight: 10
            },
            {
                name: "the sky",
                weight: 10
            },
            {
                name: "The RK Manifesto",
                weight: 10
            },
            {
                name: "Rolling-kai",
                weight: 10
            },
            {
                name: "The Capo",
                weight: 10
            },
            {
                name: "The Triumvirate",
                weight: 10
            },
            {
                name: "The Cadres",
                weight: 10
            },
            {
                name: "internet money",
                weight: 10
            },
            {
                name: "Bitcoin",
                weight: 10
            },
            {
                name: "$BTC",
                weight: 10
            },
            {
                name: "$ETH",
                weight: 10
            },
            {
                name: "mental health",
                weight: 10
            },
            {
                name: "coffee",
                weight: 10
            },
            {
                name: "when is the next time it's going to rain",
                weight: 5
            },
            {
                name: "the sunset",
                weight: 10
            },
            {
                name: "the sunrise",
                weight: 10
            },
            {
                name: "building",
                weight: 10
            },
            {
                name: "how The Original Blob was doing",
                weight: 1
            },
            {
                name: "games",
                weight: 10
            },
            {
                name: "play-to-earn",
                weight: 10
            },
            {
                name: "metamask",
                weight: 10
            },
            {
                name: "weird stuff",
                weight: 10
            },
            {
                name: "dreams",
                weight: 10
            },
            {
                name: "their dream last night",
                weight: 10
            },
            {
                name: "nightmares",
                weight: 10
            },
            {
                name: "gardening",
                weight: 10
            },
            {
                name: "rocket science",
                weight: 10
            },
            {
                name: "holidays",
                weight: 10
            },
            {
                name: "aliens",
                weight: 10
            },
            {
                name: "hiking",
                weight: 10
            },
            {
                name: "change",
                weight: 10
            },
            {
                name: "current affairs",
                weight: 10
            },
            {
                name: "fashion",
                weight: 10
            },
            {
                name: "their clothes",
                weight: 10
            },
            {
                name: "the news",
                weight: 10
            },
            {
                name: "sports",
                weight: 10
            },
            {
                name: "the not too distant future",
                weight: 10
            },
            {
                name: "free time",
                weight: 10
            },
            {
                name: "music",
                weight: 10
            },
            {
                name: "movies",
                weight: 10
            },
            {
                name: "food",
                weight: 10
            },
            {
                name: "books",
                weight: 10
            },
            {
                name: "traveling",
                weight: 10
            },
            {
                name: "hobbies",
                weight: 10
            },
            {
                name: "restaurants",
                weight: 10
            },
            {
                name: "privacy",
                weight: 10
            },
            {
                name: "social media",
                weight: 10
            },
            {
                name: "where they grew up",
                weight: 10
            },
            {
                name: "things they were into",
                weight: 10
            },
            {
                name: "friends",
                weight: 10
            },
            {
                name: "family",
                weight: 10
            },
            {
                name: "where they have lived",
                weight: 10
            },
            {
                name: "accomplishments",
                weight: 10
            },
            {
                name: "cooking",
                weight: 10
            },
            {
                name: "talents",
                weight: 10
            },
            {
                name: "skills",
                weight: 10
            },
            {
                name: "their signature move",
                weight: 10
            },
            {
                name: "shopping",
                weight: 10
            },
            {
                name: "their habits",
                weight: 10
            },
            {
                name: "their goals",
                weight: 10
            },
            {
                name: "world domination",
                weight: 1
            },
            {
                name: "anime",
                weight: 10
            },
            {
                name: "mature stuff",
                weight: 10
            },
            {
                name: "charity",
                weight: 10
            },
            {
                name: "fishing",
                weight: 10
            },
            {
                name: "stress",
                weight: 10
            },
            {
                name: "creativity",
                weight: 10
            },
            {
                name: "happiness",
                weight: 10
            },
            {
                name: "their traumas",
                weight: 1
            },
            {
                name: "corruption",
                weight: 10
            },
            {
                name: "monsters",
                weight: 10
            },
            {
                name: "dungeons",
                weight: 10
            },
            {
                name: "the distant future",
                weight: 10
            },
            {
                name: "the space",
                weight: 10
            },
            {
                name: "personal space",
                weight: 10
            },

            {
                name: "their weapons",
                weight: 10
            },
            {
                name: "reality",
                weight: 10
            },
            {
                name: "sleep",
                weight: 10
            },
            {
                name: "culture",
                weight: 10
            },
            {
                name: "art",
                weight: 10
            },
            {
                name: "nature",
                weight: 10
            },
            {
                name: "facts",
                weight: 10
            },
            {
                name: "fame",
                weight: 2
            },
            {
                name: "history",
                weight: 10
            },
            {
                name: "love",
                weight: 10
            },
            {
                name: "life",
                weight: 10
            },
            {
                name: "the sea",
                weight: 10
            },
            {
                name: "The Void",
                weight: 10
            },
            {
                name: "their fears",
                weight: 10
            },
            {
                name: "becoming a better person",
                weight: 10
            },
            {
                name: "becoming a warrior",
                weight: 10
            },
            {
                name: "becoming a better warrior",
                weight: 10
            },
            {
                name: "becoming a better fighter",
                weight: 10
            },
            {
                name: "studying a new language",
                weight: 10
            },
            {
                name: "The Mysterious Drink",
                weight: 1
            },
            {
                name: "Axie Infinity",
                weight: 10
            },
            {
                name: "Pegaxy",
                weight: 10
            },
            {
                name: "Crypto Raiders",
                weight: 10
            },
            {
                name: "getting in shape",
                weight: 10
            },
            {
                name: "their diet",
                weight: 10
            },
            {
                name: "depression",
                weight: 1
            },
            {
                name: "an old joke",
                weight: 10
            },
            {
                name: "safety",
                weight: 10
            },
            {
                name: "morale",
                weight: 10
            },
            {
                name: "an old book",
                weight: 10
            },
            {
                name: "ciphers",
                weight: 1
            },
            {
                name: "top secret stuff",
                weight: 10
            },
            {
                name: "something lewd",
                weight: 1
            },
            {
                name: "something nasty",
                weight: 10
            },
            {
                name: "something diabolical",
                weight: 10
            },
            {
                name: "something evil",
                weight: 10
            },
            {
                name: "a prank",
                weight: 10
            },
            {
                name: "diseases",
                weight: 10
            },
            {
                name: "their diamond hands",
                weight: 1
            },
            {
                name: "their paper hands",
                weight: 1
            },
            {
                name: "their bags",
                weight: 10
            },
            {
                name: "their secrets",
                weight: 10
            },
            {
                name: "secrets",
                weight: 10
            },
            {
                name: "something intimate",
                weight: 10
            },
            {
                name: "something secret",
                weight: 10
            },
            {
                name: "something funny",
                weight: 10
            },
            {
                name: "an uncomfortable topic",
                weight: 1
            },
            {
                name: "something uncomfortable",
                weight: 1
            },
            {
                name: "a taboo",
                weight: 1
            },
            {
                name: "something illegal",
                weight: 1
            },
            {
                name: "something offending",
                weight: 1
            },
            {
                name: "something different",
                weight: 1
            },
            {
                name: "the moon",
                weight: 10
            },
            {
                name: "training",
                weight: 10
            },
            {
                name: "physical fitness",
                weight: 10
            },
            {
                name: "being sexy",
                weight: 10
            },
            {
                name: "magic",
                weight: 10
            },
            {
                name: "witchcraft",
                weight: 10
            },
            {
                name: "sorcery",
                weight: 10
            },
            {
                name: "being dumb",
                weight: 10
            },
            {
                name: "freedom",
                weight: 10
            },
            {
                name: "trees",
                weight: 10
            },
            {
                name: "escaping reality",
                weight: 1
            },
            {
                name: "patience",
                weight: 10
            },
            {
                name: "hidden techniques",
                weight: 10
            },
            {
                name: "forbidden techniques",
                weight: 1
            },
            {
                name: "forbidden knowledge",
                weight: 1
            },
            {
                name: "sacred arts",
                weight: 1
            },
            {
                name: "forbidden arts",
                weight: 1
            },
            {
                name: "advanced fighting techniques",
                weight: 5
            },
            {
                name: "signature moves",
                weight: 10
            },
            {
                name: "surprises",
                weight: 10
            },
            {
                name: "hell",
                weight: 10
            },
            {
                name: "uncommon topics",
                weight: 5
            },
            {
                name: "taboo topics",
                weight: 1
            },
            {
                name: "machines",
                weight: 10
            },
            {
                name: "spellcasting",
                weight: 10
            },
            {
                name: "robots",
                weight: 10
            },
            {
                name: "dinosaurs",
                weight: 10
            },
            {
                name: "ancient creatures",
                weight: 10
            },
            {
                name: "how to kill an immortal",
                weight: 1
            },
            {
                name: "volcanoes",
                weight: 10
            },
            {
                name: "socializing",
                weight: 10
            },
            {
                name: "communities",
                weight: 10
            },
            {
                name: "the society",
                weight: 10
            },
            {
                name: "their frustrations",
                weight: 10
            },
            {
                name: "Menacing Chibis",
                weight: 10
            },
            {
                name: "work",
                weight: 10
            },
            {
                name: "something krazy",
                weight: 3
            },
            {
                name: "something horrible",
                weight: 10
            },
            {
                name: "portals",
                weight: 5
            },
            {
                name: "traitors",
                weight: 1
            },
            {
                name: "their enemies",
                weight: 10
            },
            {
                name: "their problems",
                weight: 10
            },
            {
                name: "their situation",
                weight: 10
            },
            {
                name: "smoking",
                weight: 1
            },
            {
                name: "danger",
                weight: 5
            },
            {
                name: "peril",
                weight: 5
            },
            {
                name: "the doomsday",
                weight: 1
            },
            {
                name: "the end of the world",
                weight: 1
            },
            {
                name: "sleeping",
                weight: 10
            },
            {
                name: "farming",
                weight: 10
            },
            {
                name: "the world",
                weight: 10
            },
            {
                name: "time",
                weight: 10
            },
            {
                name: "unfortunate events",
                weight: 10
            },
            {
                name: "sex",
                weight: 1
            },
            {
                name: "death",
                weight: 10
            },
            {
                name: "the ocean",
                weight: 10
            },
            {
                name: "the mountains",
                weight: 10
            },
            {
                name: "falling in love",
                weight: 2
            },
        ]

        this.topicEnder = [
            // talked about X and Y and "anything in between"
            {
                name: "anything in between",
                weight: 1
            },
            {
                name: "how to manage it",
                weight: 10
            },
            {
                name: "how to be good at it",
                weight: 10
            },
            {
                name: "how to run away from it",
                weight: 10
            },
            {
                name: "how to conquer it",
                weight: 10
            },
            {
                name: "how to avoid it",
                weight: 10
            },
            {
                name: "how to escape it",
                weight: 10
            },
            {
                name: "how to be better at it",
                weight: 10
            },
            {
                name: "how to master it",
                weight: 10
            },
            {
                name: "how to become an expert at it",
                weight: 10
            },
            {
                name: "how to dominate it",
                weight: 10
            },
            {
                name: "stuff related to it",
                weight: 10
            },
            {
                name: "other stuff unimaginable",
                weight: 1
            },
            {
                name: "plus other stuff unimaginable",
                weight: 1
            },
            {
                name: "all the good stuff",
                weight: 10
            },
            {
                name: "its shady parts",
                weight: 10
            },
            {
                name: "its meaning",
                weight: 10
            },
            {
                name: "more to it",
                weight: 10
            },
            {
                name: "more",
                weight: 10
            },
            {
                name: "how crazy it is",
                weight: 10
            },
            {
                name: "the meaning behind it",
                weight: 10
            },
            {
                name: "its worst parts",
                weight: 10
            },
            {
                name: "how bad it is",
                weight: 10
            },
            {
                name: "its deeper meanings",
                weight: 10
            },
            {
                name: "its rules",
                weight: 5
            },
            {
                name: "its protocols",
                weight: 1
            },
            {
                name: "its secrets",
                weight: 10
            },
            {
                name: "its logic",
                weight: 10
            },
            {
                name: "its ways",
                weight: 10
            },
            {
                name: "its shortcuts",
                weight: 1
            },
            {
                name: "its beauty",
                weight: 10
            },
            {
                name: "its wonders",
                weight: 10
            },
            {
                name: "its hidden meaning",
                weight: 10
            },
            {
                name: "everything ugly about it",
                weight: 10
            },
            {
                name: "how urgent it is",
                weight: 10
            },
            {
                name: "how it affects their lives",
                weight: 10
            },
            {
                name: "its advantages",
                weight: 10
            },
            {
                name: "its disadvantages",
                weight: 10
            },
            {
                name: "everything in between",
                weight: 1
            },
            {
                name: "its problems",
                weight: 10
            },
            {
                name: "its impact to the world",
                weight: 1
            },
            {
                name: "its impact to the metaverse",
                weight: 1
            },
            {
                name: "its magnificence",
                weight: 10
            },
            {
                name: "its greatness",
                weight: 10
            },
            {
                name: "its grandeur",
                weight: 10
            },
            {
                name: "its splendor",
                weight: 10
            },
            {
                name: "its glory",
                weight: 10
            },
            {
                name: "its effects",
                weight: 10
            },
            {
                name: "its consequences",
                weight: 10
            },
            {
                name: "its ramifications",
                weight: 10
            },
            {
                name: "its issues",
                weight: 10
            },
            {
                name: "how useless it is",
                weight: 1
            },
        ]

        this.duration = [
            // they talked about TOPIC "for a few moments"
            {
                name: "for a few moments",
                weight: 10
            },
            {
                name: "for a few minutes",
                weight: 10
            },

            {
                name: "for about an hour",
                weight: 10
            },
            {
                name: "for about an hour or two",
                weight: 10
            },
            {
                name: "briefly",
                weight: 10
            },
            {
                name: "hastily",
                weight: 1
            },
            {
                name: "for more than 2 hours",
                weight: 1
            },
            {
                name: "until sunrise",
                weight: 1
            },
        ]

        this.topicType = [
            {
                name: "the topic",
                weight: 10
            },
            {
                name: "the subject",
                weight: 10
            },
            {
                name: "the idea",
                weight: 10
            },
            {
                name: "the thought",
                weight: 10
            },
            {
                name: "its occurence",
                weight: 10
            },
            {
                name: "the matter at hand",
                weight: 3
            },
            {
                name: "the concept",
                weight: 10
            },
            {
                name: "its concept",
                weight: 10
            },
        ]

        
        this.urgency = [
            {
                name: "right away",
                weight: 10
            },
            {
                name: "ASAP",
                weight: 10
            },
            {
                name: "immediately",
                weight: 10
            },
            {
                name: "as soon as possible",
                weight: 10
            },
            {
                name: "as fast as possible",
                weight: 10
            },
            {
                name: "right now",
                weight: 10
            },
            {
                name: "at that very moment",
                weight: 10
            },
            {
                name: "instantly",
                weight: 10
            },
        ]

        this.times = [
            {
                name: "On days like these",
                weight: 10
            },
            {
                name: "In times like these",
                weight: 10
            },
            {
                name: "In these hard times",
                weight: 10
            },
            {
                name: "In these trying times",
                weight: 10
            },
            {
                name: "In these difficult times",
                weight: 10
            },
            {
                name: "With the situation at hand",
                weight: 10
            },
            {
                name: "At the current state of affairs",
                weight: 10
            },
            {
                name: "With the situation right now",
                weight: 10
            }, 
        ]

        
        this.locals = [
            {
                name: "Many people",
                weight: 10
            },
            {
                name: "The locals",
                weight: 10
            },
            {
                name: "Foreigners",
                weight: 10
            },
            {
                name: "Most people",
                weight: 10
            },
            {
                name: "The majority of people",
                weight: 10
            },
            {
                name: "The minority of people",
                weight: 10
            },
            {
                name: "Outsiders",
                weight: 10
            },
            {
                name: "Denizens",
                weight: 10
            }, 
            {
                name: "Most denizens",
                weight: 10
            }, 
        ]
        
        this.believer = [
            {
                name: "firm believer",
                weight: 10
            },
            {
                name: "believer",
                weight: 10
            },
            {
                name: "stoic believer",
                weight: 10
            },
            {
                name: "pracitioner",
                weight: 10
            },
            {
                name: "preacher",
                weight: 10
            },
            {
                name: "teacher",
                weight: 10
            }, 
        ]

                
        this.theCasePositive = [
            {
                name: "and that is indeed true",
                weight: 10
            },
        ]
                
        this.theCaseNegative = [
            {
                name: "but that is not the case",
                weight: 10
            },
            {
                name: "but it was just fake news",
                weight: 10
            },
            {
                name: "but there is no reality to that",
                weight: 10
            },
        ]

        
    }


    decideTopic() {
        return this.gachaDrawName(this.topic)
    }


    decideDuration() {
        return this.gachaDrawName(this.duration)
    }

    decideTopicEnder() {
        return this.gachaDrawName(this.topicEnder)
    }

    decideTopicType() {
        return this.gachaDrawName(this.topicType)
    }
    
    decideUrgency() {
        return this.gachaDrawName(this.urgency)
    }

    decideTimes() {
        return this.gachaDrawName(this.times)
    }

    decideLocals() {
        return this.gachaDrawName(this.locals)
    }

    decideBeliever() {
        return this.gachaDrawName(this.believer)
    }

    decideTheCasePositive() {
        return this.gachaDrawName(this.theCasePositive)
    }

    decideTheCaseNegative() {
        return this.gachaDrawName(this.theCaseNegative)
    }
}

module.exports = Topic
