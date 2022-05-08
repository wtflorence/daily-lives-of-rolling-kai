const Gachable = require("./Gachable")

class Movement extends Gachable {
    constructor() {
        super()

        this.movements = [
            {
                name: "arrived to",
                weight: 10
            },
            {
                name: "crash-landed to",
                weight: 1
            },
            {
                name: "escaped to",
                weight: 1
            },
            {
                name: "went to",
                weight: 10
            },
            {
                name: "traveled to",
                weight: 10
            },
            {
                name: "set off to",
                weight: 10
            },
            {
                name: "wandered to",
                weight: 10
            },
            {
                name: "patrolled",
                weight: 1
            },
            {
                name: "walked to",
                weight: 10
            },
            {
                name: "jogged to",
                weight: 10
            },
            {
                name: "hurried to",
                weight: 10
            },
            {
                name: "sneaked to",
                weight: 1
            },
            {
                name: "crept towards",
                weight: 1
            },
            {
                name: "sauntered to",
                weight: 10
            },
            {
                name: "walked menacingly to",
                weight: 2
            },
            {
                name: "ambled to",
                weight: 10
            },
            {
                name: "proceeded towards",
                weight: 10
            },
            {
                name: "sleepwalked to",
                weight: 1
            }, 
        ]

        this.otw = [
            {
                name: "en route to",
                weight: 10
            },
            {
                name: "on the way to",
                weight: 10
            },
            {
                name: "going to",
                weight: 10
            },
            {
                name: "traveling to",
                weight: 10
            },
            {
                name: "passing through",
                weight: 10
            },
            {
                name: "patrolling",
                weight: 10
            },
            {
                name: "checking out",
                weight: 10
            },
            {
                name: "about to reach",
                weight: 10
            }, 
        ]

        this.wait = [
            {
                name: "felt paralysed",
                weight: 10
            },
            {
                name: "waited",
                weight: 10
            },
            {
                name: "stood",
                weight: 10
            },
            {
                name: "stood their ground",
                weight: 10
            },
            {
                name: "froze",
                weight: 10
            },
            {
                name: "halted",
                weight: 10
            },
            {
                name: "stopped",
                weight: 10
            },
            {
                name: "stopped their tracks",
                weight: 10
            },
            {
                name: "marvelled at the scenery",
                weight: 10
            },
            {
                name: "rested",
                weight: 10
            },
            {
                name: "observed",
                weight: 10
            },
            {
                name: "daydreamed",
                weight: 10
            },
            {
                name: "did nothing",
                weight: 10
            },
        ]

        this.continue = [
            {
                name: "pressed on",
                weight: 10
            },
            {
                name: "moved on",
                weight: 10
            },
            {
                name: "moved forward",
                weight: 10
            },
            {
                name: "continued",
                weight: 10
            },
            {
                name: "carried on",
                weight: 10
            },
            {
                name: "proceeded",
                weight: 10
            }, 
        ]
    }

    decideMovement(){
        return this.gachaDrawName(this.movements)
    }

    decideWait(){
        return this.gachaDrawName(this.wait)
    }

    decideContinue(){
        return this.gachaDrawName(this.continue)
    }

    decideOtw(){
        return this.gachaDrawName(this.otw)
    }


}

module.exports = Movement