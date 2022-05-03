const Gachable = require("./Gachable")

class Event extends Gachable {

    constructor(denizens, locations) {
        super()
        this.denizens = denizens
        this.locations = locations
    }

    simpleArriveSolo = () => {
        const name = this.gachaDrawName(this.denizens)
        const location = this.locations

        return name + " has arrived to " + location
    }
}

module.exports = Event