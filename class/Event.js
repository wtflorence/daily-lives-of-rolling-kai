const Gachable = require("./Gachable")
const _ = require('lodash');

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
        const local = this.gachaDraw(this.location)
        const loc = local.decideLocation()

        return `${denizen.name} ${this.movement.decideMovement()} ${loc}.`
    }

    simpleWaitSolo = () => {
        const denizen = this.gachaDraw(this.denizens)
        const local = this.gachaDraw(this.location)
        const loc = local.decideLocation()

        return `${denizen.name} ${this.movement.decideMovement()} at ${loc}.`
    }

    simpleArriveThoughtChain = () => {
        const denizen = this.gachaDraw(this.denizens)
        const local = this.gachaDraw(this.location)
        const loc = local.decideLocation()

        return `${denizen.name} ${this.movement.decideMovement()} ${loc}. They ${this.action.decideThink()} ${this.topic.decideDuration()} about ${this.topic.decideTopic()} and ${this.topic.decideTopicEnder()}`
    }

    simpleThoughTopictWaitWhisperTopicEnderChain = () => {
        const denizen = this.gachaDraw(this.denizens)
        const local = this.gachaDraw(this.location)
        const loc = local.decideLocation()

        return `${denizen.name} ${this.action.decideThink()} about ${this.topic.decideTopic()} on the way to ${loc}. They ${this.movement.decideWait()}, ${this.action.decideSpeak()} briefly, and ${this.movement.decideContinue()}. ${this.ambient.decideSound()}.`
    }

    simpleThoughtTopicAmbientContinueMovementThinkingTopicEnderChain = () => {
        const denizen = this.gachaDraw(this.denizens)
        const local = this.gachaDraw(this.location)
        const loc = local.decideLocation()

        return `${denizen.name} ${this.action.decideThink()} about ${this.topic.decideTopic()}. ${this.ambient.decideAmbient()} as they ${this.movement.decideContinue()}, and when they ${this.movement.decideMovement()} ${loc}, they kept ${this.action.decideThinking()} about ${this.topic.decideTopicEnder()}.`
    }

    simpleOtwThoughtAmbientTopicEnderExpressionChain = () => {
        const denizen = this.gachaDraw(this.denizens)
        const local = this.gachaDraw(this.location)
        const loc = local.decideLocation()

        return `${denizen.name} is ${this.movement.decideOtw()} ${loc} and ${(this.ambient.decideSound()).toLowerCase()}. They suddenly ${this.action.decideThink()} about ${this.topic.decideTopic()} and ${this.topic.decideTopicEnder()}. They ${this.action.decideExpression()} at ${this.topic.decideTopicType()}.`
    }

    timesDenizenBrooding = () => {
        const denizen = this.gachaDraw(this.denizens)

        return `${this.topic.decideTimes()} ${denizen.name} ${this.feeling.decideLinking()} ${this.feeling.decideFeeling()}. They ${this.action.decideThink()} about ${this.topic.decideTopic()} and ${this.topic.decideTopicEnder()} but they ended up ${this.action.decideThinking()} about ${this.topic.decideTopic()} instead. ${this.ambient.decideAmbient()} and ${denizen.name} ${this.movement.decideContinue()} with their day.`

    }

    firmBelieverPositive = () => {
        const denizen = this.gachaDraw(this.denizens)
        const t1 = this.topic.decideTopic()

        return `${this.topic.decideLocals()} have accused ${denizen.name} of being a ${this.topic.decideBeliever()} of ${t1} ${this.topic.decideTheCasePositive()}. ${denizen.name} ${this.feeling.decideLike()} ${t1} and they ${this.feeling.decideLinking()} ${this.feeling.decideFeeling()} whenever they ${this.action.decideThink()} about it.`
    }

    soloDream = () => {
        const denizen = this.gachaDraw(this.denizens)
        const t1 = this.topic.decideTopic()
        const t2 = this.topic.decideTopic()
        const t3 = this.topic.decideTopic()

        const local = this.gachaDraw(this.location)
        const loc = local.decideLocation()

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

        return `${this.topic.decideLocals()} have accused ${denizen.name} of being a ${this.topic.decideBeliever()} of ${t1} ${this.topic.decideTheCaseNegative()}. ${denizen.name} ${this.feeling.decideHate()} ${t1} and they ${this.feeling.decideLinking()} ${this.feeling.decideFeeling()} whenever they ${this.action.decideThink()} about it.`
    }

    // end solo

    simpleArriveSoloFeelingChain = () => {
        const denizen = this.gachaDraw(this.denizens)
        const local = this.gachaDraw(this.location)
        const loc = local.decideLocation()

        return `${denizen.name} ${this.movement.decideMovement()} ${loc}. They ${this.feeling.decideLinking()} ${this.feeling.decideFeeling()}.`
    }

    simpleArriveSoloFeelingAndChain = () => {
        const denizen = this.gachaDraw(this.denizens)
        const local = this.gachaDraw(this.location)
        const loc = local.decideLocation()
        return `${denizen.name} ${this.movement.decideMovement()} ${loc} and they ${this.feeling.decideLinking()} ${this.feeling.decideFeeling()}.`
    }

    simpleArriveSoloFeelingAsChain = () => {
        const denizen = this.gachaDraw(this.denizens)
        const local = this.gachaDraw(this.location)
        const loc = local.decideLocation()

        return `${denizen.name} ${this.feeling.decideLinking()} ${this.feeling.decideFeeling()} as they ${this.movement.decideMovement()} ${loc}.`
    }

    simpleWaitSoloFeelingChain = () => {
        const denizen = this.gachaDraw(this.denizens)
        const local = this.gachaDraw(this.location)
        const loc = local.decideLocation()

        return `${denizen.name} ${this.movement.decideMovement()} at ${loc}. They ${this.feeling.decideLinking()} ${this.feeling.decideFeeling()}.`
    }

    simpleWaitSoloFeelingAsChain = () => {
        const denizen = this.gachaDraw(this.denizens)
        const local = this.gachaDraw(this.location)
        const loc = local.decideLocation()
        const f = this.feeling.decideFeeling()
        const l = this.feeling.decideLinking()

        return `${denizen.name} ${this.movement.decideMovement()} at ${loc} as they ${l} ${f}.`
    }

    simpleWaitSoloFeelingAndChain = () => {
        const denizen = this.gachaDraw(this.denizens)
        const local = this.gachaDraw(this.location)
        const loc = local.decideLocation()
        const f = this.feeling.decideFeeling()
        const l = this.feeling.decideLinking()

        return `${denizen.name} ${this.movement.decideMovement()} at ${loc} and they ${l} ${f}.`
    }

    simpleAmbientArriveSoloFeelingChain = () => {
        const denizen = this.gachaDraw(this.denizens)

        return `${this.ambient.decideAmbient()} and ${denizen.name}, who is feeling ${this.feeling.decideFeeling()}, ${this.movement.decideMovement()}.`
    }

    simpleArriveWaitChain() {
        const denizen = this.gachaDraw(this.denizens)
        const local = this.gachaDraw(this.location)
        const loc = local.decideLocation()

        return `${denizen.name} ${this.movement.decideMovement()} ${loc} and ${this.movement.decideWait()}.`
    }

    simpleWaitArriveChain() {
        const denizen = this.gachaDraw(this.denizens)
        const local = this.gachaDraw(this.location)
        const loc = local.decideLocation()
        const m1 = this.movement.decideMovement()
        const m2 = this.movement.decideWait()

        return `${denizen.name} ${m2}. Then they ${m1} ${loc}.`
    }

    simpleArriveAmbientChain() {
        const denizen = this.gachaDraw(this.denizens)
        const local = this.gachaDraw(this.location)
        const loc = local.decideLocation()

        return `${denizen.name} ${this.movement.decideMovement()} ${loc}. ${this.ambient.decideAmbient()}.`
    }

    simpleAmbientArriveChain() {
        const denizen = this.gachaDraw(this.denizens)
        const local = this.gachaDraw(this.location)
        const loc = local.decideLocation()

        return `${this.ambient.decideAmbient()}. ${denizen.name} ${this.movement.decideMovement()} ${loc}.`
    }

    simpleAmbientArriveAsChain() {
        const denizen = this.gachaDraw(this.denizens)
        const local = this.gachaDraw(this.location)
        const loc = local.decideLocation()

        return `${this.ambient.decideAmbient()} as ${denizen.name} ${this.movement.decideMovement()} ${loc}.`
    }

    // fights

    fightOneSidedD1Win() {
        let d1
        let d2

        [d1, d2] = this.gachaDrawTwo(this.denizens)

        const d1Weapon = this.gachaDrawName(this.gachafy(d1.flavour.weapons))

        return `${this.ambient.decideAmbient()} as ${d1.name} ${this.fight.decideInitiate()} a ${this.fight.decideBattle()}. Taking the initiative, ${d1.name} ${this.fight.decideAttack()}. ${d2.name} ${this.fight.decideDodge()} then ${this.fight.decideAttack()} back. ${d1.name} ${this.fight.decideCaught()} ${this.fight.decideDamage()}! ${d1.name} ${this.fight.decideAttack()} ${d2.name} with their ${d1Weapon} and ${d2.name} ${this.fight.decideFaint()}`
    }

    emergency() {

        let d1, d2
        [d1, d2] = this.gachaDrawTwo(this.denizens)

        const local = this.gachaDraw(this.location)
        const loc = local.decideLocation()

        return `${d1.name} ${this.fight.decideFaint()} and ${d2.name}, who's passing by, ${this.movement.decideHurried()} towards them. ${d1.name} ${this.action.decideExpression()} and said they needed to go to ${loc} ${this.topic.decideUrgency()}.`
    }


    regainMemory() {

        let d1, d2
        [d1, d2] = this.gachaDrawTwo(this.denizens)

        const d2Weapon = this.gachaDrawName(this.gachafy(d2.flavour.weapons))

        return `${d1.name} ${this.fight.decideAttack()} ${d2.name} so hard that they regained a former memory of ${this.topic.decideTopic()}. ${d2.name} ${this.action.decideExpression()} then ${this.fight.decideAttack()} back with their ${d2Weapon}. ${d1.name} ${this.fight.decideDodge()} but it ${this.fight.decideFail()}! ${d2.name} dealt the ${this.fight.decideFinishing()} and ${this.fight.decideWin()}.`
    }

    regainMemoryHelpFight() {

        let d1, d2
        [d1, d2] = this.gachaDrawTwo(this.denizens)

        return `${d1.name} was fighting ${d2.name} when an old memory struck their mind. They recalled about ${this.topic.decideTopic()} and ${this.topic.decideTopicEnder()} and this helped change the outcome of the fight. ${d1.name} ${this.fight.decideAttack()} ${d2.name} and dealt the ${this.fight.decideFinishing()}!`
    }

    weaponCounter() {
        let d1, d2
        [d1, d2] = this.gachaDrawTwo(this.denizens)

        const d1Weapon = this.gachaDrawName(this.gachafy(d1.flavour.weapons))
        const d2Weapon = this.gachaDrawName(this.gachafy(d2.flavour.weapons))

        return `${d1.name} ${this.fight.decideAttack()}. ${d2.name} ${this.fight.decideDodge()} then ${this.fight.decideAttack()} back. But ${d1.name} ${this.fight.decideBlock()} ${d2Weapon} and countered with their ${d1Weapon}! ${d2.name} ${this.fight.decideAttack()} one last time but ${d1.name} delivered the ${this.fight.decideFinishing()} first. It's over. ${d1.name} ${this.fight.decideWin()}.`
    }

    
    suddenAttack() {
        let d1, d2
        [d1, d2] = this.gachaDrawTwo(this.denizens)
        const local = this.gachaDraw(this.location)
        const loc = local.decideLocation()
        const d1Weapon = this.gachaDrawName(this.gachafy(d1.flavour.weapons))

        return `${d1.name} ${this.feeling.decideLinking()} ${this.feeling.decideFeeling()}. They ${this.fight.decideAttack()} ${d2.name} out of the blue in ${loc}! ${d2.name} ${this.fight.decideBlock()} ${d1.name}'s ${d1Weapon} in the nick of time and ${this.fight.decideAttack()} back screaming "${this.topic.decideTopic()} is ${this.topic.decideTopic()}!"`
    }

    spillFood() {
        let d1, d2
        [d1, d2] = this.gachaDrawTwo(this.denizens)
        const local = this.gachaDraw(this.location)
        const loc = local.decideLocation()

        // {RB} {attacked}. {Jigz} {dodged} then {attacked} back. {RB} {blocked} {Futuristic Sight} and counterattacked with {Immortal Aura}. Then it was over.
        return `${d1.name} ${this.movement.decideMovement()} towards ${loc}. They accidentally ${this.action.decideBump()} against ${d2.name} and spilled their "${this.food.decideFoodStuff()}". ${d2.name} ${this.action.decideRage()} about this and ${this.fight.decideAttack()} ${d1.name} to the face!` // fix face and enraged
    }

    // end fights



    // duo
    simpleDuoTalkLocation() {
        let d1
        let d2
        [d1, d2] = this.gachaDrawTwo(this.denizens)
        const local = this.gachaDraw(this.location)

        return `${d1.name} met ${d2.name} at ${local.decideLocation()}. They ${this.action.decideSpeak()} about ${this.topic.decideTopic()} ${this.topic.decideDuration()}. In the end, ${d2.name} ${this.action.decideThink()} about ${this.topic.decideTopicEnder()}.`

    }
    simpleAmbientLocationDuoTalk() {
        let d1
        let d2
        [d1, d2] = this.gachaDrawTwo(this.denizens)
        const local = this.gachaDraw(this.location)

        return `${this.ambient.decideAmbient()} as ${d1.name} ${this.movement.decideMovement()} ${local.decideLocation()}. They met ${d2.name} and ${this.action.decideSpeak()} about ${this.topic.decideTopic()}, ${this.topic.decideTopic()}, and ${this.topic.decideTopicEnder()}. ${d1.name} ${this.feeling.decideLinking()} ${this.feeling.decideFeeling()} from this.`

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

    duoArriveLocationTopicExpression = () => {
        let d1, d2
        [d1, d2] = this.gachaDrawTwo(this.denizens)
        const local = this.gachaDraw(this.location)
        const loc = local.decideLocation()

        return `${d1.name} and ${d2.name} ${this.movement.decideMovement()} ${loc}. ${this.ambient.decideAmbient()} and ${(this.ambient.decideSound()).toLowerCase()}. They ${this.movement.decideWait()} and ${this.action.decideSpeak()} about ${this.topic.decideTopic()}, ${this.topic.decideTopic()}, and ${this.topic.decideTopic()} ${this.topic.decideDuration()}.`
    }

    findSplayed = () => {
        let d1, d2
        [d1, d2] = this.gachaDrawTwo(this.denizens)
        const m1 = this.movement.decideWait()

        return `${this.ambient.decideAmbient()} and ${d1.name}, who ${this.action.decideFound()} ${d2.name} ${this.fight.decideSplayed()}, ${this.action.decideExpression()} and ${m1}. They ${m1} there ${this.topic.decideDuration()} until they finally ${this.action.decideSnapBack()}.`
    }

    mullingTapped = () => {
        let d1, d2
        [d1, d2] = this.gachaDrawTwo(this.denizens)
        const local = this.gachaDraw(this.location)
        const loc = local.decideLocation()
        const m1 = this.movement.decideWait()

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

    importanter = () => {
        let d1, d2
        [d1, d2] = this.gachaDrawTwo(this.denizens)

        return `${this.ambient.decideAmbient()} and ${d1.name} said, "${_.upperFirst(this.topic.decideTopic())} is important but ${_.upperFirst(this.topic.decideTopic())} is importanter". However, ${d2.name} simply ${this.action.decideExpression()} and ${this.movement.decideContinue()} with their day.`
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
                name: this.simpleArriveSolo(),
                weight: 10
            },
            {   
                name: this.simpleWaitSolo(this.denizens, this.movement.decideWait(), this.location),
                weight: 10
            },
            {
                name: this.simpleArriveThoughtChain(this.denizens, this.movement.decideMovement(), this.location, this.action, this.topic),
                weight: 25
            },
            {
                name: this.simpleThoughTopictWaitWhisperTopicEnderChain(this.denizens, this.movement, this.location, this.action, this.topic, this.ambient),
                weight: 15
            },
            {
                name: this.simpleThoughtTopicAmbientContinueMovementThinkingTopicEnderChain(this.denizens, this.movement, this.location, this.action, this.topic, this.ambient),
                weight: 15
            },
            {
                name: this.simpleOtwThoughtAmbientTopicEnderExpressionChain(this.denizens, this.movement, this.location, this.action, this.topic, this.ambient),
                weight: 33
            },
            {
                name: this.timesDenizenBrooding(this.denizens, this.movement, this.location, this.feeling, this.ambient, this.fight, this.action, this.topic),
                weight: 45
            },
            {
                name: this.firmBelieverPositive(),
                weight: 45
            },
            {
                name: this.firmBelieverNegative(),
                weight: 45
            },
            {
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
            },
            {
                name: this.simpleAmbientArriveSoloFeelingChain(),
                weight: 10
            },
            {
                name: this.simpleArriveWaitChain(),
                weight: 5
            },
            {
                name: this.simpleWaitArriveChain(),
                weight: 5
            },
            {
                name: this.simpleArriveAmbientChain(),
                weight: 10
            },
            {
                name: this.simpleAmbientArriveChain(),
                weight: 10
            },
            {
                name: this.simpleAmbientArriveAsChain(),
                weight: 10
            },
            {
                name: this.simpleArriveSoloFeelingChain(),
                weight: 10
            },

            {
                name: this.simpleWaitSoloFeelingChain(),
                weight: 10
            },
            {
                name: this.simpleWaitSoloFeelingAsChain(),
                weight: 10
            },
            {
                name: this.simpleWaitSoloFeelingAndChain(),
                weight: 10
            },
            {
                name: this.simpleArriveSoloFeelingAndChain(),
                weight: 10
            },
            {
                name: this.simpleArriveSoloFeelingAsChain(),
                weight: 10
            },
        ]
 
        const fightScene = [
            {
                name: this.fightOneSidedD1Win(),
                weight: 10
            },
            {
                name: this.emergency(),
                weight: 10
            },
            {
                name: this.regainMemory(),
                weight: 10
            },
            {
                name: this.regainMemoryHelpFight(),
                weight: 10
            },
            {
                name: this.weaponCounter(),
                weight: 10
            },
            {
                name: this.suddenAttack(),
                weight: 10
            },
            {
                name: this.spillFood(),
                weight: 10
            },
        ]

        const duo = [
            {
                name: this.simpleDuoTalkLocation(),
                weight: 100
            },
            {
                name: this.simpleAmbientLocationDuoTalk(),
                weight: 100
            },
            {
                // change rest
                name: this.duoArriveLocationTopicExpression(),
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
                weight: 85
            },
            {
                name: this.importanter(),
                weight: 85
            }
            
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
                weight: 50
            }, 
            {
                name: fightScene,
                weight: 75
            },
            {
                name: duo,
                weight: 75
            },
            {
                name: butlerPhrases,
                weight: 1
            },
            {
                name: food,
                weight: 15
            },
        ]

        // console.log(JSON.stringify(events));

        const event = this.gachaDrawName(events)
        return this.gachaDrawName(event)
    }
}

module.exports = Event