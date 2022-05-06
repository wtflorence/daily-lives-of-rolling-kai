'use strict'

const axios = require('axios').default;

exports.generate = async () => {
    const Location = await require("../class/Location")
    const Event = await require("../class/Event")
    const Feeling = await require("../class/Feeling")
    const Gachable = await require("../class/Gachable")
    const Movement = await require("../class/Movement")
    const Ambient = await require("../class/Ambient")
    const Action = await require("../class/Action")
    const Topic = await require("../class/Topic")
    const Fight = await require("../class/Fight")
    const denizensResult = await axios.get('http://localhost:3000/api/daily-lives/denizens')
    
    // const gachable = new Gachable()

    const denizens = denizensResult.data
    const movement = new Movement()
    const ambient = new Ambient()
    const action = new Action()
    const topic = new Topic()
    const event = new Event()
    const feeling = new Feeling()
    const fight = new Fight()
    const location = Location

    // const _denizen = gachable.gachaDraw(denizens.data)
    // const _location = Location.decideLocation()
    // const _movement = movement.decideSimpleMovement()
    // const _ambient = ambient.decideSimpleAmbient()

    const phrase = event.pickRandomEvent(denizens, movement, location, feeling, ambient, fight, action, topic)
    // const phrase = event.simpleArriveSolo(_denizen, _location, _movement) + " " + feeling.decideSimpleFeeling("")

    return phrase
}