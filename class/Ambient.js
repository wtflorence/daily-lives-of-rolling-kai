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
                name: "A bell rang from a distant",
                weight: 7
            },
            {
                name: "Metals clanked",
                weight: 7
            },
            {
                name: "The ground vibrated",
                weight: 7
            },
            {
                name: "The earth vibrated",
                weight: 7
            },
            {
                name: "A gust of wind blew",
                weight: 7
            },
            {
                name: "Light vanished",
                weight: 6
            },
            {
                name: "Fire silently crackled",
                weight: 6
            },
            {
                name: "Something popped",
                weight: 6
            },
            {
                name: "A denizen spoke in a hushed tone",
                weight: 6
            },
            {
                name: "Something sparked",
                weight: 6
            },
            {
                name: "A rock fell with a thud",
                weight: 6
            },
            {
                name: "A faint howl echoed",
                weight: 6
            },
            {
                name: "A glimmer of light pulsated",
                weight: 3
            },
            {
                name: "Thunder boomed",
                weight: 3
            },
            {
                name: "Sirens blared",
                weight: 6
            },
            {
                name: "The ground shook",
                weight: 7
            },
            {
                name: "The stars shone birghtly",
                weight: 7
            },
            {
                name: "Footsteps thumped",
                weight: 7
            },
            {
                name: "The night deepen",
                weight: 7
            },
            {
                name: "The rays of the sun ablazed",
                weight: 7
            },
        ]
    }

    decideSimpleAmbient(){
        return this.gachaDrawName(this.ambient)
    }

}

module.exports = Ambient
