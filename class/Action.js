const Gachable = require("./Gachable")

class Action extends Gachable {
    constructor() {
        super()

        this.speak = [
            {
                name: "spoke",
                weight: 50
            }, 
            {
                name: "began",
                weight: 1
            },
            {
                name: "began a topic",
                weight: 2
            },
            {
                name: "started a topic",
                weight: 2
            },
            {
                name: "inquired",
                weight: 5
            },
        ]


        this.whisper = [
            {
                name: "whispered",
                weight: 10
            },

            {
                name: "muttered",
                weight: 10
            },
            {
                name: "murmured",
                weight: 10
            },
            {
                name: "mumbled",
                weight: 10
            },
        ]

        this.think = [
            {
                name: "thought",
                weight: 10
            },
            {
                name: "mused",
                weight: 10
            },
            {
                name: "wondered",
                weight: 10
            },
            {
                name: "contemplated",
                weight: 10
            },
            {
                name: "speculated",
                weight: 10
            },
            {
                name: "pondered",
                weight: 10
            },
            {
                name: "reflected",
                weight: 10
            },
            {
                name: "meditated",
                weight: 1
            },
            {
                name: "mulled over",
                weight: 10
            },
            {
                name: "tried to remember",
                weight: 10
            },
        ]

        this.thinking = [
            {
                name: "thinking",
                weight: 10
            },
            {
                name: "remembering",
                weight: 10
            },
            {
                name: "musing",
                weight: 10
            },
            {
                name: "wondering",
                weight: 10
            },
            {
                name: "contemplating",
                weight: 10
            },
            {
                name: "speculating",
                weight: 5
            },
            {
                name: "pondering",
                weight: 10
            },
            {
                name: "reflecting",
                weight: 10
            },
            {
                name: "meditatating",
                weight: 1
            },
            {
                name: "mulling over",
                weight: 10
            },
            {
                name: "thinking over",
                weight: 10
            },
        ]

        this.expression = [
            {
                name: "clicked their tongue",
                weight: 10
            },
            {
                name: "winced",
                weight: 10
            },
            {
                name: "shrugged",
                weight: 10
            },
            {
                name: "shuddered",
                weight: 10
            },
            {
                name: "raised their brows",
                weight: 10
            },
            {
                name: "hissed",
                weight: 10
            },
            {
                name: "smiled",
                weight: 10
            },
            {
                name: "smiled pensively",
                weight: 3
            },
            {
                name: "grinned",
                weight: 10
            },
            {
                name: "made weird noises",
                weight: 10
            },
            {
                name: "made a face",
                weight: 10
            },
            {
                name: "smirked",
                weight: 2
            },
        ]

        this.found = [
            {
                name: "found",
                weight: 10
            },
            {
                name: "spotted",
                weight: 10
            },
            {
                name: "discovered",
                weight: 10
            },
            {
                name: "caught",
                weight: 10
            },
            {
                name: "located",
                weight: 10
            },
            {
                name: "encountered",
                weight: 10
            },
        ]


        this.snapBack = [
            {
                name: "came to their senses",
                weight: 10
            },
            {
                name: "snapped back to reality",
                weight: 7
            },
            {
                name: "recovered from the shock",
                weight: 1
            },
            {
                name: "sank back to reality",
                weight: 5
            },
            {
                name: "returned to reality",
                weight: 5
            },
            {
                name: "caught the horror of the situation",
                weight: 1
            },
        ]

        this.bump = [
            {
                name: "bumped",
                weight: 10
            },
            {
                name: "nudged",
                weight: 10
            },
            {
                name: "crashed",
                weight: 10
            },
            {
                name: "jerked",
                weight: 10
            },
            {
                name: "thumped",
                weight: 10
            },
            {
                name: "smacked",
                weight: 10
            },
            {
                name: "slammed",
                weight: 10
            },
            {
                name: "knocked",
                weight: 10
            },
            {
                name: "whacked",
                weight: 10
            },
            {
                name: "smashed",
                weight: 10
            },
        ]

        // tapped on their shoulder/grabbed their attention/crossed their vision
        this.tap = [
            {
                name: "tapped on their shoulder",
                weight: 10
            },
            {
                name: "grabbed their attention",
                weight: 10
            },
            {
                name: "crossed their vision",
                weight: 10
            },
        ]


        this.respond = [
            {
                name: "ignored",
                weight: 7
            },
            {
                name: "waved to",
                weight: 10
            },
            {
                name: "smiled to",
                weight: 5
            },
            {
                name: "grinned to",
                weight: 5
            },
        ]


        this.indecision = [
            {
                name: "indecisive",
                weight: 10
            },
            {
                name: "reluctant",
                weight: 10
            },
            {
                name: "hesitant",
                weight: 10
            },
            {
                name: "unsure",
                weight: 10
            },
            {
                name: "unclear",
                weight: 10
            },
            {
                name: "inconclusive",
                weight: 10
            },
            {
                name: "undecided",
                weight: 10
            },
            {
                name: "wavering",
                weight: 10
            },
        ]

        this.orderType = [
            {
                name: "ordered the entire menu",
                weight: 10
            },
            {
                name: "left the premises",
                weight: 1
            },
            {
                name: "left the place",
                weight: 1
            },
            {
                name: "ordered the best seller",
                weight: 10
            },
            {
                name: "ordered the least popular dish",
                weight: 6
            },
            {
                name: "ordered something random",
                weight: 8
            },
            {
                name: "ordered everything",
                weight: 10
            },
            {
                name: "ordered water",
                weight: 2
            },
            {
                name: "ordered nothing",
                weight: 4
            },
        ]



        this.rage = [
            {
                name: "got enraged",
                weight: 10
            },
            {
                name: "got mad",
                weight: 10
            },
            {
                name: "went apeshit",
                weight: 10
            },
            {
                name: "got angry",
                weight: 10
            },
            {
                name: "got provoked",
                weight: 10
            },
            {
                name: "got riled-up",
                weight: 10
            },
            {
                name: "got irritated",
                weight: 10
            },
            {
                name: "got infuriated",
                weight: 10
            },
            {
                name: "went beastmode",
                weight: 10
            },
        ]
    }

    decideSpeak() {
        return this.gachaDrawName(this.speak)
    }

    decideThink() {
        return this.gachaDrawName(this.think)
    }

    decideThinking() {
        return this.gachaDrawName(this.thinking)
    }

    decideExpression() {
        return this.gachaDrawName(this.expression)
    }

    decideIndecision() {
        return this.gachaDrawName(this.indecision)
    }

    decideOrderType() {
        return this.gachaDrawName(this.orderType)
    }

    decideFound() {
        return this.gachaDrawName(this.found)
    }

    decideSnapBack() {
        return this.gachaDrawName(this.snapBack)
    }

    decideWhisper() {
        return this.gachaDrawName(this.whisper)
    }

    decideTap() {
        return this.gachaDrawName(this.tap)
    }

    decideRespond() {
        return this.gachaDrawName(this.respond)
    }

    decideBump() {
        return this.gachaDrawName(this.bump)
    }

    decideRage() {
        return this.gachaDrawName(this.rage)
    }
}

module.exports = Action