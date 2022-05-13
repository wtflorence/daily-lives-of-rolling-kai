const Gachable = require("./Gachable")

class Event extends Gachable {

    constructor() {
        super()
    }


    // solo 

    simpleArriveSolo = (denizens, movement, location) => {
        const denizen = this.gachaDraw(denizens)
        const local = this.gachaDraw(location)
        const loc = local.decideLocation()
        return `${denizen.name} ${movement} ${loc}.`
    }

    simpleWaitSolo = (denizens, movement, location) => {
        const denizen = this.gachaDraw(denizens)
        const local = this.gachaDraw(location)
        const loc = local.decideLocation()
        return `${denizen.name} ${movement} at ${loc}.`
    }

    simpleArriveThoughtChain = (denizens, movement, location, action, topic) => {
        const denizen = this.gachaDraw(denizens)
        const local = this.gachaDraw(location)
        const loc = local.decideLocation()
        return `${denizen.name} ${movement} ${loc}. They ${action.decideThink()} ${topic.decideDuration()} about ${topic.decideTopic()} and ${topic.decideTopicEnder()}`
    }

    simpleThoughTopictWaitWhisperTopicEnderChain = (denizens, movement, location, action, topic, ambient) => {
        const denizen = this.gachaDraw(denizens)
        const local = this.gachaDraw(location)
        const loc = local.decideLocation()
        return `${denizen.name} ${action.decideThink()} about ${topic.decideTopic()} on the way to ${loc}. They ${movement.decideWait()}, ${action.decideSpeak()} briefly, and ${movement.decideContinue()}. ${ambient.decideSound()}.`
    }

    simpleThoughtTopicAmbientContinueMovementThinkingTopicEnderChain = (denizens, movement, location, action, topic, ambient) => {
        const denizen = this.gachaDraw(denizens)
        const local = this.gachaDraw(location)
        const loc = local.decideLocation()
        return `${denizen.name} ${action.decideThink()} about ${topic.decideTopic()}. ${ambient.decideAmbient()} as they ${movement.decideContinue()}, and when they ${movement.decideMovement()} ${loc}, they kept ${action.decideThinking()} about ${topic.decideTopicEnder()}.`
    }

    simpleOtwThoughtAmbientTopicEnderExpressionChain = (denizens, movement, location, action, topic, ambient) => {
        const denizen = this.gachaDraw(denizens)
        const local = this.gachaDraw(location)
        const loc = local.decideLocation()
        // Cherub is on the way to Dead Man's Plaza and The place was dead silent and They suddenly thought over life and its implications. They shuddered at the thought.
        return `${denizen.name} is ${movement.decideOtw()} ${loc} and ${(ambient.decideSound()).toLowerCase()}. They suddenly ${action.decideThink()} about ${topic.decideTopic()} and ${topic.decideTopicEnder()}. They ${action.decideExpression()} at ${topic.decideTopicType()}.`
    }

    timesDenizenBrooding = (denizens, movement, location, feeling, ambient, fight, action, topic) => {
        const denizen = this.gachaDraw(denizens)
        const local = this.gachaDraw(location)
        const loc = local.decideLocation()
                
        // {On days like these} {RB} {felt} {lonely inside}. They {thought} about {life} and {its secrets} but they end up {brooding} about {dinosaurs} instead. {The sun rose magnificently on the horizon} and {RB} {continued} their day.

        return `${topic.decideTimes()} ${denizen.name} ${feeling.decideLinking()} ${feeling.decideFeeling()}. They ${action.decideThink()} about ${topic.decideTopic()} and ${topic.decideTopicEnder()} but they ended up ${action.decideThinking()} about ${topic.decideTopic()} instead. ${ambient.decideAmbient()} and ${denizen.name} ${movement.decideContinue()} with their day.`

    }

    // end solo

    simpleArriveSoloFeelingChain = (denizens, movement, location, feeling) => {
        const denizen = this.gachaDraw(denizens)
        const local = this.gachaDraw(location)
        const loc = local.decideLocation()
        const f = feeling.decideFeeling()
        const l = feeling.decideLinking()
        return `${denizen.name} ${movement} ${loc}. They ${l} ${f}.`
    }

    simpleArriveSoloFeelingAndChain = (denizens, movement, location, feeling) => {
        const denizen = this.gachaDraw(denizens)
        const local = this.gachaDraw(location)
        const loc = local.decideLocation()
        const f = feeling.decideFeeling()
        const l = feeling.decideLinking()
        return `${denizen.name} ${movement} ${loc} and they ${l} ${f}.`
    }

    simpleArriveSoloFeelingAsChain = (denizens, movement, location, feeling) => {
        const denizen = this.gachaDraw(denizens)
        const local = this.gachaDraw(location)
        const loc = local.decideLocation()
        const f = feeling.decideFeeling()
        const l = feeling.decideLinking()
        return `${denizen.name} ${l} ${f} as they ${movement} ${loc}.`
    }

