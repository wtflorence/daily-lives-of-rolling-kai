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
    
    simpleArriveSoloFeelingChain = (denizens, movement, location, feeling) => {
        const denizen = this.gachaDraw(denizens)
        const f = feeling.decideSimpleFeeling()
        const l = feeling.decideLinking()
        return `${denizen.name} ${movement} ${location}. They ${l} ${f}.`
    }
        
    simpleArriveSoloFeelingAndChain = (denizens, movement, location, feeling) => {
        const denizen = this.gachaDraw(denizens)
        const f = feeling.decideSimpleFeeling()
        const l = feeling.decideLinking()
        return `${denizen.name} ${movement} ${location} and they ${l} ${f}.`
    }

    simpleArriveSoloFeelingAsChain = (denizens, movement, location, feeling) => {
        const denizen = this.gachaDraw(denizens)
        const f = feeling.decideSimpleFeeling()
        const l = feeling.decideLinking()
        return `${denizen.name} ${l} ${f} as they ${movement} ${location}.`
    }

    simpleWaitSolo = (denizens, movement, location) => {
        const denizen = this.gachaDraw(denizens)
        return `${denizen.name} ${movement} at ${location}.`
    }
    
    simpleWaitSoloFeelingChain = (denizens, movement, location, feeling) => {
        const denizen = this.gachaDraw(denizens)
        const f = feeling.decideSimpleFeeling()
        const l = feeling.decideLinking()
        return `${denizen.name} ${movement} at ${location}. They ${l} ${f}.`
    }

    simpleWaitSoloFeelingAsChain = (denizens, movement, location, feeling) => {
        const denizen = this.gachaDraw(denizens)
        const f = feeling.decideSimpleFeeling()
        const l = feeling.decideLinking()
        return `${denizen.name} ${movement} at ${location} as they ${l} ${f}.`
    }
            
    simpleWaitSoloFeelingAndChain = (denizens, movement, location, feeling) => {
        const denizen = this.gachaDraw(denizens)
        const f = feeling.decideSimpleFeeling()
        const l = feeling.decideLinking()
        return `${denizen.name} ${movement} at ${location} and they ${l} ${f}.`
    }

    simpleAmbientArriveSoloFeelingChain = (denizens, movement, feeling, ambient) => {
        const denizen = this.gachaDraw(denizens)
        const f = feeling.decideSimpleFeeling()
        const l = feeling.decideLinking()
        return `${ambient} and ${denizen.name}, who is feeling ${f}, ${movement}.`
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
            {
                name: this.simpleArriveSoloFeelingChain(denizens, movement.decideSimpleMovement(), location.decideLocation(), feeling),
                weight: 10
            },
            {
                name: this.simpleArriveSoloFeelingAndChain(denizens, movement.decideSimpleMovement(), location.decideLocation(), feeling),
                weight: 10
            },
            {
                name: this.simpleArriveSoloFeelingAsChain(denizens, movement.decideSimpleMovement(), location.decideLocation(), feeling),
                weight: 10
            },
            {
                name: this.simpleWaitSoloFeelingChain(denizens, movement.decideSimpleWait(), location.decideLocation(), feeling),
                weight: 10
            },
            {
                name: this.simpleWaitSoloFeelingAsChain(denizens, movement.decideSimpleWait(), location.decideLocation(), feeling),
                weight: 10
            },
            {
                name: this.simpleWaitSoloFeelingAndChain(denizens, movement.decideSimpleWait(), location.decideLocation(), feeling),
                weight: 10
            },
            {
                name: this.simpleAmbientArriveSoloFeelingChain(denizens, movement.decideSimpleWait(), feeling, ambient.decideSimpleAmbient()),
                weight: 1000
            },
        ]

        return this.gachaDrawName(events)
    }
}

module.exports = Event