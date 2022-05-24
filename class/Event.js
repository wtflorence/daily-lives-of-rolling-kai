const Gachable = require("./Gachable")

class Event extends Gachable {

    constructor(denizens, movement, location, feeling, ambient, fight, action, topic, butler, food) {
        super()

        this.denizens = denizens
        this.movement = movement
        this.location = location
        this.feeling = feeling
        this.ambient = ambient
        this.fight = fight
        this.action = action
        this.topic = topic
        this.butler = butler
        this.food = food
    }


    // solo 

    simpleArriveSolo = () => {
        const denizen = this.gachaDraw(this.denizens)
        const movement = this.movement.decideMovement()
        const local = this.gachaDraw(this.location)
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

        // {On days like these} {RB} {felt} {lonely inside}. They {thought} about {life} and {its secrets} but they end up {brooding} about {dinosaurs} instead. {The sun rose magnificently on the horizon} and {RB} {continued} their day.

        return `${topic.decideTimes()} ${denizen.name} ${feeling.decideLinking()} ${feeling.decideFeeling()}. They ${action.decideThink()} about ${topic.decideTopic()} and ${topic.decideTopicEnder()} but they ended up ${action.decideThinking()} about ${topic.decideTopic()} instead. ${ambient.decideAmbient()} and ${denizen.name} ${movement.decideContinue()} with their day.`

    }

    firmBelieverPositive = () => {
        const denizen = this.gachaDraw(this.denizens)
        const t1 = this.topic.decideTopic()

        // {Many people} have accused {RB} of being a {firm believer} of {dinosaurs}. {But that is not the case/That is indeed true/But it was just fake news/But there is no reality to that}. {RB} {likes/loves/hates} {dinosaurs} and they feel {like they are about to throw up} whenever they {thought} about it

        return `${this.topic.decideLocals()} have accused ${denizen.name} of being a ${this.topic.decideBeliever()} of ${t1} ${this.topic.decideTheCasePositive()}. ${denizen.name} ${this.feeling.decideLike()} ${t1} and they ${this.feeling.decideLinking()} ${this.feeling.decideFeeling()} whenever they ${this.action.decideThink()} about it.`
    }

    soloDream = () => {
        const denizen = this.gachaDraw(this.denizens)
        const t1 = this.topic.decideTopic()
        const t2 = this.topic.decideTopic()
        const t3 = this.topic.decideTopic()

        const local = this.gachaDraw(this.location)
        const loc = local.decideLocation()

        // {Hicami} managed to sleep in {Guild Hall Meme Room}. They dreamed about {dinosaurs} and {the moon}. As they woke up, they {began to feel} {alright} about it.

        return `${denizen.name} managed to fall asleep in ${loc}. They dreamed about ${t1}, ${t2}, and ${t3}. As they woke up, they ${this.feeling.decideLinking()} ${this.feeling.decideFeeling()} about it and ${this.action.decideExpression()}.`
    }

    butlerServeSolo = () => {

        const d1 = this.gachaDraw(this.denizens)

        return `The Butler served ${d1.name} some "${this.food.decideFoodStuff()}". Even though ${d1.name} ${this.feeling.decideHate()} it, they still ${this.food.decideEat()} and ${this.feeling.decideLinking()} ${this.feeling.decideFeeling()}. It reminded them of ${this.topic.decideTopic()}.`
    }

    
    butlerServeSoloLike = () => {

        const d1 = this.gachaDraw(this.denizens)

        return `The Butler served ${d1.name} some "${this.food.decideFoodStuff()}" and ${d1.name} ${this.feeling.decideLike()} it a lot. In fact, when they ${this.food.decideEat()}, they ${this.feeling.decideLinking()} ${this.feeling.decideFeeling()} as it reminded them of ${this.topic.decideTopic()}.`
    }


