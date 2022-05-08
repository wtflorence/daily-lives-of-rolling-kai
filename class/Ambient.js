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
                name: "Clouds stirred",
                weight: 10
            },
            {
                name: "Evening shadows deepened into blue and purple",
                weight: 10
            },
            {
                name: "The afternoon was fading",
                weight: 10
            },
            {
                name: "The silver-white moon hung in the sky",
                weight: 6
            },
            {
                name: "A cold breeze wafted in the night",
                weight: 10
            },
            {
                name: "The world slowly drowned in darknesss",
                weight: 10
            },
            {
                name: "Darkness have settled in",
                weight: 10
            },
            {
                name: "The evening sky turned into molten brass",
                weight: 10
            },
            {
                name: "The sun cast a faint yellow light slowly inviting the evening",
                weight: 10
            },
            {
                name: "The late afternoon sun cast a bright, golden glow",
                weight: 10
            },
            {
                name: "Dusk arrived",
                weight: 10
            },
            {
                name: "The sun cast a luminescent glow",
                weight: 10
            },
            {
                name: "The night was dark as ink",
                weight: 10
            },
            {
                name: "Violent wind blew out of proportions",
                weight: 1
            },
            {
                name: "The wind was icy and withering",
                weight: 10
            },
            {
                name: "Dust motes drifted",
                weight: 10
            },
            {
                name: "Cinder dust and gloom was omnipresent",
                weight: 1
            },
            {
                name: "An ominous haze emerged",
                weight: 2
            },
            {
                name: "Shadows paraded overhead",
                weight: 2
            },
            {
                name: "Windless heat had drifted through",
                weight: 10
            },
            {
                name: "A harsh winter wind blew out of the midnight sky",
                weight: 1
            },
            {
                name: "It was a grey wet morning",
                weight: 8
            },
            {
                name: "The sky was low and grey",
                weight: 10
            },
            {
                name: "Rain came down so hard it almost hurt",
                weight: 1
            },
            {
                name: "There was a heat wave",
                weight: 3
            },
            {
                name: "The summer sun remained brilliant white",
                weight: 10
            },
            {
                name: "The sun burned white-hot overhead",
                weight: 4
            },
            {
                name: "Dark clouds gathered in the sky",
                weight: 1
            },
            {
                name: "Rain was imminent",
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
                name: "Bloodlust filled the air",
                weight: 1
            },
            {
                name: "Thunder rolled",
                weight: 3
            },
            {
                name: "Stars shone brightly in the night",
                weight: 7
            }, 
            {
                name: "Rain fell",
                weight: 7
            }, 
        ]

        this.sound = [
            {
                name: "A bell rang in the distance",
                weight: 5
            },
            {
                name: "Noise clamoured somewhere",
                weight: 3
            },
            {
                name: "An explosion boomed in the distance",
                weight: 1
            },
            {
                name: "Random chatter could be heard about",
                weight: 2
            },
            {
                name: "Birds chirped",
                weight: 1
            },
            {
                name: "A scream echoed somewhere",
                weight: 1
            },
            {
                name: "There was nothing but silence",
                weight: 5
            },
            {
                name: "The place was dead silent",
                weight: 7
            },
            {
                name: "It was quiet as night",
                weight: 5
            },
            // {
            //     name: "",
            //     weight: 5
            // },
            // {
            //     name: "",
            //     weight: 5
            // },
            // {
            //     name: "",
            //     weight: 5
            // },
            // {
            //     name: "",
            //     weight: 5
            // },
            // {
            //     name: "",
            //     weight: 5
            // },
        ]
    }

    decideAmbient(){
        return this.gachaDrawName(this.ambient)
    }

    decideSound(){
        return this.gachaDrawName(this.sound)
    }

}

module.exports = Ambient
