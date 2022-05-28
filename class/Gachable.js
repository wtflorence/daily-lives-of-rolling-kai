const gacha = require("simple-gacha");

class Gachable {
    constructor() {

    }

    gachaDrawName(loot) {
        return this.gachaDraw(loot).name
    }

    gachaDraw(loot) {
        const { pick } = gacha.simple(loot)
        return pick
    }

    gachaDrawTwo(loot) {
        const d1 = gacha.simple(loot).pick
        let d2

        do {
            d2 = gacha.simple(loot).pick
        }
        while (d2.name == d1.name)

        return [d1, d2]
    }

    gachafy(array) {
        const loot = []
        for (const item of array) {
            loot.push(
                {
                    name: item,
                    weight: 10
                }
            )
        }

        return loot
    }

    decideIndefiniteArticle(string) {
        // if vowel start, return "an"
        return /[aeiou]/i.test(string[0]) ? "an" : "a"
    }
}

module.exports = Gachable