    simpleWaitSoloFeelingChain = (denizens, movement, location, feeling) => {
        const denizen = this.gachaDraw(denizens)
        const local = this.gachaDraw(location)
        const loc = local.decideLocation()
        const f = feeling.decideFeeling()
        const l = feeling.decideLinking()
        return `${denizen.name} ${movement} at ${loc}. They ${l} ${f}.`
    }

    simpleWaitSoloFeelingAsChain = (denizens, movement, location, feeling) => {
        const denizen = this.gachaDraw(denizens)
        const local = this.gachaDraw(location)
        const loc = local.decideLocation()
        const f = feeling.decideFeeling()
        const l = feeling.decideLinking()
        return `${denizen.name} ${movement} at ${loc} as they ${l} ${f}.`
    }

    simpleWaitSoloFeelingAndChain = (denizens, movement, location, feeling) => {
        const denizen = this.gachaDraw(denizens)
        const local = this.gachaDraw(location)
        const loc = local.decideLocation()
        const f = feeling.decideFeeling()
        const l = feeling.decideLinking()
        return `${denizen.name} ${movement} at ${loc} and they ${l} ${f}.`
    }

    simpleAmbientArriveSoloFeelingChain = (denizens, movement, feeling, ambient) => {
        const denizen = this.gachaDraw(denizens)
        const f = feeling.decideFeeling()
        return `${ambient} and ${denizen.name}, who is feeling ${f}, ${movement}.`
    }

    simpleArriveWaitChain(denizens, movement, location) {
        const denizen = this.gachaDraw(denizens)
        const local = this.gachaDraw(location)
        const loc = local.decideLocation()
        const m1 = movement.decideMovement()
        const m2 = movement.decideWait()
        return `${denizen.name} ${m1} ${loc} and ${m2}.`
    }

    simpleWaitArriveChain(denizens, movement, location) {
        const denizen = this.gachaDraw(denizens)
        const local = this.gachaDraw(location)
        const loc = local.decideLocation()
        const m1 = movement.decideMovement()
        const m2 = movement.decideWait()
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

        return `${ambient.decideAmbient()} as ${d1.name} ${fight.decideInitiate()} a ${fight.decideBattle()}. Taking the initiative, ${d1.name} ${fight.decideAttack()}. ${d2.name} ${fight.decideDodge()} then ${fight.decideAttack()} back. ${d1.name} ${fight.decideCaught()} ${fight.decideDamage()}! ${d1.name} ${fight.decideAttack()} ${d2.name} with their ${d1Weapon} and ${d2.name} ${fight.decideFaint()}`
    }

    emergency(denizens, location, fight, action, movement, topic) {

        let d1, d2
        [d1, d2] = this.gachaDrawTwo(denizens)

        const local = this.gachaDraw(location)
        const loc = local.decideLocation()


        // {RB} {smashed to the ground} and {Hicami} {ran towards} them. {RB} {winced} and said they needed to go to {Tavern General} {right away}.
        return `${d1.name} ${fight.decideFaint()} and ${d2.name}, who's passing by, ${movement.decideHurried()} towards them. ${d1.name} ${action.decideExpression()} and said they needed to go to ${loc} ${topic.decideUrgency()}.`
    }

    // end fights



    // duo
    simpleDuoTalkLocation(denizens, topic, location, feeling, action) {
        let d1
        let d2

        [d1, d2] = this.gachaDrawTwo(denizens)
        const local = this.gachaDraw(location)

        return `${d1.name} met ${d2.name} at ${local.decideLocation()}. They ${action.decideSpeak()} about ${topic.decideTopic()} ${topic.decideDuration()}. In the end, ${d2.name} ${action.decideThink()} about ${topic.decideTopicEnder()}.`

    }
    simpleAmbientLocationDuoTalk(denizens, topic, location, feeling, action, movement, ambient) {
        let d1
        let d2

        [d1, d2] = this.gachaDrawTwo(denizens)
        const local = this.gachaDraw(location)

        return `${ambient.decideAmbient()} as ${d1.name} ${movement.decideMovement()} ${local.decideLocation()}. They met ${d2.name} and ${action.decideSpeak()} about ${topic.decideTopic()}, ${topic.decideTopic()}, and ${topic.decideTopicEnder()}. ${d1.name} ${feeling.decideLinking()} ${feeling.decideFeeling()} from this.`

    }

    duoArriveLocationTopicExpression = (denizens, topic, location, feeling, action, movement, ambient) => {
        let d1, d2

        [d1, d2] = this.gachaDrawTwo(denizens)

        const local = this.gachaDraw(location)
        const loc = local.decideLocation()

        return `${d1.name} and ${d2.name} ${movement.decideMovement()} ${loc}. ${ambient.decideAmbient()} and ${(ambient.decideSound()).toLowerCase()}. They ${movement.decideWait()} and ${action.decideSpeak()} about ${topic.decideTopic()}, ${topic.decideTopic()}, and ${topic.decideTopic()} ${topic.decideDuration()}.`
    }
    // end duo


