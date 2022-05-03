'use strict'

const axios = require('axios').default;

exports.generate = async () => {
    const { Location } = await require("../class/Location")
    
    // const denizens = await axios.get('http://localhost:3000/api/daily-lives/denizens')
    
    return (Location.decideLocation("Ro11ingBoy"))
}