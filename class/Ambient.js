const Gachable = require("./Gachable")

class Ambient extends Gachable {
    constructor() {
        super()

        this.ambient = [
            {
                name: "Ominous clouds gathered in the sky",
                weight: 1
            },
            {
                name: "The cold air stirred",
                weight: 10
            },
            {
                name: "A cold breeze wafted in the night",
                weight: 10
            },
            {
                name: "Dark clouds gathered in the sky",
                weight: 1
            },
            {
                name: "Rain is imminent",
                weight: 1
            },
            {
                name: "The sun rose magnificently in the horizon",
                weight: 10
            },
            {
                name: "The feeling of being watched sprung",
                weight: 1
            },
            {
                name: "Birds chirped",
                weight: 10
            },
            {
                name: "An explosion boomed in the distance",
                weight: 1
            },
            {
                name: "Noise clamoured somewhere",
                weight: 10
            },
            {
                name: "Random chatter can be heard about",
                weight: 2
            },
            {
                name: "The stench of blood filled the air",
                weight: 1
            },
            {
                name: "The bell rang",
                weight: 7
            },
        ]
    }

    decideSimpleAmbient(){
        return this.gachaDrawName(this.ambient)
    }

}

module.exports = Ambient
