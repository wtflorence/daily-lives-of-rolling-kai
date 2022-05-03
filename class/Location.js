const gacha = require("simple-gacha");
const Gachable = require("./Gachable")

class Location extends Gachable {

    constructor(name, sub, weight) {
        super()
        this.name = name
        this.sub = sub
        this.weight = weight
    }

    decideToUseName = () => {
        if (this.sub.length) {
            const main = [
                {
                    name: this.name,
                    weight: 5
                },
                {
                    name: "",
                    weight: 100
                }
            ]
            const gachaResult = this.gachaDraw(main)

            return gachaResult.name
        }

        return ""
    }



    decideLocation = () => {
        // Guild Name 5% Chance
        const main = this.decideToUseName();

        // Pick sub from the Guild
        const sub = this.gachaDraw(this.sub)

        let subsub = ""

        // Draw sub location from sub
        if (sub.sub) {
            subsub = this.gachaDraw(sub.sub)
        }

        // Combine sub and subsub if got drawn
        const subCombined = sub.name + " " + subsub.name;

        // combine if have main
        const location = main ? main + "'s " + subCombined : subCombined

        return location.trim();
    }

}

const data = [
    new Location(
        "Rolling-kai",
        [
            new Location("Tavern General",
                [
                    new Location("Stage", [], 100),
                    new Location("Kitchen", [], 100),
                    new Location("Comfort Room", [], 100),
                    new Location("", [], 5),
                ],
                20
            ),
            new Location("Tavern Second Floor",
                [
                    new Location("Inn", [], 100),
                    new Location("Smoking Area", [], 100),
                    new Location("Auditorium", [], 100),
                    new Location("", [], 5),

                ],
                10
            ),
            new Location("Cadre Council",
                [
                    new Location("Job board", [], 100),
                    new Location("", [], 5),
                ],
                5
            ),
        ],
        10
    ),
    new Location(
        "Astra Explorers",
        [
            new Location("Plaza",
                [
                    new Location("Yummers Zone", [], 100),
                    new Location("", [], 5),
                ],
                10
            )
        ],
        1
    )
]

gachable = new Gachable()
const location = gachable.gachaDraw(data)

module.exports = location