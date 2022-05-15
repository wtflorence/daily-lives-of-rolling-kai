const Gachable = require('./Gachable')

class Fight extends Gachable {

    constructor() {
        super()

        this.attack = [
            {
                name: "attacked",
                weight: 10
            },
            {
                name: "smashed",
                weight: 10
            },
            {
                name: "blasted",
                weight: 10
            },
            {
                name: "charged",
                weight: 10
            }, 
            {
                name: "advanced",
                weight: 10
            },
            {
                name: "swung",
                weight: 10
            },
            {
                name: "lashed",
                weight: 10
            },
            {
                name: "shot",
                weight: 10
            },
            {
                name: "penetrated",
                weight: 1
            },
            {
                name: "pounced",
                weight: 10
            },
            {
                name: "jumped",
                weight: 10
            }, 
            {
                name: "poked",
                weight: 10
            },
            {
                name: "pummeled",
                weight: 10
            },
            {
                name: "struck",
                weight: 10
            },
            {
                name: "hit",
                weight: 10
            },
            {
                name: "whacked",
                weight: 10
            },
            {
                name: "twhacked",
                weight: 10
            },
            {
                name: "bashed",
                weight: 10
            },
            {
                name: "lurched",
                weight: 10
            },
            {
                name: "dashed",
                weight: 10
            },
        ]

        this.block = [
            {
                name: "blocked",
                weight: 10
            },
            {
                name: "parried",
                weight: 10
            },
            {
                name: "deflected",
                weight: 10
            },
            {
                name: "stopped",
                weight: 10
            },
            {
                name: "defended against",
                weight: 10
            },
            {
                name: "cancelled",
                weight: 10
            },
            {
                name: "reflected",
                weight: 10
            },
            {
                name: "confronted",
                weight: 10
            },
            {
                name: "defied",
                weight: 10
            },
            {
                name: "countered",
                weight: 10
            },
        ]

        this.caught = [
            {
                name: "tanked",
                weight: 10
            },
            {
                name: "caught",
                weight: 10
            },
            {
                name: "took",
                weight: 10
            },
            {
                name: "received",
                weight: 2
            },
            {
                name: "got destroyed by",
                weight: 1
            },
            {
                name: "got hit by",
                weight: 10
            },
            {
                name: "got obliterated by",
                weight: 1
            },
            {
                name: "got caught by",
                weight: 10
            },
            {
                name: "got ravaged by",
                weight: 1
            },
            {
                name: "got impaled by",
                weight: 1
            },
            {
                name: "endured",
                weight: 10
            },
            {
                name: "withstood",
                weight: 10
            },
            {
                name: "lived through",
                weight: 2
            },
            {
                name: "braved",
                weight: 10
            },
            {
                name: "weathered",
                weight: 10
            },
            {
                name: "survived",
                weight: 10
            },
            {
                name: "tolerated",
                weight: 10
            },
            {
                name: "stood",
                weight: 10
            },
            {
                name: "persevered",
                weight: 10
            },
        ]

        this.dodge = [
            {
                name: "dodged",
                weight: 10
            },
            {
                name: "sidestepped",
                weight: 10
            },
            {
                name: "disengaged",
                weight: 10
            },
            {
                name: "fled",
                weight: 10
            },
            {
                name: "evaded",
                weight: 10
            },
            {
                name: "eluded",
                weight: 10
            },
            {
                name: "rolled",
                weight: 1
            },
            {
                name: "backed-off",
                weight: 10
            },
            {
                name: "dashed",
                weight: 10
            },
            {
                name: "leaped",
                weight: 10
            },
            {
                name: "ducked",
                weight: 10
            },
        ]

        this.fail = [
            {
                name: "failed",
                weight: 10
            },
            {
                name: "fumbled",
                weight: 10
            },
            {
                name: "didn't connect",
                weight: 10
            },
            {
                name: "missed",
                weight: 10
            },
            {
                name: "was too late",
                weight: 10
            },
            {
                name: "was off the mark",
                weight: 10
            },
            {
                name: "was too slow",
                weight: 10
            },
            {
                name: "was ineffective",
                weight: 2
            },
            {
                name: "was useless",
                weight: 1
            },
        ]

        this.win = [
            {
                name: "won",
                weight: 25
            },
            {
                name: "was victorious",
                weight: 5
            },
            {
                name: "was triumphant",
                weight: 2
            },
            {
                name: "was the champion",
                weight: 1
            },
        ]

        this.battle = [
            {
                name: "battle",
                weight: 10
            },
            {
                name: "bout",
                weight: 10
            },
            {
                name: "fight",
                weight: 10
            },
            {
                name: "challenge",
                weight: 10
            },
            {
                name: "fisticuffs",
                weight: 10
            },
            {
                name: "battle",
                weight: 10
            },
            {
                name: "clash",
                weight: 10
            },
            {
                name: "skirmish",
                weight: 10
            },
            {
                name: "war",
                weight: 10
            },
            {
                name: "dogfight",
                weight: 1
            },
            {
                name: "duel",
                weight: 10
            },
            {
                name: "conflict",
                weight: 10
            },
            {
                name: "meelee",
                weight: 10
            },
            {
                name: "confrontation",
                weight: 10
            },
            {
                name: "engagement",
                weight: 10
            },
            {
                name: "combat",
                weight: 10
            },
            {
                name: "feud",
                weight: 1
            },
            {
                name: "brawl",
                weight: 10
            },
            {
                name: "scuffle",
                weight: 10
            },
            {
                name: "battle",
                weight: 10
            },
            {
                name: "encounter",
                weight: 10
            },
            {
                name: "quarrel",
                weight: 10
            },
            {
                name: "squabble",
                weight: 2
            },
        ]

        this.defaultWeapon = [
            {
                name: "bare hands",
                weight: 100
            },
            {
                name: "bare fists",
                weight: 100
            },
            {
                name: "kick",
                weight: 100
            },
            {
                name: "fists",
                weight: 100
            },
            {
                name: "powerful kick",
                weight: 25
            },
            {
                name: "Ro11ingBoy's Signature Spinning Roundhouse Kick",
                weight: 5
            },
        ]

        this.initiate = [
            {
                name: "started",
                weight: 10
            },
            {
                name: "began",
                weight: 10
            },
            {
                name: "initiated",
                weight: 10
            },
        ]

        this.damage = [
            {
                name: "huge damage",
                weight: 10
            },
            {
                name: "a devastating blow",
                weight: 1
            },
            {
                name: "a critical hit",
                weight: 2
            },
            {
                name: "a hit",
                weight: 50
            },
            {
                name: "a few hits",
                weight: 20
            },
            {
                name: "some damage",
                weight: 30
            },
        ]

        this.faint = [
            {
                name: "fainted",
                weight: 10
            },
            {
                name: "was knocked out",
                weight: 2
            },
            {
                name: "was knocked out cold",
                weight: 1
            },
            {
                name: "was KO'ed",
                weight: 10
            },
            {
                name: "slammed to the ground",
                weight: 10
            },
            {
                name: "was defeated",
                weight: 10
            },
        ]

        this.curse = [
            {
                name: "cursed",
                weight: 10
            },
            
            {
                name: "swore",
                weight: 8
            },
            {
                name: "bad-mouthed",
                weight: 5
            },           
            {
                name: "hissed",
                weight: 2
            },           
            {
                name: "gritted their teeth",
                weight: 5
            },         
            {
                name: "raged",
                weight: 10
            },           
            {
                name: "hissed",
                weight: 10
            },
        ]

        
        this.finishing = [
            {
                name: "finishing blow",
                weight: 10
            },
            
            {
                name: "coup de grâce",
                weight: 10
            },
            {
                name: "final blow",
                weight: 10
            },           
            {
                name: "final attack",
                weight: 10
            },           
            {
                name: "last hit",
                weight: 10
            },         
            {
                name: "last blow",
                weight: 10
            },           
            {
                name: "finishing strike",
                weight: 10
            },
        ]
                
        this.splayed = [ 
            {
                name: "splayed on the ground",
                weight: 10
            },  
        ]
    }

    decideAttack = () => {
        return this.gachaDrawName(this.attack)
    }

    decideBlock = () => {
        return this.gachaDrawName(this.block)
    }

    decideCaught = () => {
        return this.gachaDrawName(this.caught)
    }

    decideDodge = () => {
        return this.gachaDrawName(this.dodge)
    }

    decideFail = () => {
        return this.gachaDrawName(this.fail)
    }

    decideWin = () => {
        return this.gachaDrawName(this.win)
    }

    decideBattle = () => {
        return this.gachaDrawName(this.battle)
    }

    decideInitiate = () => {
        return this.gachaDrawName(this.initiate)
    }

    decideDamage = () => {
        return this.gachaDrawName(this.damage)
    }

    decideFaint = () => {
        return this.gachaDrawName(this.faint)
    }

    decideCurse = () => {
        return this.gachaDrawName(this.curse)
    }

    decideDefaultWeapon = () => {
        return this.gachaDrawName(this.defaultWeapon)
    }

    decideFinishing = () => {
        return this.gachaDrawName(this.finishing)
    }

    decideSplayed() {
        return this.gachaDrawName(this.splayed)
    }

}

module.exports = Fight