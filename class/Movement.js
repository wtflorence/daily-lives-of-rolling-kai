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
            {
                name: "had arrived to",
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
            {
                name: "held back",
                weight: 5
            },
            {
                name: "paused",
                weight: 5
            },
            {
                name: "halted",
                weight: 5
            },
            {
                name: "gazed in awe",
                weight: 5
            },
            {
                name: "stood frozen",
                weight: 5
            },
            {
                name: "stopped dead",
                weight: 5
            },
            {
                name: "dumbfounded",
                weight: 5
            },
            {
                name: "startled",
                weight: 5
            },
            {
                name: "staggered",
                weight: 5
            },
        ]
    }

    decideSimpleMovement(){
        return this.gachaDrawName(this.movements)
    }

    decideSimpleWait(){
        return this.gachaDrawName(this.wait)
    }


}

module.exports = Movement
