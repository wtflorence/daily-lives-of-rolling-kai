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
                    new Location("Bar", [], 100),
                    new Location("Secret Tea Room", [], 100),
                    new Location("Weebs Dungeon", [], 100),
                    new Location("Supply Room", [], 100),
                    new Location("Hidden Room", [], 100),
                    new Location("entrance", [], 100),
                    new Location("alleyway", [], 100),
                    new Location("back room", [], 100),
                    new Location("Bot Invocation Room", [], 100),
                    new Location("Water Closet", [], 100),
                    new Location("", [], 10),
                ],
                10
            ),
            new Location("Tavern Second Floor",
                [
                    new Location("Inn", [], 100),
                    new Location("Smoking Area", [], 100),
                    new Location("Auditorium", [], 100),
                    new Location("Shrine", [], 100),
                    new Location("Sleeping Quarters", [], 100),
                    new Location("", [], 10),

                ],
                10
            ),
            new Location("Cadre Council",
                [
                    new Location("Job board", [], 100),
                    new Location("Round Table", [], 100),
                    new Location("", [], 10),
                ],
                10
            ),
            new Location("The Bulletin Board",
                [
                    new Location("Announcements", [], 100),
                    new Location("Support Questions", [], 100),
                    new Location("Metaverse Updates", [], 100),
                    new Location("Partner News", [], 100),
                    new Location("", [], 10),
                ],
                2
            ),
            new Location("Dead Man's Plaza",
                [
                    new Location("", [], 10),
                ],
                10
            ),
            new Location("No Man's Land",
                [
                    new Location("Pit of Despair", [], 50),
                    new Location("Valley of Dunes", [], 50),
                    new Location("Canyon of Corpses", [], 50),
                    new Location("Plateu of No Return", [], 50),
                    new Location("Howling Crevice", [], 50),
                    new Location("Secret Camp", [], 5),
                    new Location("Hidden Cave", [], 5),
                    new Location("Oasis", [], 5),
                    new Location("", [], 100),
                ],
                10
            ),
            new Location("Guild Hall",
                [
                    new Location("Meme Room", [], 100),
                    new Location("Game Lobby", [], 100),
                    new Location("Creative Corner", [], 100),
                    new Location("", [], 10),
                ],
                10
            ),
            new Location("Business District",
                [
                    new Location("Merchant Hub", [], 100),
                    new Location("NFT Market", [], 100),
                    new Location("", [], 10),
                ],
                10
            ),
            new Location("Reptile School",
                [
                    new Location("", [], 10),
                ],
                10
            ),
            new Location("Bird School",
                [
                    new Location("", [], 10),
                ],
                10
            ),
            new Location("Beast School",
                [
                    new Location("", [], 10),
                ],
                10
            ),
            new Location("Aquatic School",
                [
                    new Location("", [], 10),
                ],
                10
            ),
            new Location("Bug School",
                [
                    new Location("", [], 10),
                ],
                10
            ),
            new Location("Dawn School",
                [
                    new Location("", [], 10),
                ],
                10
            ),
            new Location("Dusk School",
                [
                    new Location("", [], 10),
                ],
                10
            ),
            new Location("Mech School",
                [
                    new Location("", [], 10),
                ],
                10
            ),
            new Location("Plant School",
                [
                    new Location("", [], 10),
                ],
                10
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

// Return array of Locations
// Draw from this array
// Then run decideLocation() to return name
module.exports = data