'use strict'

const axios = require('axios').default;

exports.generate = async () => {
    const Location = await require("../class/Location")
    const Event = await require("../class/Event")
    const Feeling = await require("../class/Feeling")
    const Gachable = await require("../class/Gachable")
    const Movement = await require("../class/Movement")
    const Ambient = await require("../class/Ambient")
    const denizensResult = await axios.get('http://localhost:3000/api/daily-lives/denizens')
    
    // const gachable = new Gachable()

    const denizens = denizensResult.data
    const movement = new Movement()
    const ambient = new Ambient()
    const event = new Event()
    const feeling = new Feeling()
    const location = Location

    // const _denizen = gachable.gachaDraw(denizens.data)
    // const _location = Location.decideLocation()
    // const _movement = movement.decideSimpleMovement()
    // const _ambient = ambient.decideSimpleAmbient()

    const phrase = event.pickRandomEvent(denizens, movement, location, feeling, ambient)
    // const phrase = event.simpleArriveSolo(_denizen, _location, _movement) + " " + feeling.decideSimpleFeeling("")

    return phrase
}