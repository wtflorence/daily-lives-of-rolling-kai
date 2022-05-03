const gacha = require("simple-gacha");

class Location {

    constructor(name, sub, weight) {
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
            const gachaResult = this.drawGacha(main)

            return gachaResult.name
        }

        return ""
    }

  

    decideLocation = () => {
        // Guild Name 5% Chance
        const main = this.decideToUseName();

        // Pick sub from the Guild
        const sub = this.drawGacha(this.sub)

        let subsub = ""

        if(sub.sub) {
            subsub = this.drawGacha(sub.sub)
        }

        const subCombined = sub.name + " " + subsub.name;

        const location = main ? main + "'s " + subCombined : subCombined

        return location.trim();
    }

    drawGacha = (loot) => {
        const {pick} = gacha.simple(loot)
        return pick
    }

}

function go() {
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
                        new Location("Stage", [], 100),
                        new Location("Kitchen", [], 100),
                        new Location("Comfort Room", [], 100),
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
    const { pick } = gacha.simple(data)
    // console.log(location.pick);
    return pick
}

module.exports.Location = go();