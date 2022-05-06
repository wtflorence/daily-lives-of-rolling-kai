const Gachable = require("./Gachable")
const Feeling = require("./Feeling")

class Event extends Gachable {

    constructor() {
        super()
    }

    simpleArriveSolo = (denizens, movement, location) => {
        const denizen = this.gachaDraw(denizens)
        const local = this.gachaDraw(location)
        const loc = local.decideLocation()
        return `${denizen.name} ${movement} ${loc}.`
    }

    simpleArriveSoloFeelingChain = (denizens, movement, location, feeling) => {
        const denizen = this.gachaDraw(denizens)
        const local = this.gachaDraw(location)
        const loc = local.decideLocation()
        const f = feeling.decideSimpleFeeling()
        const l = feeling.decideLinking()
        return `${denizen.name} ${movement} ${loc}. They ${l} ${f}.`
    }

    simpleArriveSoloFeelingAndChain = (denizens, movement, location, feeling) => {
        const denizen = this.gachaDraw(denizens)
        const local = this.gachaDraw(location)
        const loc = local.decideLocation()
        const f = feeling.decideSimpleFeeling()
        const l = feeling.decideLinking()
        return `${denizen.name} ${movement} ${loc} and they ${l} ${f}.`
    }

    simpleArriveSoloFeelingAsChain = (denizens, movement, location, feeling) => {
        const denizen = this.gachaDraw(denizens)
        const local = this.gachaDraw(location)
        const loc = local.decideLocation()
        const f = feeling.decideSimpleFeeling()
        const l = feeling.decideLinking()
        return `${denizen.name} ${l} ${f} as they ${movement} ${loc}.`
    }

    simpleWaitSolo = (denizens, movement, location) => {
        const denizen = this.gachaDraw(denizens)
        const local = this.gachaDraw(location)
        const loc = local.decideLocation()
        return `${denizen.name} ${movement} at ${loc}.`
    }

    simpleWaitSoloFeelingChain = (denizens, movement, location, feeling) => {
        const denizen = this.gachaDraw(denizens)
        const local = this.gachaDraw(location)
        const loc = local.decideLocation()
        const f = feeling.decideSimpleFeeling()
        const l = feeling.decideLinking()
        return `${denizen.name} ${movement} at ${loc}. They ${l} ${f}.`
    }

    simpleWaitSoloFeelingAsChain = (denizens, movement, location, feeling) => {
        const denizen = this.gachaDraw(denizens)
        const local = this.gachaDraw(location)
        const loc = local.decideLocation()
        const f = feeling.decideSimpleFeeling()
        const l = feeling.decideLinking()
        return `${denizen.name} ${movement} at ${loc} as they ${l} ${f}.`
    }

    simpleWaitSoloFeelingAndChain = (denizens, movement, location, feeling) => {
        const denizen = this.gachaDraw(denizens)
        const local = this.gachaDraw(location)
        const loc = local.decideLocation()
        const f = feeling.decideSimpleFeeling()
        const l = feeling.decideLinking()
        return `${denizen.name} ${movement} at ${loc} and they ${l} ${f}.`
    }

    simpleAmbientArriveSoloFeelingChain = (denizens, movement, feeling, ambient) => {
        const denizen = this.gachaDraw(denizens)
        const f = feeling.decideSimpleFeeling()
        return `${ambient} and ${denizen.name}, who is feeling ${f}, ${movement}.`
    }

    simpleArriveWaitChain(denizens, movement, location) {
        const denizen = this.gachaDraw(denizens)
        const local = this.gachaDraw(location)
        const loc = local.decideLocation()
        const m1 = movement.decideSimpleMovement()
        const m2 = movement.decideSimpleWait()
        return `${denizen.name} ${m1} ${loc} and ${m2}.`
    }

    simpleWaitArriveChain(denizens, movement, location) {
        const denizen = this.gachaDraw(denizens)
        const local = this.gachaDraw(location)
        const loc = local.decideLocation()
        const m1 = movement.decideSimpleMovement()
        const m2 = movement.decideSimpleWait()
        return `${denizen.name} ${m2}. Then they ${m1} ${loc}.`
    }

    simpleArriveAmbientChain(denizens, movement, location, ambient) {
        const denizen = this.gachaDraw(denizens)
        const local = this.gachaDraw(location)
        const loc = local.decideLocation()
        return `${denizen.name} ${movement} ${loc}. ${ambient}.`
    }

