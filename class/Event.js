const Gachable = require("./Gachable")
const Feeling = require("./Feeling")

class Event extends Gachable {

    constructor() {
        super()
    }

    simpleArriveSolo = (denizens, movement, location) => {
        const denizen = this.gachaDraw(denizens)
        return `${denizen.name} ${movement} ${location}.`
    }

    simpleWaitSolo = (denizens, movement, location) => {
        const denizen = this.gachaDraw(denizens)
        return `${denizen.name} ${movement} at ${location}.`
    }

    simpleArriveWaitChain(denizens, movement, location){
        const denizen = this.gachaDraw(denizens)
        const m1 = movement.decideSimpleMovement()
        const m2 = movement.decideSimpleWait()
        return `${denizen.name} ${m1} ${location} and ${m2}.`
    }

    simpleWaitArriveChain(denizens, movement, location){
        const denizen = this.gachaDraw(denizens)
        const m1 = movement.decideSimpleMovement()
        const m2 = movement.decideSimpleWait()
        return `${denizen.name} ${m2}. Then they ${m1} ${location}.`
    }
    
    simpleArriveAmbientChain(denizens, movement, location, ambient){
        const denizen = this.gachaDraw(denizens)
        return `${denizen.name} ${movement} ${location}. ${ambient}.`
    }

    simpleAmbientArriveChain(denizens, movement, location, ambient){
        const denizen = this.gachaDraw(denizens)
        return `${ambient}. ${denizen.name} ${movement} ${location}.`
    }
    
    simpleAmbientArriveAsChain(denizens, movement, location, ambient){
        const denizen = this.gachaDraw(denizens)
        return `${ambient} as ${denizen.name} ${movement} ${location}.`
    }

    pickRandomEvent(denizens, movement, location, feeling, ambient) {
        const events = [
            {
                name: this.simpleArriveSolo(denizens, movement.decideSimpleMovement(), location.decideLocation()),
                weight: 10
            },
            {
                name: this.simpleWaitSolo(denizens, movement.decideSimpleWait(), location.decideLocation()),
                weight: 10
            },
            {
                name: this.simpleArriveWaitChain(denizens, movement, location.decideLocation()),
                weight: 10
            },
            {
                name: this.simpleWaitArriveChain(denizens, movement, location.decideLocation()),
                weight: 10
            },
            {
                name: this.simpleArriveAmbientChain(denizens, movement.decideSimpleMovement(), location.decideLocation(), ambient.decideSimpleAmbient()),
                weight: 10
            },
            {
                name: this.simpleAmbientArriveChain(denizens, movement.decideSimpleMovement(), location.decideLocation(), ambient.decideSimpleAmbient()),
                weight: 10
            },
            {
                name: this.simpleAmbientArriveAsChain(denizens, movement.decideSimpleMovement(), location.decideLocation(), ambient.decideSimpleAmbient()),
                weight: 10
            },
        ]

        return this.gachaDrawName(events)
    }
}

module.exports = Event