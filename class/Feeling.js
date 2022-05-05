const Gachable = require('./Gachable')

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
        this.feelings = [
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
                name: "glorious",
                weight: 10
            },
            {
                name: "bad",
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
                name: "weird",
                weight: 10
            },
            {
                name: "like their stomach is churning",
                weight: 10
            },
            {
                name: "like they're about to throw up",
                weight: 10
            },
            {
                name: "restless",
                weight: 7
            },
            {
                name: "invincible",
                weight: 7
            },
            {
                name: "vulnerable",
                weight: 7
            },
            {
                name: "nasty",
                weight: 8
            },
            {
                name: "aloof",
                weight: 7
            },
            {
                name: "blood is boiling",
                weight: 7
            },
            {
                name: "on cloud nine",
                weight: 6
            },
            {
                name: "already fed up",
                weight: 7
            },
            {
                name: "at wit's end",
                weight: 7
            },
        ]
    }

    decideLinking() {
        return this.gachaDrawName(this.linking)
    }

    decideSimpleFeeling() {
        return this.gachaDrawName(this.feelings)
    }
}

module.exports = Feeling