    simpleAmbientArriveChain(denizens, movement, location, ambient) {
        const denizen = this.gachaDraw(denizens)
        const local = this.gachaDraw(location)
        const loc = local.decideLocation()
        return `${ambient}. ${denizen.name} ${movement} ${loc}.`
    }

    simpleAmbientArriveAsChain(denizens, movement, location, ambient) {
        const denizen = this.gachaDraw(denizens)
        const local = this.gachaDraw(location)
        const loc = local.decideLocation()
        return `${ambient} as ${denizen.name} ${movement} ${loc}.`
    }

    // fights
    fightOneSidedD1Win(denizens, ambient, location, fight) {
        let d1
        let d2
        
        [d1, d2] = this.gachaDrawTwo(denizens)


        const d1Weapon = this.gachaDrawName(this.gachafy(d1.flavour.weapons))
        const d2Weapon = this.gachaDrawName(this.gachafy(d2.flavour.weapons))

        return `${ambient.decideSimpleAmbient()} as ${d1.name} ${fight.decideInitiate()} a ${fight.decideBattle()}. Taking the initiative, ${d2.name} ${fight.decideAttack()}. ${d1.name} ${fight.decideDodge()} then ${fight.decideAttack()} back. ${d2.name} ${fight.decideCaught()} ${fight.decideDamage()}! ${d1.name} ${fight.decideAttack()} ${d2.name} with their ${d1Weapon} and ${d2.name} ${fight.decideFaint()}`
    }

    // end fights

    pickRandomEvent(denizens, movement, location, feeling, ambient, fight) {
        const single = [
            {
                name: this.simpleArriveSolo(denizens, movement.decideSimpleMovement(), location),
                weight: 10
            },
            {
                name: this.simpleWaitSolo(denizens, movement.decideSimpleWait(), location),
                weight: 10
            },
        ]

        const dualChain = [
            {
                name: this.simpleArriveWaitChain(denizens, movement, location),
                weight: 10
            },
            {
                name: this.simpleWaitArriveChain(denizens, movement, location),
                weight: 10
            },
            {
                name: this.simpleArriveAmbientChain(denizens, movement.decideSimpleMovement(), location, ambient.decideSimpleAmbient()),
                weight: 10
            },
            {
                name: this.simpleAmbientArriveChain(denizens, movement.decideSimpleMovement(), location, ambient.decideSimpleAmbient()),
                weight: 10
            },
            {
                name: this.simpleAmbientArriveAsChain(denizens, movement.decideSimpleMovement(), location, ambient.decideSimpleAmbient()),
                weight: 10
            },
            {
                name: this.simpleArriveSoloFeelingChain(denizens, movement.decideSimpleMovement(), location, feeling),
                weight: 10
            },

            {
                name: this.simpleWaitSoloFeelingChain(denizens, movement.decideSimpleWait(), location, feeling),
                weight: 10
            },
            {
                name: this.simpleWaitSoloFeelingAsChain(denizens, movement.decideSimpleWait(), location, feeling),
                weight: 10
            },
            {
                name: this.simpleWaitSoloFeelingAndChain(denizens, movement.decideSimpleWait(), location, feeling),
                weight: 10
            },
            {
                name: this.simpleArriveSoloFeelingAndChain(denizens, movement.decideSimpleMovement(), location, feeling),
                weight: 10
            },
            {
                name: this.simpleArriveSoloFeelingAsChain(denizens, movement.decideSimpleMovement(), location, feeling),
                weight: 10
            },
        ]

        const tripleChain = [
            {
                name: this.simpleAmbientArriveSoloFeelingChain(denizens, movement.decideSimpleWait(), feeling, ambient.decideSimpleAmbient()),
                weight: 10
            },
        ]

        const fightScene = [
            {
                name: this.fightOneSidedD1Win(denizens, ambient, location, fight),
                weight: 10
            },
        ]

        const events = [
            {
                name: single,
                weight: 10
            },
            {
                name: dualChain,
                weight: 10
            },
            {
                name: tripleChain,
                weight: 10
            },
            {
                name: fightScene,
                weight: 1000
            },
        ]

        const event = this.gachaDrawName(events)
        return this.gachaDrawName(event)
    }
}

module.exports = Event