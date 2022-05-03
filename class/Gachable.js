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
}

module.exports = Gachable