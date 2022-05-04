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

    gachafy(array){
        const loot = []
        for (const item of array){
            loot.push(
                {
                    name: item.name,
                    weight: 10
                }
            )
        }

        return loot
    }
}

module.exports = Gachable