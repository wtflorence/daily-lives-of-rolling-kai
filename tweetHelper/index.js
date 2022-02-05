'use strict'

let objects = [];
let items = [];
let monsters = [];
let npcs = [];
let actions = [];
let locations = []
let ambient = []
let denizens = []

// Ro11ingBoy entered Hicami's room. They did nothing.
// Ro11ingBoy ambled to Tavern General and gazed around the place. They felt a mysterious energy in the air.
// Ro11ingBoy drank The Mysterious Drink. They felt light-headed.
// Bilbo walked past No Man's Land. They sensed danger.
// Bilbo got stuck in Tavern General's Second Floor.
// Bilbo met Ro11ingBoy inside the Museum. The two smiled at each other.
// Hicami walked past Ro11ingBoy in the Sleeping Quarters. They high-fived.
// Hicami ate Tempura at Tavern General's Bar Counter. Ro11ingBoy spyed them.
// Bilbo and Ro11ingBoy started a fight in the Cadre Council. Bilbo smacked Ro11ingBoy to the face. It was super effective.
// Miraxcle cooked a steamed mutton in Tavern General's Kitchen. They served it to everyone in Cadre Council.

function goSolo(resources) {
	let actions = resources.actions
	let locations = resources.locations
	let denizens = resources.denizens

	let action = actions[Math.floor(Math.random() * actions.length)] // draw random action
	let location = locations[Math.floor(Math.random() * locations.length)] // draw random location
	if ('sub' in location) {
		// coin toss
		if(Math.random() < 0.70) {
            location = { name: location.name + "'s " + location.sub[Math.floor(Math.random() * location.sub.length)]} // apend sub location
        } 
	}
	let denizen = denizens[Math.floor(Math.random() * denizens.length)] // draw random denizen
	// console.log(action.name)
	let phrase = ""

	switch(action.name) {

		case 'movement_between_rooms':
		// let location_mbr = location[Math.floor(Math.random() * location.length)] // draw random location plus adjective // ex. brightly lit room
		let action_mbr = action.descriptions[Math.floor(Math.random() * action.descriptions.length)]; // draw random action phrase // example: proceeded
		phrase = generateMovementPhrase(denizen.name, action_mbr, location.name)
		break

        // case 'wait':
		// let action_w = action.descriptions[Math.floor(Math.random() * action.descriptions.length)]; // draw random action phrase // example: proceeded
		// let location_w = location.descriptions[Math.floor(Math.random() * location.descriptions.length)] + " " + location.name // draw random location plus adjective // ex. brightly lit room
		// phrase = generateWaitPhrase(action_w, location_w)
		// break

		// case 'did_nothing':
		// default:
		// phrase = "you did nothing."
		// break
	}

	return phrase
}

denizens = [
	{
		name: "Ro11ingBoy"
	},
	{
		name: "Hicami"
	},
	{
		name: "Bilbo"
	},
	{
		name: "p4nkeyk"
	},
	{
		name: "Mariya"
	},
	{
		name: "finite"
	},
	{
		name: "RaelEstate"
	},
	{
		name: "nemi"
	},
	{
		name: "Bleu"
	}, 
]

locations = [
	{
		name: "Tavern General",
		sub: ["Kitchen", "Bar Counter", "Bar", "Stage", "Stairs", "Secret Tea Room", "Weebs Dungeon", "Tiktok Room", "Singerist Room", "Comfort Room", "Supply Room", "Hidden Room", "Entrance", "Alleyway", "Back-room", "Bot-invocation Room", "Windows"]
	},
	{
		name: "Tavern Second-floor",
		sub: ["Shrine", "Auditorium", "Bot-invocation Room", "Sleeping Quarters", "Bar counter", "Bar", "Kitchen", "Stairs", "Inn"]
	},
	{
		name: "Ro11ingBoy's Room",
	},
	{
		name: "The Secret Lab",
	},
	{
		name: "The Bulletin Board",
		sub: ["Announcements", "Support Questions", "Metaverse Updates", "Partner News"]
	},
	{
		name: "The Job Board",
	},
	{
		name: "Dead Man's Plaza",
	},
	{
		name: "No Man's Land",
	},
	{
		name: "The Guild Hall",
		sub: ["Game Lobby", "Memes Room", "RK Memes Room", "Creative Corner"]
	},
	{
		name: "HQ",
		sub: ["RK Artist Lab", "Cadre Council", "Vault", "Handler's Office", "Breeding Grounds"]
	},
	{
		name: "The Vault",
	}, 
	{
		name: "Capo's Quarters",
	},
	{
		name: "Reptile School",
	},
	{
		name: "Mech School",
	},
	{
		name: "Beast School",
	},
	{
		name: "Plant School",
	},
	{
		name: "Aquatic School",
	},
	{
		name: "Dusk School",
	},
	{
		name: "Bird School",
	},
	{
		name: "Scholar Lounge",
		sub: ["SLP Leaderboard", "Scholar News", "Scholar Application", "Scholar Readme First"]
	},
	{
		name: "Metaverse Hub",
		sub: ["Axie Infinity", "Pegaxy", "Crypto Raiders", "Embersword", "Legends of Venari", "On Mars", "Mir4"]
	},
	{
		name: "Crewmate's Secret Base",
	},
	{
		name: "the Business District",
		sub: ["Merchant Hub", "NFT Market", "RK Axie Market", "Open Axie Market", "Artist Commissions"]
	}
]
 

