'use strict'

const axios = require('axios').default;

exports.generate = async () => {
    const Location = await require("../class/Location")
    const Event = await require("../class/Event")
    const Feeling = await require("../class/Feeling")
    const Movement = await require("../class/Movement")
    const Ambient = await require("../class/Ambient")
    const Action = await require("../class/Action")
    const Topic = await require("../class/Topic")
    const Butler = await require("../class/Butler")
    const Food = await require("../class/Food")
    const Fight = await require("../class/Fight")
    const denizensResult = await axios.get('http://localhost:3000/api/daily-lives/denizens')
    
    const denizens = denizensResult.data
    const movement = new Movement()
    const ambient = new Ambient()
    const action = new Action()
    const topic = new Topic()
    const butler = new Butler()
    const food = new Food()
    const feeling = new Feeling()
    const fight = new Fight()
    const location = Location
    
    const event = new Event(denizens, movement, location, feeling, ambient, fight, action, topic, butler, food)

    const phrase = event.pickRandomEvent()
    return phrase
}