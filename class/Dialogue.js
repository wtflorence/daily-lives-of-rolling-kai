const Gachable = require("./Gachable")

class Dialogue extends Gachable {
    constructor() {
        super()
        
        this.agree = [
            {
                name: "I agree",
                weight: 100
            },
            {
                name: "Seems about right",
                weight: 100
            },
            {
                name: "You're not wrong",
                weight: 100
            },
            {
                name: "Absolutely",
                weight: 100
            },
            {
                name: "Omsim",
                weight: 5
            },
            {
                name: "Yeah",
                weight: 100
            },  
            {
                name: "True",
                weight: 100
            },  
            {
                name: "Very true",
                weight: 100
            },  
            {
                name: "Indeed",
                weight: 100
            },  
            {
                name: "That's right",
                weight: 100
            },  
        ]

        
        this.hmm = [
            {
                name: "Hmm?",
                weight: 100
            },
            {
                name: "Yeah?",
                weight: 100
            },
            {
                name: "Mm?",
                weight: 100
            },
            {
                name: "Uhuh?",
                weight: 100
            },
            {
                name: "Yes?",
                weight: 100
            },
            {
                name: "What?",
                weight: 100
            },  
            {
                name: "Ah...",
                weight: 100
            },  
            {
                name: "Hmmm...",
                weight: 100
            },  
            {
                name: "Okay...?",
                weight: 100
            },   
        ]
        
    }

    decideAgree(){
        return this.gachaDrawName(this.agree)
    }
    decideHmm(){
        return this.gachaDrawName(this.hmm)
    }


}

module.exports = Dialogue