    pickRandomEvent(denizens, movement, location, feeling, ambient, fight, action, topic) {
        const solo = [
            {
                // Cherub arrived to Reptile School
                name: this.simpleArriveSolo(denizens, movement.decideMovement(), location),
                weight: 10
            },
            {   // Ro11ingBoy froze at Dead Man's Plaza
                name: this.simpleWaitSolo(denizens, movement.decideWait(), location),
                weight: 10
            },
            {
                // Hicami have arrived to Mech School. They pondered for about an hour about volcanoes and its consequences
                name: this.simpleArriveThoughtChain(denizens, movement.decideMovement(), location, action, topic),
                weight: 10
            },
            {
                // Ro11ingBoy wondered about art on the way to Dusk School. They stopped, spoke briefly, and proceeded. Noise clamoured somewhere
                name: this.simpleThoughTopictWaitWhisperTopicEnderChain(denizens, movement, location, action, topic, ambient),
                weight: 10
            },
            {
                // cherub thought about life. the sun rose magnificently on the horizon as they pressed on. they have arrived at the tavern and kept thinking about its ways
                name: this.simpleThoughtTopicAmbientContinueMovementThinkingTopicEnderChain(denizens, movement, location, action, topic, ambient),
                weight: 10
            },
            {
                // Cherub is on the way to Dead Man's Plaza and The place was dead silent and They suddenly thought over life and its implications. They shuddered at the thought.
                name: this.simpleOtwThoughtAmbientTopicEnderExpressionChain(denizens, movement, location, action, topic, ambient),
                weight: 10
            },
            {
                // {On days like these} {RB} {felt} {lonely inside}. They {thought} about {life} and {its secrets} but they end up {brooding} about {dinosaurs} instead. {The sun rose magnificently on the horizon} and {RB} {continued} their day.
                name: this.timesDenizenBrooding(denizens, movement, location, feeling, ambient, fight, action, topic),
                weight: 1000
            },
        ]

        const soloDualChain = [
            {
                name: this.simpleArriveWaitChain(denizens, movement, location),
                weight: 2
            },
            {
                name: this.simpleWaitArriveChain(denizens, movement, location),
                weight: 2
            },
            {
                name: this.simpleArriveAmbientChain(denizens, movement.decideMovement(), location, ambient.decideAmbient()),
                weight: 5
            },
            {
                name: this.simpleAmbientArriveChain(denizens, movement.decideMovement(), location, ambient.decideAmbient()),
                weight: 5
            },
            {
                name: this.simpleAmbientArriveAsChain(denizens, movement.decideMovement(), location, ambient.decideAmbient()),
                weight: 5
            },
            {
                name: this.simpleArriveSoloFeelingChain(denizens, movement.decideMovement(), location, feeling),
                weight: 5
            },

            {
                name: this.simpleWaitSoloFeelingChain(denizens, movement.decideWait(), location, feeling),
                weight: 5
            },
            {
                name: this.simpleWaitSoloFeelingAsChain(denizens, movement.decideWait(), location, feeling),
                weight: 5
            },
            {
                name: this.simpleWaitSoloFeelingAndChain(denizens, movement.decideWait(), location, feeling),
                weight: 10
            },
            {
                name: this.simpleArriveSoloFeelingAndChain(denizens, movement.decideMovement(), location, feeling),
                weight: 10
            },
            {
                name: this.simpleArriveSoloFeelingAsChain(denizens, movement.decideMovement(), location, feeling),
                weight: 10
            },
        ]

        const soloTripleChain = [
            {
                name: this.simpleAmbientArriveSoloFeelingChain(denizens, movement.decideWait(), feeling, ambient.decideAmbient()),
                weight: 10
            },
        ]

        const fightScene = [
            {
                name: this.fightOneSidedD1Win(denizens, ambient, location, fight),
                weight: 10
            },
            {
                // {RB} {smashed to the ground} and {Hicami} {ran towards} them. {RB} {winced} and said they needed to go to {Tavern General} {right away}.
                name: this.emergency(denizens, location, fight, action, movement, topic),
                weight: 10
            },
        ]

        const duo = [
            {
                name: this.simpleDuoTalkLocation(denizens, topic, location, feeling, action),
                weight: 10
            },
            {
                name: this.simpleAmbientLocationDuoTalk(denizens, topic, location, feeling, action, movement, ambient),
                weight: 10
            },
            {
                // change rest
                name: this.duoArriveLocationTopicExpression(denizens, topic, location, feeling, action, movement, ambient),
                weight: 10
            },
        ]

        const events = [
            {
                name: solo,
                weight: 3000
            },
            {
                name: soloDualChain,
                weight: 10
            },
            {
                name: soloTripleChain,
                weight: 10
            },
            {
                name: fightScene,
                weight: 10
            },
            {
                name: duo,
                weight: 10
            },
        ]

        const event = this.gachaDrawName(events)
        return this.gachaDrawName(event)
    }
}

module.exports = Event