actions = [
	{ 
		name: "movement_between_rooms", 
		descriptions: ["proceeded", "moved", "fled", "traveled", "escaped", "set off", "ran away", "wandered", "patrolled", "advanced", "went", "climbed", "ran", "walked", "strolled", "clambered", "ambled", "sauntered", "jogged", "sprinted", "lunged", "jumped", "evacuated", "sneaked"] 
	},
	// { 
	// 	name: "wait", 
	// 	descriptions: ["waited", "stayed", "stayed put", "marvelled the scenery", "inhaled a lungful of air", "did nothing", "waited", "rested", "tried to catch your breath", "cracked your knuckles", "daydreamed", "remembered an old joke", "felt lonely", "stood", "felt paralysed", "waited", "did nothing", "caught your breath", "stood dumbfounded", "stopped", "halted your tracks", "stopped your tracks"] 
	// },
	// { 
	// 	name: "did_nothing", 
	// 	descriptions: [] 
	// },
	// { 
	// 	name: "feel_possesive", 
	// 	descriptions: ["eyelids felt heavy"] 
	// },
	// { 
	// 	name: "feel", 
	// 	descriptions: ["felt cold", "shivered", "felt comfortable", "felt energized", "felt lonely", "felt fine", "felt a shiver ran down your spine", "felt at ease", "felt well-rested"] 
	// }
];

ambient = [
	{
		name: "smell", 
		descriptions: ["the smell of fish", "a whiff of blood", "the smell of blood", "the stench of death", "the aroma of flowers", "the smell of coffee", "layers of dust", "the smell of the sea", "the smell of pancakes", "the smell of lilacs", "the smell of waterlilies", "the smell of roses", "the smell of lavender", "the smell of dust", "the smell of old books", "the smell of old tomes", "the smell of rust", "the smell of danger", "the smell of dried blood", "a small sandstorm"],
		helpers: ["wafted through your senses", "pervaded your nostrils", "came from somewhere", "remained", "was vaguely present", "is in the air", "hung in the air", "made your nose twitch", "zapped your nose", "reached your nose", "passed by", "was noticeable", "was apparent", "haunted your senses", "made you sniff"]
	},
	{
		name: "sight", 
		descriptions: ["flickering lights", "a crack", "something shiny", "dust", "dark dust", "glowing dust", "cobwebs", "spider webs", "evil inscriptions", "foreign writing", "foreign scribbling", "a random gibberish on a surface", "a random gibberish on the walls", "a small foliage", "a small reflective surface", "a puddle", "a small body of water", "a trail of blood", "a pool of blood", "a puddle of blood", "a tiny corpse", "a small rock", "crystals", "small ornaments", "thingamabobs", "a small smear", "a tiny pebble", "a shining rock", "a shiny pebble", "a coarse surface", "a tiny frog", "a bug", "a creepy bug"],
		helpers: ["glimmered in your peripheral vision", "shimmered in your peripheral vision", "was caught in your peripheral vision", "caught your eye", "caught your attention", "gleamed in the distance", "gleamed in the corner of your eye", "sparkled at the corner of your eye", "twitched at the corner of your eye", "lay on the path", "rested on the floor", "drew your attention", "grabbed your attention", "hung suspended in the air", "levitated to the side", "entered your vision"]
	},
	{
		name: "feel",
		descriptions: ["shuddered", "winced", "felt your hairs raise in fear", "felt comfortable", "felt alright", "felt fine", "felt dreamy", "were confused", "were alert", "were very alert", "felt apprehensive", "feel scared", "feel danger", "yawned", "felt your eyes tear up", "felt danger around the corner", "felt danger in the distance", "felt glorious", "felt bad", "felt exhausted", "started to  feel the exhaustion", "started to feel tired", "feel tired", "feel sleepy", "started to feel sleepy", "began to feel sleepy", "felt safe", "felt safe", "felt secured", "felt like someone is watching over you", "felt like someone is watching you", "felt safe", "felt good", "felt well-rested", "felt at ease", "felt cold", "felt hot", "felt warm", "felt OK", "groaned", "sighed", "feel mighty", "think of happy thoughts", "think of memories of the past", "felt electric", "felt energized"]
	},
	{
		name: "touch",
		descriptions: ["something slimy", "something rough", "a spider", "a docile snake", "a critter", " a puddle", "a wet floor", "a wet wall", "some weird indentations on the ground", "some weird indentations on a wall", "a small alcove on the ground", "a small alcove on the wall", "something slippery", "something hairy", "something sharp", "something coarse", "the air", "the wind"],
		helpers: ["your hands brushed against", "your feet brushed against", "your arms brushed against", "you bumped against", "you stepped on", "you accidentally touched", "your hands hit", "your feet hit", "your arms hit", "your right hand brushed against", "your left hand brushed against", "your left ear brushed against", "your right ear brushed against", "your hair brushed against"]
	}
]


