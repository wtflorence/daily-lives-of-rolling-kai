const Gachable = require('./Gachable')
const _ = require('lodash');

class Feeling extends Gachable {

    constructor(personality) {
        super()
        this.personality = personality

        this.linking = [
            {
                name: "felt",
                weight: 10
            },
            {
                name: "began to feel",
                weight: 10
            },
            {
                name: "started to feel",
                weight: 10
            },
        ]

        this.feelingsPositive = [
            {
                name: "cute",
                weight: 1
            },
            {
                name: "comfortable",
                weight: 10
            },
            {
                name: "fine",
                weight: 10
            },
            {
                name: "alright",
                weight: 10
            },
            {
                name: "glorious",
                weight: 10
            },
            {
                name: "secured",
                weight: 10
            },
            {
                name: "safe",
                weight: 10
            },
            {
                name: "at ease",
                weight: 10
            },
            {
                name: "okay",
                weight: 10
            },
            {
                name: "invincible",
                weight: 7
            },
            {
                name: "excited",
                weight: 10
            },
        ]
        this.feelingsNegative = [
            {
                name: "confused",
                weight: 10
            },
            {
                name: "alert",
                weight: 10
            },
            {
                name: "apprehensive",
                weight: 10
            },
            {
                name: "bad",
                weight: 10
            },
            {
                name: "like their stomach is churning",
                weight: 10
            }, 
            {
                name: "restless",
                weight: 7
            },
            {
                name: "aloof",
                weight: 7
            }, 
            {
                name: "already fed up",
                weight: 7
            },
            {
                name: "like they're at their wit's end",
                weight: 7
            },
            {
                name: "burnt out",
                weight: 7
            },
            {
                name: "lonely inside",
                weight: 10
            },
            {
                name: "lonely",
                weight: 10
            },
        ]
        this.feelingsNeutral = [
            {
                name: "tired",
                weight: 10
            },
            {
                name: "sleepy",
                weight: 10
            },
            {
                name: "energized",
                weight: 10
            },
            {
                name: "prepared",
                weight: 10
            },
            {
                name: "weird",
                weight: 10
            },
            {
                name: "vulnerable",
                weight: 7
            },
            {
                name: "nasty",
                weight: 8
            },
        ]
        
        this.feelings = _.union(this.feelingsNegative, this.feelingsNeutral, this.feelingsPositive)

        this.likes = [
            {
                name: "likes",
                weight: 10
            },
            {
                name: "loves",
                weight: 10
            }, 
            {
                name: "admires",
                weight: 10
            },
            {
                name: "respects",
                weight: 10
            },
            {
                name: "enjoys",
                weight: 10
            },
            {
                name: "adores",
                weight: 10
            }, 
        ]

        this.hates = [ 
            {
                name: "hates",
                weight: 10
            },
            {
                name: "despises",
                weight: 10
            }, 
            {
                name: "dislikes",
                weight: 10
            },
            {
                name: "loathes",
                weight: 10
            },
        ]

    }

    decideLinking() {
        return this.gachaDrawName(this.linking)
    }

    decideFeeling() {
        return this.gachaDrawName(this.feelings)
    }
    
    decideFeelingPositive() {
        return this.gachaDrawName(this.feelingsPositive)
    }
    
    decideFeelingNegative() {
        return this.gachaDrawName(this.feelingsNegative)
    }
    
    decideFeelingNeutral() {
        return this.gachaDrawName(this.feelingsNeutral)
    }

    decideLike() {
        return this.gachaDrawName(this.likes)
    }

    decideHate() {
        return this.gachaDrawName(this.hates)
    }

}

module.exports = Feeling
