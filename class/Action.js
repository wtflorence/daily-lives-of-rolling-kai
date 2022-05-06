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
                name: "thought over",
                weight: 10
            },
            {
                name: "considered",
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
}

module.exports = Action