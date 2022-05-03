'use strict'

const axios = require('axios').default;

exports.generate = async () => {
    const _Location = await require("../class/Location")
    const _Event = await require("../class/Event")

    const denizens = await axios.get('http://localhost:3000/api/daily-lives/denizens')
    const locations = _Location.decideLocation()

    const event = new _Event(denizens.data, locations)

    const phrase = event.simpleArriveSolo()

    return phrase
}