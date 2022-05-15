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
                name: "whispered",
                weight: 5
            },
            {
                name: "murmured",
                weight: 10
            },
            {
                name: "mumbled",
                weight: 5
            },
            {
                name: "told",
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
                name: "muttered",
                weight: 5
            },
            {
                name: "inquired",
                weight: 5
            },
            {
                name: "talked",
                weight: 50
            },
            {
                name: "snapped",
                weight: 1
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
                name: "trying to remember",
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
                name: "spat",
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

    decideFound() {
        return this.gachaDrawName(this.found)
    }

    decideSnapBack() {
        return this.gachaDrawName(this.snapBack)
    }
}

module.exports = Action