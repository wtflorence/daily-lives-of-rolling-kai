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
                    weight: 15
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
                    new Location("Secret Tea Room", [], 100),
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
                    new Location("Alpha Lounge", [], 100),
                    new Location("Watchtower", [], 100),
                    new Location("Sleeping Quarters", [], 100),
                    new Location("", [], 10),

                ],
                10
            ),
            new Location("Tavern Third Floor",
                [
                    new Location("Lobby", [], 100),
                    new Location("Bath-tub", [], 100),
                    new Location("", [], 10),

                ],
                1
            ),
            new Location("Secret Lab",
                [
                    new Location("Venari Department", [], 100),
                    new Location("Artist Department", [], 100),
                    new Location("", [], 10),

                ],
                2
            ),
            new Location("The Cavern",
                [
                    new Location("Menacing Tavern", [], 100),
                    new Location("Entrance", [], 100),
                    new Location("GM Cafe", [], 100),
                    new Location("Bulletin Board", [], 100),
                    new Location("", [], 10),
                ],
                5
            ),
            new Location("Scholar Lounge",
                [
                    new Location("SLP Leaderboard", [], 100),
                    new Location("Scholar Application", [], 100),
                    new Location("Bulletin Board", [], 100),
                    new Location("", [], 10),
                ],
                5
            ),
            new Location("The Kitchen",
                [
                    new Location("Devs Lobby", [], 100),
                    new Location("Writers Lobby", [], 100),
                    new Location("Musicians Lobby", [], 100),
                    new Location("Artists Lobby", [], 100),
                    new Location("", [], 10),
                ],
                5
            ),
            new Location("Hunter's Lounge",
                [
                    new Location("Lobby", [], 100),
                    new Location("Battlegrounds", [], 100),
                    new Location("", [], 10),
                ],
                5
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
                    new Location("Job Board", [], 100),
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
                    new Location("Airdrops & Loots Room", [], 100),
                    new Location("RK Memes Room", [], 100),
                    new Location("Web3 & NFTs Lobby", [], 100),
                    new Location("Merc Application Reception", [], 100),
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
                2
            ),
            new Location("Bird School",
                [
                    new Location("", [], 10),
                ],
                2
            ),
            new Location("Beast School",
                [
                    new Location("", [], 10),
                ],
                2
            ),
            new Location("Aquatic School",
                [
                    new Location("", [], 10),
                ],
                2
            ),
            new Location("Bug School",
                [
                    new Location("", [], 10),
                ],
                2
            ),
            new Location("Dawn School",
                [
                    new Location("", [], 10),
                ],
                2
            ),
            new Location("Dusk School",
                [
                    new Location("", [], 10),
                ],
                2
            ),
            new Location("Mech School",
                [
                    new Location("", [], 10),
                ],
                2
            ),
            new Location("Plant School",
                [
                    new Location("", [], 10),
                ],
                2
            ),
            new Location("The Vault",
                [
                    new Location("", [], 10),
                ],
                10
            ),
            new Location("The Archives",
                [
                    new Location("", [], 10),
                ],
                10
            ),
            new Location("Capo's Quarters",
                [
                    new Location("", [], 10),
                ],
                1
            ),
            new Location("HQ",
                [
                    new Location("Artist Lab", [], 100),
                    new Location("Handler's Office", [], 100),
                    new Location("", [], 10),
                ],
                10
            ),
            new Location("Crewmate's Secret Base",
                [
                    new Location("", [], 10),
                ],
                1
            ),
            new Location("The Dojo",
                [
                    new Location("", [], 10),
                ],
                10
            ),
            new Location("The Temple",
                [
                    new Location("", [], 10),
                ],
                10
            ),
            new Location("Metaverse Hub",
                [
                    new Location("Axie Infinity Lobby", [], 100),
                    new Location("Pegaxy Lobby", [], 100),
                    new Location("Crypto Raiders Lobby", [], 100),
                    new Location("Embersword Lobby", [], 100),
                    new Location("Legends of Venari Lobby", [], 100),
                    new Location("On Mars Lobby", [], 100),
                    new Location("MIR4 Lobby", [], 100),
                    new Location("", [], 10),
                ],
                2
            ),
        ],
        10
    ),
    new Location(
        "Astra Explorers",
        [
            new Location("Town Center",
                [
                    new Location("Yummers Zone", [], 100),
                    new Location("PH Plaza", [], 100),
                    new Location("EN Plaza", [], 100),
                    new Location("Leni Street", [], 100),
                    new Location("Memes", [], 100),
                    new Location("Entertainment", [], 100),
                    new Location("Today's Catch", [], 100),
                    new Location("Today's Fails", [], 100),
                    new Location("Anime Chat", [], 100),
                    new Location("Bot Commands", [], 100),
                    new Location("", [], 5),
                ],
                10
            ),
            new Location("Portal",
                [
                    new Location("Landing", [], 100),
                    new Location("Guard House", [], 100),
                    new Location("Citizen Registration", [], 100),
                    new Location("", [], 5),
                ],
                10
            ),
            new Location("Cockpit",
                [
                    new Location("Control Room", [], 100),
                    new Location("Viewing Deck", [], 100),
                    new Location("", [], 5),
                ],
                10
            ),
            new Location("Town",
                [
                    new Location("Hall", [], 100),
                    new Location("", [], 5),
                ],
                10
            ),
            new Location("Planetarium",
                [
                    new Location("", [], 5),
                ],
                10
            ),
        ],
        1
    ),
    new Location(
        "Skida",
        [
            new Location("Atrium",
                [
                    new Location("", [], 5),
                ],
                10
            ),
            new Location("Capitol",
                [
                    new Location("Square", [], 100),
                    new Location("", [], 5),
                ],
                10
            ),
            new Location("Event Center",
                [
                    new Location("", [], 5),
                ],
                10
            ),
            new Location("Axie Esports",
                [
                    new Location("Hall", [], 100),
                    new Location("Lobby", [], 100),
                    new Location("", [], 5),
                ],
                10
            ),
            new Location("Gallery",
                [
                    new Location("Literary Corner", [], 100),
                    new Location("Memes", [], 100),
                    new Location("Altar", [], 100),
                    new Location("", [], 5),
                ],
                10
            ),
            new Location("Recreation Room",
                [
                    new Location("Bot Commands", [], 100),
                    new Location("Talpakan Room", [], 100),
                    new Location("", [], 5),
                ],
                10
            ),
            new Location("Colosseum",
                [
                    new Location("", [], 5),
                ],
                10
            ),
            new Location("Club",
                [
                    new Location("Podium", [], 100),
                    new Location("", [], 5),
                ],
                10
            ),
        ],
        1
    ),
    new Location(
        "Gemini Guild",
        [
            new Location("Bulletin Corner",
                [
                    new Location("Partnership Reception", [], 100),
                    new Location("", [], 5),
                ],
                10
            ),
            new Location("Event Hall",
                [
                    new Location("", [], 5),
                ],
                10
            ),
            new Location("Mess Hall",
                [
                    new Location("General Channel", [], 100),
                    new Location("English Channel", [], 100),
                    new Location("Incognito Channel", [], 100),
                    new Location("Marketplace", [], 100),
                    new Location("Food Channel", [], 100),
                    new Location("Memes Room", [], 100),
                    new Location("Weebs Hangout", [], 100),
                    new Location("Creative Corner", [], 100),
                    new Location("Mental Health Room", [], 100),
                    new Location("", [], 5),
                ],
                10
            ),
            new Location("Recreational Area",
                [
                    new Location("Dank Meme Room", [], 100),
                    new Location("Economy Room", [], 100),
                    new Location("", [], 5),
                ],
                10
            ),
            new Location("Metaverse Hub",
                [
                    new Location("Social Media Room", [], 100),
                    new Location("Alpha Calls Room", [], 100),
                    new Location("Shill Channel", [], 100),
                    new Location("", [], 5),
                ],
                10
            ),
        ],
        1
    )
]

// Return array of Locations
// Draw from this array
// Then run decideLocation() to return name
module.exports = data