let resources = {
	locations: locations,
	// objects: objects,
	// items: items,
	// monsters: monsters,
	// npcs: npcs,
	actions: actions,
	denizens: denizens,
	// ambient: ambient
}

/**
 * dispatch action
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 */
function dispatch(resources) {
	let actions = resources.actions
	let locations = resources.locations

	let action = actions[Math.floor(Math.random() * actions.length)] // draw random action
	let location = locations[Math.floor(Math.random() * locations.length)] // draw random location

	let phrase = ""

	switch(action.name) {

		case 'movement_between_rooms':
		let action_mbr = action.descriptions[Math.floor(Math.random() * action.descriptions.length)]; // draw random action phrase // example: proceeded
		// let location_mbr = location.descriptions[Math.floor(Math.random() * location.descriptions.length)] + " " + location.name // draw random location plus adjective // ex. brightly lit room
		let location_mbr = location.name // draw random location plus adjective // ex. brightly lit room

		phrase = generateMovementPhrase(action_mbr, location_mbr)
		break

        // case 'wait':
		// let action_w = action.descriptions[Math.floor(Math.random() * action.descriptions.length)]; // draw random action phrase // example: proceeded
		// let location_w = location.descriptions[Math.floor(Math.random() * location.descriptions.length)] + " " + location.name // draw random location plus adjective // ex. brightly lit room
		// phrase = generateWaitPhrase(action_w, location_w)
		// break

		// case 'did_nothing':
		// default:
		// phrase = "you did nothing."
		// break
	}

	return phrase
}

/**
 * [generateMovementPhrase description]
 * @param  {[type]} a action
 * @param  {[type]} l location
 * @return {[type]}   [description]
 */
function generateMovementPhrase(d, a, l) {
	return d + " " + a + " to " + l + "."
}

function generateWaitPhrase(a, l) {
	return "you " + a + " at the " + l + "."
}

function generateAmbient(ambient) {
	let ambient_phrase = ""
	switch (ambient.name) {
		case 'smell':
		ambient_phrase = ambient.descriptions[Math.floor(Math.random() * ambient.descriptions.length)] + " " + ambient.helpers[Math.floor(Math.random() * ambient.helpers.length)]
		break

		case 'sight':
		ambient_phrase = ambient.descriptions[Math.floor(Math.random() * ambient.descriptions.length)] + " " + ambient.helpers[Math.floor(Math.random() * ambient.helpers.length)]
		break

		case 'feel':
		ambient_phrase = "you " + ambient.descriptions[Math.floor(Math.random() * ambient.descriptions.length)]
		break

		case 'touch':
		ambient_phrase = ambient.helpers[Math.floor(Math.random() * ambient.helpers.length)] + " " + ambient.descriptions[Math.floor(Math.random() * ambient.descriptions.length)]
		break
	}

	return ambient_phrase
}

function randomAmbient(phrase, resources) {
	let ambient = resources.ambient[Math.floor(Math.random() * resources.ambient.length)]

	let ambient_array = [
		phrase,

		phrase,

		generateAmbient(ambient) + ". " + phrase,
		
		generateAmbient(resources.ambient[2]) + ".",

		generateAmbient(resources.ambient[3]) + ".",

		generateAmbient(resources.ambient[3]) + ". and yet, " + phrase,

		generateAmbient(ambient) + " while " + phrase,

		phrase + " " + generateAmbient(ambient) + ".",

		phrase + " " + generateAmbient(resources.ambient[3]) + ".",

		generateAmbient(resources.ambient[1]) + ". " + phrase + " " + generateAmbient(resources.ambient[0]) + ".",

		generateAmbient(resources.ambient[1]) + " while " + phrase + " " + generateAmbient(resources.ambient[0]) + " and " + generateAmbient(resources.ambient[2]) + ".",

		generateAmbient(resources.ambient[1]) + " while " + phrase + " " + generateAmbient(resources.ambient[0]) + ". " + generateAmbient(resources.ambient[2]) + ".",

		generateAmbient(resources.ambient[1]) + " as " + phrase + " " + generateAmbient(resources.ambient[0]) + ". " + generateAmbient(resources.ambient[2]) + ".",

		// generateAmbient(resources.ambient[1]) + ". " + phrase + " " + generateAmbient(resources.ambient[0]) + ", but " + generateAmbient(resources.ambient[2]) + ".",

		phrase,
	]
	return ambient_array[Math.floor(Math.random() * ambient_array.length)]
}

exports.generate = function () {
   let phrase = dispatch(resources)

   return goSolo(resources);
   return goDuo(resources);
   return goTrio(resources);
   return goAmbient(resources);
//    return randomAmbient(phrase, resources)
}


/*
# Adventure Bot
A text-based rpg adventure twitter bot
## Resources
* Locations
    * Rooms
    * Floors
* Objects
    * Furniture
* Items
    * Weapons
    * Consumables
* Monsters
    * Common
* NPCs
    * Travelers
**/