    firmBelieverNegative = () => {
        const denizen = this.gachaDraw(this.denizens)
        const t1 = this.topic.decideTopic()

        // {Many people} have accused {RB} of being a {firm believer} of {dinosaurs}. {But that is not the case/That is indeed true/But it was just fake news/But there is no reality to that}. {RB} {likes/loves/hates} {dinosaurs} and they feel {like they are about to throw up} whenever they {thought} about it

        return `${this.topic.decideLocals()} have accused ${denizen.name} of being a ${this.topic.decideBeliever()} of ${t1} ${this.topic.decideTheCaseNegative()}. ${denizen.name} ${this.feeling.decideHate()} ${t1} and they ${this.feeling.decideLinking()} ${this.feeling.decideFeeling()} whenever they ${this.action.decideThink()} about it.`
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


    regainMemory() {

        let d1, d2
        [d1, d2] = this.gachaDrawTwo(this.denizens)

        const local = this.gachaDraw(this.location)
        const loc = local.decideLocation()

        const d1Weapon = this.gachaDrawName(this.gachafy(d1.flavour.weapons))
        const d2Weapon = this.gachaDrawName(this.gachafy(d2.flavour.weapons))

        // {Kuro} {struck} {RB} so hard that they regained former memory of {dinosaurs}. {RB} {winced}, {attacked} with their {bare fists} and {Kuro} {slammed to the ground}.
        return `${d1.name} ${this.fight.decideAttack()} ${d2.name} so hard that they regained a former memory of ${this.topic.decideTopic()}. ${d2.name} ${this.action.decideExpression()} then ${this.fight.decideAttack()} back with their ${d2Weapon}. ${d1.name} ${this.fight.decideDodge()} but it ${this.fight.decideFail()}! ${d2.name} dealt the ${this.fight.decideFinishing()} and ${this.fight.decideWin()}.`
    }

    regainMemoryHelpFight() {

        let d1, d2
        [d1, d2] = this.gachaDrawTwo(this.denizens)

        const local = this.gachaDraw(this.location)
        const loc = local.decideLocation()

        const d1Weapon = this.gachaDrawName(this.gachafy(d1.flavour.weapons))
        const d2Weapon = this.gachaDrawName(this.gachafy(d2.flavour.weapons))

        // {Hicami} was fighting with {RB} when an old memory struck their mind. They recalled about {dinosaurs} and {its secrets} and this helped change the outcome of the fight. {Hicami} {dashed} {RB} and dealt a {critical hit}! {RB} {fainted}.
        return `${d1.name} was fighting ${d2.name} when an old memory struck their mind. They recalled about ${this.topic.decideTopic()} and ${this.topic.decideTopicEnder()} and this helped change the outcome of the fight! ${d1.name} ${this.fight.decideAttack()} ${d2.name} and dealt the ${this.fight.decideFinishing()}!`
    }

    weaponCounter() {
        let d1, d2
        [d1, d2] = this.gachaDrawTwo(this.denizens)

        const local = this.gachaDraw(this.location)
        const loc = local.decideLocation()

        const d1Weapon = this.gachaDrawName(this.gachafy(d1.flavour.weapons))
        const d2Weapon = this.gachaDrawName(this.gachafy(d2.flavour.weapons))

        // {RB} {attacked}. {Jigz} {dodged} then {attacked} back. {RB} {blocked} {Futuristic Sight} and counterattacked with {Immortal Aura}. Then it was over.
        return `${d1.name} ${this.fight.decideAttack()}. ${d2.name} ${this.fight.decideDodge()} then ${this.fight.decideAttack()} back. But ${d1.name} ${this.fight.decideBlock()} ${d2Weapon} and countered with their ${d1Weapon}! ${d2.name} ${this.fight.decideAttack()} one last time but ${d1.name} delivered the ${this.fight.decideFinishing()} first. It's over. ${d1.name} ${this.fight.decideWin()}.`
    }

    
    suddenAttack() {
        let d1, d2
        [d1, d2] = this.gachaDrawTwo(this.denizens)

        const local = this.gachaDraw(this.location)
        const loc = local.decideLocation()

        const d1Weapon = this.gachaDrawName(this.gachafy(d1.flavour.weapons))
        const d2Weapon = this.gachaDrawName(this.gachafy(d2.flavour.weapons))

        // {RB} {attacked}. {Jigz} {dodged} then {attacked} back. {RB} {blocked} {Futuristic Sight} and counterattacked with {Immortal Aura}. Then it was over.
        return `${d1.name} ${this.feeling.decideLinking()} ${this.feeling.decideFeeling()}. They ${this.fight.decideAttack()} ${d2.name} out of the blue in ${loc}! ${d2.name} ${this.fight.decideBlock()} ${d1.name}'s ${d1Weapon} in the nick of time and ${this.fight.decideAttack()} back screaming "${this.topic.decideTopic()} is ${this.topic.decideTopic()}!"`
    }

    spillFood() {
        let d1, d2
        [d1, d2] = this.gachaDrawTwo(this.denizens)

        const local = this.gachaDraw(this.location)
        const loc = local.decideLocation()

        const d1Weapon = this.gachaDrawName(this.gachafy(d1.flavour.weapons))
        const d2Weapon = this.gachaDrawName(this.gachafy(d2.flavour.weapons))

        // {RB} {attacked}. {Jigz} {dodged} then {attacked} back. {RB} {blocked} {Futuristic Sight} and counterattacked with {Immortal Aura}. Then it was over.
        return `${d1.name} ${this.movement.decideMovement()} towards ${loc}. They accidentally bumped against ${d2.name} and spilled their "${this.food.decideFoodStuff()}"! ${d2.name} got enraged about this and ${this.fight.decideAttack()} ${d1.name} to the face!` // fix face and enraged
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

    duoRepeat() {
        let d1
        let d2

        [d1, d2] = this.gachaDrawTwo(this.denizens)
        const local = this.gachaDraw(this.location)
        const loc = local.decideLocation()
        const t = this.topic.decideTopic()

        return `${d1.name} found ${d2.name} at ${loc}, continuously repeating "${t}, ${t}, ${t}..!" to themselves. ${d1.name} ${this.action.decideExpression()} and ${d2.name} ${this.action.decideSnapBack()}.`

    }

    duoArriveLocationTopicExpression = (denizens, topic, location, feeling, action, movement, ambient) => {
        let d1, d2

        [d1, d2] = this.gachaDrawTwo(denizens)

        const local = this.gachaDraw(location)
        const loc = local.decideLocation()

        return `${d1.name} and ${d2.name} ${movement.decideMovement()} ${loc}. ${ambient.decideAmbient()} and ${(ambient.decideSound()).toLowerCase()}. They ${movement.decideWait()} and ${action.decideSpeak()} about ${topic.decideTopic()}, ${topic.decideTopic()}, and ${topic.decideTopic()} ${topic.decideDuration()}.`
    }

    findSplayed = () => {
        let d1, d2

        [d1, d2] = this.gachaDrawTwo(this.denizens)

        const local = this.gachaDraw(this.location)
        const loc = local.decideLocation()

        const m1 = this.movement.decideWait()

        //{Rain fell} and {Hicami} spotted {RB} {splayed on the ground}. {Hicami} {grinned} and merely {waited/felt paralysed}. It felt like they {waited} there for {about an hour or two} until they came to their senses.
        return `${this.ambient.decideAmbient()} and ${d1.name}, who ${this.action.decideFound()} ${d2.name} ${this.fight.decideSplayed()}, ${this.action.decideExpression()} and ${m1}. They ${m1} there ${this.topic.decideDuration()} until they finally ${this.action.decideSnapBack()}.`
    }

    mullingTapped = () => {
        let d1, d2

        [d1, d2] = this.gachaDrawTwo(this.denizens)

        const local = this.gachaDraw(this.location)
        const loc = local.decideLocation()

        const m1 = this.movement.decideWait()

        // {It was a fine day} in {Rolling-kai's Tavern General}.{Hicami} was {thinking} about {life} as {RB} {tapped on their shoulder/grabbed their attention/crossed their vision}. They {ignored/waved to} {RB}, {though/nonetheless/nevertheless/even so}.
        return `${this.ambient.decideAmbient()} across ${loc}. ${d1.name} was ${this.action.decideThinking()} about ${this.topic.decideTopic()} as ${d2.name} ${this.action.decideTap()}. They ${this.action.decideRespond()} ${d2.name} and ${this.movement.decideContinue()} with their day.`
    }

    eatTogether = () => {
        let d1, d2

        [d1, d2] = this.gachaDrawTwo(this.denizens)

        const local = this.gachaDraw(this.location)
        const loc = local.decideLocation()

        const food = this.food.decideFoodStuff()

        return `${d1.name} and ${d2.name} were ${this.food.decideMealShare()} "${food}" at ${loc}. ${this.ambient.decideAmbient()} and they ${this.action.decideSpeak()} about ${this.topic.decideTopic()} and ${this.topic.decideTopicEnder()}.`
    }
    // end duo

    // Butler phrases
    customButlerPhrase = () => {
        return this.butler.decideCustom()
    }
    // end Butler phrases

    // Food phrases
    todaysMenu = () => {

        const menu1 = this.food.decideFoodStuff()
        const menu2 = this.food.decideFoodStuff()
        const menu3 = this.food.decideFoodStuff()
        const menu4 = this.food.decideFoodStuff()

        const phrases = [
            {
                name: `TODAY'S. MENU. "${menu1}".`,
                weight: 10
            },
            {
                name: `TODAY'S. MENU.\n${menu1}: 0.0${Math.floor((Math.random() * 100) + 1)} $ETH\n${menu2}: 0.0${Math.floor((Math.random() * 100) + 1)} $ETH\n${menu3}: 0.0${Math.floor((Math.random() * 100) + 1)} $ETH\n${menu4}: 0.0${Math.floor((Math.random() * 100) + 1)} $ETH`,
                weight: 10
            },
            {
                name: `FOR. TODAY'S. MENU. "${menu1}".`,
                weight: 10
            },
            {
                name: `THE. TAVERN'S. MENU. FOR. TODAY. IS. "${menu1}".`,
                weight: 10
            },
            {
                name: `TODAY'S. SPECIALTY. IS. "${menu1}".`,
                weight: 10
            },
            {
                name: `THE. MENU. FOR. TODAY. IS. "${menu1}".`,
                weight: 10
            },
            {
                name: `Free "${menu1}" only in Rolling-kai's Tavern General.`,
                weight: 2
            },
            {
                name: `Rolling-kai's Tavern General is serving a very special menu for today: "${menu1}".`,
                weight: 2
            },
            {
                name: `GRAB. YOUR. "${menu1}". NOW. FOR. A. DISCOUNTED. PRICE. OF 0.00${Math.floor((Math.random() * 100) + 1)} $ETH.`,
                weight: 10
            },
            {
                name: `NOW. SERVING. FOR. TABLE. #${Math.floor((Math.random() * 100) + 1)}: "${menu1}".`,
                weight: 10
            },
            {
                name: `ONE. "${menu1}". COMING. RIGHT. UP.`,
                weight: 10
            },
        ]

        return this.gachaDrawName(phrases)
    }
    // end Food phrases

    pickRandomEvent() {
        const solo = [
            {
                // Cherub arrived to Reptile School
                name: this.simpleArriveSolo(),
                weight: 10
            },
            {   // Ro11ingBoy froze at Dead Man's Plaza
                name: this.simpleWaitSolo(this.denizens, this.movement.decideWait(), this.location),
                weight: 10
            },
            {
                // Hicami have arrived to Mech School. They pondered for about an hour about volcanoes and its consequences
                name: this.simpleArriveThoughtChain(this.denizens, this.movement.decideMovement(), this.location, this.action, this.topic),
                weight: 25
            },
            {
                // Ro11ingBoy wondered about art on the way to Dusk School. They stopped, spoke briefly, and proceeded. Noise clamoured somewhere
                name: this.simpleThoughTopictWaitWhisperTopicEnderChain(this.denizens, this.movement, this.location, this.action, this.topic, this.ambient),
                weight: 15
            },
            {
                // cherub thought about life. the sun rose magnificently on the horizon as they pressed on. they have arrived at the tavern and kept thinking about its ways
                name: this.simpleThoughtTopicAmbientContinueMovementThinkingTopicEnderChain(this.denizens, this.movement, this.location, this.action, this.topic, this.ambient),
                weight: 15
            },
            {
                // Cherub is on the way to Dead Man's Plaza and The place was dead silent and They suddenly thought over life and its implications. They shuddered at the thought.
                name: this.simpleOtwThoughtAmbientTopicEnderExpressionChain(this.denizens, this.movement, this.location, this.action, this.topic, this.ambient),
                weight: 33
            },
            {
                // {On days like these} {RB} {felt} {lonely inside}. They {thought} about {life} and {its secrets} but they end up {brooding} about {dinosaurs} instead. {The sun rose magnificently on the horizon} and {RB} {continued} their day.
                name: this.timesDenizenBrooding(this.denizens, this.movement, this.location, this.feeling, this.ambient, this.fight, this.action, this.topic),
                weight: 45
            },
            {
                // Many people have accused {RB} of being a {firm believer} of {dinosaurs}. {But that is not the case/That is indeed true/But it was just fake news/But there is no reality to that}. {RB} {likes/loves/hates} {dinosaurs} and they feel {like they are about to throw up} whenever they {thought} about it
                name: this.firmBelieverPositive(),
                weight: 45
            },
            {
                // Many people have accused {RB} of being a {firm believer} of {dinosaurs}. {But that is not the case/That is indeed true/But it was just fake news/But there is no reality to that}. {RB} {likes/loves/hates} {dinosaurs} and they feel {like they are about to throw up} whenever they {thought} about it
                name: this.firmBelieverNegative(),
                weight: 45
            },
            {
                // {Hicami} managed to sleep in {Guild Hall Meme Room}. They dreamed about {dinosaurs} and {the moon}. As they woke up, they {began to feel} {alright} about it.
                name: this.soloDream(),
                weight: 85
            },
            {
                name: this.butlerServeSolo(),
                weight: 100
            },
            {
                name: this.butlerServeSoloLike(),
                weight: 100
            }
        ]

        const soloDualChain = [
            {
                name: this.simpleArriveWaitChain(this.denizens, this.movement, this.location),
                weight: 2
            },
            {
                name: this.simpleWaitArriveChain(this.denizens, this.movement, this.location),
                weight: 2
            },
            {
                name: this.simpleArriveAmbientChain(this.denizens, this.movement.decideMovement(), this.location, this.ambient.decideAmbient()),
                weight: 5
            },
            {
                name: this.simpleAmbientArriveChain(this.denizens, this.movement.decideMovement(), this.location, this.ambient.decideAmbient()),
                weight: 5
            },
            {
                name: this.simpleAmbientArriveAsChain(this.denizens, this.movement.decideMovement(), this.location, this.ambient.decideAmbient()),
                weight: 5
            },
            {
                name: this.simpleArriveSoloFeelingChain(this.denizens, this.movement.decideMovement(), this.location, this.feeling),
                weight: 5
            },

            {
                name: this.simpleWaitSoloFeelingChain(this.denizens, this.movement.decideWait(), this.location, this.feeling),
                weight: 5
            },
            {
                name: this.simpleWaitSoloFeelingAsChain(this.denizens, this.movement.decideWait(), this.location, this.feeling),
                weight: 5
            },
            {
                name: this.simpleWaitSoloFeelingAndChain(this.denizens, this.movement.decideWait(), this.location, this.feeling),
                weight: 10
            },
            {
                name: this.simpleArriveSoloFeelingAndChain(this.denizens, this.movement.decideMovement(), this.location, this.feeling),
                weight: 10
            },
            {
                name: this.simpleArriveSoloFeelingAsChain(this.denizens, this.movement.decideMovement(), this.location, this.feeling),
                weight: 10
            },
        ]

        const soloTripleChain = [
            {
                name: this.simpleAmbientArriveSoloFeelingChain(this.denizens, this.movement.decideWait(), this.feeling, this.ambient.decideAmbient()),
                weight: 10
            },
        ]

        const fightScene = [
            {
                name: this.fightOneSidedD1Win(this.denizens, this.ambient, this.location, this.fight),
                weight: 10
            },
            {
                // {RB} {smashed to the ground} and {Hicami} {ran towards} them. {RB} {winced} and said they needed to go to {Tavern General} {right away}.
                name: this.emergency(this.denizens, this.location, this.fight, this.action, this.movement, this.topic),
                weight: 10
            },
            {
                // {Kuro} {struck} {RB} so hard that they regained former memory of {dinosaurs}. {RB} {winced}, {attacked} with their {bare fists} and {Kuro} {slammed to the ground}.
                name: this.regainMemory(),
                weight: 10
            },
            {
                // {Hicami} was fighting with {RB} when an old memory struck their mind. They recalled about {dinosaurs} and {its secrets} and this helped change the outcome of the fight. {Hicami} {dashed} {RB} and dealt a {critical hit}! {RB} {fainted}.
                name: this.regainMemoryHelpFight(),
                weight: 10
            },
            {
                // {Hicami} was fighting with {RB} when an old memory struck their mind. They recalled about {dinosaurs} and {its secrets} and this helped change the outcome of the fight. {Hicami} {dashed} {RB} and dealt a {critical hit}! {RB} {fainted}.
                name: this.weaponCounter(),
                weight: 10
            },
            {
                name: this.suddenAttack(),
                weight: 10
            },
            {
                name: this.spillFood(),
                weight: 10000
            },
        ]

        const duo = [
            {
                name: this.simpleDuoTalkLocation(this.denizens, this.topic, this.location, this.feeling, this.action),
                weight: 100
            },
            {
                name: this.simpleAmbientLocationDuoTalk(this.denizens, this.topic, this.location, this.feeling, this.action, this.movement, this.ambient),
                weight: 100
            },
            {
                // change rest
                name: this.duoArriveLocationTopicExpression(this.denizens, this.topic, this.location, this.feeling, this.action, this.movement, this.ambient),
                weight: 100
            },
            {
                name: this.findSplayed(),
                weight: 25
            },
            {
                name: this.mullingTapped(),
                weight: 35
            },
            {
                name: this.eatTogether(),
                weight: 85
            },
            {
                name: this.duoRepeat(),
                weight: 100000
            },
            
        ]

        const butlerPhrases = [
            {
                name: this.customButlerPhrase(),
                weight: 10
            },
        ]

        const food = [
            {
                name: this.todaysMenu(),
                weight: 10
            },
        ]

        const events = [
            {
                name: solo,
                weight: 5
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
                weight: 100000
            },
            {
                name: butlerPhrases,
                weight: 1
            },
            {
                name: food,
                weight: 10
            },
        ]

        const event = this.gachaDrawName(events)
        return this.gachaDrawName(event)
    }
}

module.exports = Event