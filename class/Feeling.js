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
                name: "cute",
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
        ]
    }

    decideLinking() {
        return this.gachaDrawName(this.linking)
    }

    decideSimpleFeeling() {
        const feeling = this.gachaDrawName(this.feelings)
        const linking = this.decideLinking()

        return `They ${linking} ${feeling}.`
    }
}

module.exports = Feeling