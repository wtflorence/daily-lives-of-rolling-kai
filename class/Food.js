const Gachable = require('./Gachable')

class Food extends Gachable {

    constructor() {
        super()

        this.food = [
            {
                name: "Turkey",
                weight: 10
            },
            {
                name: "Sirloin",
                weight: 10
            },
            {
                name: "Chicken",
                weight: 10
            },
            {
                name: "Lamb",
                weight: 10
            },
            {
                name: "Goose",
                weight: 10
            },
            {
                name: "Meatballs",
                weight: 10
            },
            {
                name: "Bird",
                weight: 10
            },
            {
                name: "Meat",
                weight: 10
            },
            {
                name: "Mutton",
                weight: 10
            },
            {
                name: "Radish",
                weight: 10
            },
            {
                name: "Pumpkin",
                weight: 10
            },
            {
                name: "Veggie",
                weight: 10
            },
            {
                name: "Vegetable",
                weight: 10
            },
            {
                name: "Carrot",
                weight: 10
            },
            {
                name: "Rice",
                weight: 1
            },
            {
                name: "Egg",
                weight: 10
            },
            {
                name: "Egg and Rice",
                weight: 10
            },
            {
                name: "Bacon and Rice",
                weight: 10
            },
            {
                name: "Mushroom",
                weight: 10
            },
            {
                name: "Herb",
                weight: 10
            },
            {
                name: "Clam",
                weight: 10
            },
            {
                name: "Seafood",
                weight: 10
            },
            {
                name: "Salmon",
                weight: 10
            },
            {
                name: "Crab",
                weight: 10
            },
            {
                name: "Fish",
                weight: 10
            },
            {
                name: "Poultry",
                weight: 10
            },
            {
                name: "Meaty Rice",
                weight: 10
            },
            {
                name: "Meat and Rice",
                weight: 10
            },
            {
                name: "Fish and Rice",
                weight: 10
            },
            {
                name: "Venison",
                weight: 10
            },
            {
                name: "Rabbit",
                weight: 10
            },
            {
                name: "Deer",
                weight: 10
            },
            {
                name: "Elk",
                weight: 10
            },
            {
                name: "Raindeer",
                weight: 10
            },
            {
                name: "Wolf",
                weight: 10
            },
            {
                name: "Boar",
                weight: 10
            },
            {
                name: "Goat",
                weight: 10
            },
            {
                name: "Peas",
                weight: 10
            },
            {
                name: "Cod",
                weight: 10
            },
            {
                name: "Pheasant",
                weight: 10
            },
            {
                name: "Pelican",
                weight: 10
            },
            {
                name: "Heron",
                weight: 10
            },
            {
                name: "Lobster",
                weight: 10
            },
            {
                name: "Critters",
                weight: 2
            },
            {
                name: "Bone and Blood",
                weight: 2
            },
            {
                name: "Fungus",
                weight: 2
            },
            {
                name: "Eel",
                weight: 10
            },
            {
                name: "Lichen",
                weight: 2
            },
            {
                name: "Crawfish",
                weight: 10
            },
            {
                name: "Crayfish",
                weight: 10
            },
            {
                name: "Toadstool",
                weight: 10
            },
            {
                name: "Toad",
                weight: 10
            },
            {
                name: "Frog",
                weight: 10
            },
            {
                name: "Bullfrog",
                weight: 10
            },
            {
                name: "Beetles",
                weight: 10
            },
            {
                name: "Salamander",
                weight: 10
            },
            {
                name: "Pangolin",
                weight: 1
            },
            {
                name: "Turtle",
                weight: 10
            },
            {
                name: "Snake",
                weight: 10
            },
            {
                name: "Vine",
                weight: 5
            },
            {
                name: "Fruit",
                weight: 10
            },
            {
                name: "Cheese",
                weight: 10
            },
            {
                name: "Bacon",
                weight: 10
            },
            {
                name: "Fish Fillet",
                weight: 10
            },
            {
                name: "Chicken Fillet",
                weight: 10
            },
            {
                name: "Horse",
                weight: 10
            },
        ]

        this.monster = [
            {
                name: "Wolf",
                weight: 10
            },
            {
                name: "Basilisk",
                weight: 10
            },
            {
                name: "Minotaur",
                weight: 10
            },
            {
                name: "Cockatrice",
                weight: 10
            },
            {
                name: "Gryphon",
                weight: 10
            },
            {
                name: "Griffin",
                weight: 10
            },
            {
                name: "Griffon",
                weight: 10
            },
            {
                name: "Sahagin",
                weight: 10
            },
            {
                name: "Adamantoise",
                weight: 10
            },
            {
                name: "Blob",
                weight: 10
            },
            {
                name: "Golem",
                weight: 10
            },
            {
                name: "Goblin",
                weight: 10
            },
            {
                name: "Behemoth",
                weight: 10
            },
            {
                name: "Manticore",
                weight: 10
            },
            {
                name: "Axie",
                weight: 10
            },
            {
                name: "Pega",
                weight: 10
            },
            {
                name: "Flan",
                weight: 10
            },
            {
                name: "Slime",
                weight: 10
            },
            {
                name: "Blob",
                weight: 10
            },
            {
                name: "Worm",
                weight: 10
            },
            {
                name: "Dragon",
                weight: 10
            },
            {
                name: "Hydra",
                weight: 10
            },
            {
                name: "Lion",
                weight: 10
            },
            {
                name: "Antlion",
                weight: 10
            },
            {
                name: "Armadillo",
                weight: 10
            },
            {
                name: "Gargoyle",
                weight: 10
            },
            {
                name: "Garuda",
                weight: 10
            },
            {
                name: "Quetzal",
                weight: 10
            },
            {
                name: "Ghast",
                weight: 10
            },
            {
                name: "Racoon",
                weight: 10
            },
            {
                name: "Bat",
                weight: 10
            },
            {
                name: "Turtle",
                weight: 10
            },
            {
                name: "Tortoise",
                weight: 10
            },
            {
                name: "Ghost",
                weight: 2
            },
            {
                name: "Gremlin",
                weight: 10
            },
            {
                name: "Bugbear",
                weight: 10
            },
            {
                name: "Bug Axie",
                weight: 10
            },
            {
                name: "Plant Axie",
                weight: 10
            },
            {
                name: "Beast Axie",
                weight: 10
            },
            {
                name: "Dawn Axie",
                weight: 10
            },
            {
                name: "Dusk Axie",
                weight: 10
            },
            {
                name: "Aquatic Axie",
                weight: 10
            },
            {
                name: "Mech Axie",
                weight: 10
            },
            {
                name: "Bird Axie",
                weight: 10
            },
            {
                name: "Reptile Axie",
                weight: 10
            },
            {
                name: "Reptile",
                weight: 10
            },
            {
                name: "Reptilian",
                weight: 10
            },
            {
                name: "Mystic Axie",
                weight: 1
            },
            {
                name: "Founding Pega",
                weight: 1
            },
            {
                name: "Pacer Pega",
                weight: 8
            },
            {
                name: "Rare Pega",
                weight: 6
            },
            {
                name: "Epic Pega",
                weight: 4
            },
            {
                name: "Legendary Pega",
                weight: 2
            },
            {
                name: "Scorpion",
                weight: 10
            },
            {
                name: "Catoblepas",
                weight: 10
            },
            {
                name: "Chimera",
                weight: 10
            },
            {
                name: "Crawler",
                weight: 10
            },
            {
                name: "Skeleton",
                weight: 10
            },
            {
                name: "Giant",
                weight: 10
            },
            {
                name: "Demon",
                weight: 10
            },
            {
                name: "Jormungand",
                weight: 10
            },
            {
                name: "Dinosaur",
                weight: 1
            },
            {
                name: "Mantis",
                weight: 10
            },
            {
                name: "Fish",
                weight: 10
            },
            {
                name: "Bee",
                weight: 10
            },
            {
                name: "Lamia",
                weight: 10
            },
            {
                name: "Mermaid",
                weight: 10
            },
            {
                name: "Kugan",
                weight: 10
            },
            {
                name: "Treant",
                weight: 10
            },
            {
                name: "Frog",
                weight: 10
            },
            {
                name: "Toad",
                weight: 10
            },
            {
                name: "Gigas",
                weight: 10
            },
            {
                name: "Djinn",
                weight: 10
            },
            {
                name: "Ape",
                weight: 10
            },
            {
                name: "Monkey",
                weight: 10
            },
            {
                name: "Unicorn",
                weight: 10
            },
            {
                name: "Lizard",
                weight: 10
            },
            {
                name: "Lizardman",
                weight: 10
            },
            {
                name: "Zu",
                weight: 10
            },
            {
                name: "Roc",
                weight: 10
            },
            {
                name: "Rhino",
                weight: 10
            },
            {
                name: "Ox",
                weight: 10
            },
            {
                name: "Chicken",
                weight: 10
            },
            {
                name: "Pig",
                weight: 10
            },
            {
                name: "Boar",
                weight: 10
            },
            {
                name: "Canary",
                weight: 10
            },
            {
                name: "Goose",
                weight: 10
            },
            {
                name: "Horse",
                weight: 10
            },
            {
                name: "Hoz",
                weight: 5
            },
            {
                name: "Kiln",
                weight: 5
            },
            {
                name: "Campona",
                weight: 5
            },
            {
                name: "Zan",
                weight: 5
            },
            {
                name: "Penguin",
                weight: 10
            },
            {
                name: "Magpie",
                weight: 10
            },
            {
                name: "Caribou",
                weight: 10
            },
            {
                name: "Gibbon",
                weight: 10
            },
            {
                name: "Deer",
                weight: 10
            },
            {
                name: "Elk",
                weight: 10
            },
            {
                name: "Hare",
                weight: 10
            },
            {
                name: "Rabbit",
                weight: 10
            },
            {
                name: "Squirrel",
                weight: 10
            },
            {
                name: "Bear",
                weight: 10
            },
            {
                name: "Seal",
                weight: 10
            },
            {
                name: "Mouse",
                weight: 10
            },
            {
                name: "Bull",
                weight: 10
            },
            {
                name: "Fish",
                weight: 10
            },
            {
                name: "Insect",
                weight: 10
            },
            {
                name: "Goat",
                weight: 10
            },
            {
                name: "Snake",
                weight: 10
            },
            {
                name: "Boa",
                weight: 10
            },
            {
                name: "Turkey",
                weight: 10
            },
            {
                name: "Crab",
                weight: 10
            },
            {
                name: "Lobster",
                weight: 10
            },
            {
                name: "Shark",
                weight: 10
            },
            {
                name: "Moose",
                weight: 10
            },
            {
                name: "Big yak Axie",
                weight: 5
            },
            {
                name: "Sumo Axie",
                weight: 5
            },
            {
                name: "Crocodile",
                weight: 10
            },
            {
                name: "Sheep",
                weight: 10
            },
            {
                name: "Spider",
                weight: 10
            },
            {
                name: "Rat",
                weight: 10
            },
            {
                name: "Gnoll",
                weight: 10
            },
            {
                name: "Ant",
                weight: 10
            },
            {
                name: "Harpy",
                weight: 10
            },
            {
                name: "Lich",
                weight: 2
            },
            {
                name: "Angel",
                weight: 10
            },
            {
                name: "Barghest",
                weight: 10
            },
            {
                name: "Demogorgon",
                weight: 10
            },
            {
                name: "Beholder",
                weight: 10
            },
            {
                name: "Wyvern",
                weight: 10
            },
            {
                name: "Phoenix",
                weight: 2
            },
            {
                name: "Kraken",
                weight: 10
            },
            {
                name: "Imp",
                weight: 10
            },
            {
                name: "Bird",
                weight: 10
            },
            {
                name: "Lamb",
                weight: 10
            },
            {
                name: "Owl",
                weight: 10
            },
            {
                name: "Piranha",
                weight: 10
            },
            {
                name: "Buffalo",
                weight: 10
            },
            {
                name: "Jackal",
                weight: 10
            },
            {
                name: "Meat",
                weight: 10
            },
            {
                name: "Monster",
                weight: 10
            },
            {
                name: "Pike",
                weight: 10
            },
            {
                name: "Salmon",
                weight: 10
            },
            {
                name: "Living Potato",
                weight: 10
            },
            {
                name: "Salmon",
                weight: 10
            },
            {
                name: "Pineapple",
                weight: 10
            },
            {
                name: "Bacon",
                weight: 10
            },
            {
                name: "Beef",
                weight: 10
            },
            {
                name: "Bean",
                weight: 10
            },
            {
                name: "Pumpkin",
                weight: 10
            },
            {
                name: "Corn",
                weight: 10
            },
            {
                name: "Fowl",
                weight: 10
            },
            {
                name: "Meatloaf",
                weight: 10
            },
            {
                name: "Mimic",
                weight: 10
            },
            {
                name: "Gazelle",
                weight: 10
            },
            {
                name: "Dryad",
                weight: 10
            },
            {
                name: "Nymph",
                weight: 10
            },
            {
                name: "Fairy",
                weight: 10
            },
            {
                name: "Will-o-wisp",
                weight: 10
            },
            {
                name: "Jellyfish",
                weight: 10
            },
            {
                name: "Donkey",
                weight: 10
            },
            {
                name: "Tiger",
                weight: 10
            },
            {
                name: "Tarantula",
                weight: 2
            },
            {
                name: "Walrus",
                weight: 10
            },
            {
                name: "Barracuda",
                weight: 10
            },
            {
                name: "Bison",
                weight: 10
            },
            {
                name: "Falcon",
                weight: 10
            },
            {
                name: "Eagle",
                weight: 10
            },
            {
                name: "Snail",
                weight: 10
            },
            {
                name: "Clam",
                weight: 10
            },
            {
                name: "Baby Dragon",
                weight: 10
            },
            {
                name: "Panda",
                weight: 10
            },
        ]

        this.foodPrefix = [
            {
                name: 'Salted',
                weight: 10
            },
            {
                name: 'Peppered',
                weight: 10
            },
            {
                name: 'Creamy',
                weight: 10
            },
            {
                name: 'Fragrant',
                weight: 10
            },
            {
                name: 'Delicious',
                weight: 10
            },
            {
                name: 'Mouth-watering',
                weight: 10
            },
            {
                name: 'Copious',
                weight: 10
            },
            {
                name: 'Generous',
                weight: 10
            },
            {
                name: 'Glazed',
                weight: 10
            },
            {
                name: 'Spicy',
                weight: 10
            },
            {
                name: 'Spicy Peppered',
                weight: 10
            },
            {
                name: 'Sweet',
                weight: 10
            },
            {
                name: 'Sweet and Sour',
                weight: 10
            },
            {
                name: 'Honey',
                weight: 10
            },
            {
                name: 'Honey Buttered',
                weight: 10
            },
            {
                name: 'Buttered',
                weight: 10
            },
            {
                name: 'Dubious',
                weight: 10
            },
            {
                name: 'Crispy',
                weight: 10
            },
            {
                name: 'Hot',
                weight: 10
            },
            {
                name: 'Juicy',
                weight: 10
            },
            {
                name: 'Luscious',
                weight: 10
            },
            {
                name: 'Soft',
                weight: 10
            },
            {
                name: 'Velvety',
                weight: 10
            },
            {
                name: 'Milky',
                weight: 10
            },
            {
                name: 'Oily',
                weight: 1
            },
            {
                name: 'Greasy',
                weight: 1
            },
            {
                name: 'Smooth',
                weight: 10
            },
            {
                name: 'Aromatic',
                weight: 10
            },
            {
                name: 'Savory',
                weight: 10
            },
            {
                name: 'Delightful',
                weight: 10
            },
            {
                name: 'Sweet-Scented',
                weight: 10
            },
            {
                name: 'Sweet-Smelling',
                weight: 10
            },
        ]

        this.liquidIngredients = [

        ]

        this.cookType = [
            {
                name: "Gourmet",
                weight: 10
            },
            {
                name: "Salt-Grilled",
                weight: 10
            },
            {
                name: "Simmered",
                weight: 10
            },
            {
                name: "Deep-Fried",
                weight: 10
            },
            {
                name: "Fried",
                weight: 10
            },
            {
                name: "Steamed",
                weight: 10
            },
            {
                name: "Pressure-Fried",
                weight: 10
            },
            {
                name: "Roasted",
                weight: 10
            },
            {
                name: "Dry-Roasted",
                weight: 10
            },
            {
                name: "Barbequed",
                weight: 10
            },
            {
                name: "Fire-Roasted",
                weight: 10
            },
            {
                name: "Broasted",
                weight: 10
            },
            {
                name: "Sautéed",
                weight: 10
            },
            {
                name: "Stewed",
                weight: 10
            },
            {
                name: "Pressure-Cooked",
                weight: 10
            },
            {
                name: "Air-Fried",
                weight: 10
            },
            {
                name: "Air-Roasted",
                weight: 10
            },
            {
                name: "Air-Cooked",
                weight: 10
            },
            {
                name: "Braised",
                weight: 10
            },
            {
                name: "Marinated",
                weight: 10
            },
            {
                name: "Baked",
                weight: 10
            },
            {
                name: "Stuffed",
                weight: 10
            },
            {
                name: "Breaded",
                weight: 10
            },
            {
                name: "Pickled",
                weight: 10
            },
            {
                name: "Pan-Fried",
                weight: 10
            },
            {
                name: "Grilled",
                weight: 10
            },
            {
                name: "Poached",
                weight: 10
            },
            {
                name: "Seared",
                weight: 10
            },
            {
                name: "Raw",
                weight: 10
            },
            {
                name: "Cooked",
                weight: 10
            },
            {
                name: "Tenderized",
                weight: 10
            },
            {
                name: "Cured",
                weight: 10
            },
            {
                name: "Brined",
                weight: 10
            },
            {
                name: "Salted",
                weight: 10
            },
            {
                name: "Gentle-Fried",
                weight: 10
            },
            {
                name: "Dried",
                weight: 10
            },
            {
                name: "Stir-Fried",
                weight: 10
            },
            {
                name: "Shallow-Fried",
                weight: 10
            },
            {
                name: "Fire-Grilled",
                weight: 10
            },
            {
                name: "Smoked",
                weight: 10
            },
            {
                name: "Basted",
                weight: 10
            },
            {
                name: "Engine-Cooked",
                weight: 10
            },
            {
                name: "Blanched",
                weight: 10
            },
            {
                name: "Thermal-Cooked",
                weight: 10
            },
            {
                name: "Magic-Fried",
                weight: 10
            },
            {
                name: "Magic-Grilled",
                weight: 10
            },
            {
                name: "Arcane-Grilled",
                weight: 10
            },
            {
                name: "Arcane-Cooked",
                weight: 10
            },
            {
                name: "Magic-Steamed",
                weight: 10
            },
            {
                name: "Arcane-Steamed",
                weight: 10
            },
            {
                name: "Oven-Grilled",
                weight: 10
            },
            {
                name: "Oven-Baked",
                weight: 10
            },
            {
                name: "Broiled",
                weight: 10
            },
            {
                name: "Battered",
                weight: 10
            },
            {
                name: "Thunder-Fried",
                weight: 10
            },
            {
                name: "Almost-Burnt",
                weight: 10
            },
            {
                name: "Burnt",
                weight: 1
            },
            {
                name: "Heated",
                weight: 10
            },
            {
                name: "Campfire-Cooked",
                weight: 10
            },
            {
                name: "Magic-Cooked",
                weight: 10
            },
            {
                name: "Chilled",
                weight: 10
            },
            {
                name: "Frozen",
                weight: 1
            },
            {
                name: "Caramelised",
                weight: 10
            },
            {
                name: "Croquetted",
                weight: 10
            },
            {
                name: "Rolled",
                weight: 10
            },
            {
                name: "Wrapped",
                weight: 10
            },
            {
                name: "Degreased",
                weight: 10
            },
            {
                name: "Fermented",
                weight: 10
            },
            {
                name: "Canned",
                weight: 3
            },
            {
                name: "Glazed",
                weight: 10
            },
            {
                name: "Seasoned",
                weight: 10
            },
            {
                name: "Toasted",
                weight: 10
            },
            {
                name: "Magic-Roasted",
                weight: 10
            },
            {
                name: "Arcane-Roasted",
                weight: 10
            },
        ]

        this.modifier = [
            {
                name: "Elysian",
                weight: 4
            },
            {
                name: "Tainted",
                weight: 2
            },
            {
                name: "Gargantuan",
                weight: 2
            },
            {
                name: "Epic",
                weight: 2
            },
            {
                name: "Terror",
                weight: 2
            },
            {
                name: "Titan",
                weight: 3
            },
            {
                name: "Abyss",
                weight: 1
            },
            {
                name: "Tree",
                weight: 5
            },
            {
                name: "Nether",
                weight: 2
            },
            {
                name: "Killer",
                weight: 2
            },
            {
                name: "Enchanted",
                weight: 3
            },
            {
                name: "Mystical",
                weight: 3
            },
            {
                name: "Cloud",
                weight: 4
            },
            {
                name: "Rainbow",
                weight: 5
            },
            {
                name: "Volcanic",
                weight: 10
            },
            {
                name: "Winter",
                weight: 10
            },
            {
                name: "Arcane",
                weight: 3
            },
            {
                name: "Desert",
                weight: 10
            },
            {
                name: "Great",
                weight: 10
            },
            {
                name: "Mountain",
                weight: 10
            },
            {
                name: "Sky",
                weight: 10
            },
            {
                name: "Abyssal",
                weight: 1
            },
            {
                name: "Hellish",
                weight: 1
            },
            {
                name: "Phantom",
                weight: 4
            },
            {
                name: "Molten",
                weight: 10
            },
            {
                name: "Rain",
                weight: 10
            },
            {
                name: "Radiant",
                weight: 10
            },
            {
                name: "Moss",
                weight: 10
            },
            {
                name: "Iron",
                weight: 10
            },
            {
                name: "Metallic",
                weight: 10
            },
            {
                name: "River",
                weight: 10
            },
            {
                name: "Marsh",
                weight: 10
            },
            {
                name: "Arctic",
                weight: 8
            },
            {
                name: "Forest",
                weight: 10
            },
            {
                name: "Savannah",
                weight: 10
            },
            {
                name: "Lesser",
                weight: 10
            },
            {
                name: "Greater",
                weight: 7
            },
            {
                name: "God",
                weight: 1
            },
            {
                name: "Pygmy",
                weight: 10
            },
            {
                name: "Gypsy",
                weight: 10
            },
            {
                name: "Silk",
                weight: 10
            },
            {
                name: "Moon",
                weight: 10
            },
            {
                name: "Sun",
                weight: 10
            },
            {
                name: "Ethereal",
                weight: 5
            },
            {
                name: "Crescent",
                weight: 5
            },
            {
                name: "Masked",
                weight: 4
            },
            {
                name: "Solar",
                weight: 10
            },
            {
                name: "Lunar",
                weight: 10
            },
            {
                name: "Grim",
                weight: 3
            },
            {
                name: "Southern",
                weight: 10
            },
            {
                name: "Northern",
                weight: 10
            },
            {
                name: "Western",
                weight: 10
            },
            {
                name: "Eastern",
                weight: 10
            },
            {
                name: "Shadow",
                weight: 10
            },
            {
                name: "Spirit",
                weight: 10
            },
            {
                name: "Snow",
                weight: 10
            },
            {
                name: "Ember",
                weight: 10
            },
            {
                name: "Hell",
                weight: 1
            },
            {
                name: "Primal",
                weight: 8
            },
            {
                name: "False",
                weight: 8
            },
            {
                name: "True",
                weight: 9
            },
            {
                name: "Ice",
                weight: 10
            },
            {
                name: "Void",
                weight: 1
            },
            {
                name: "Planar",
                weight: 10
            },
            {
                name: "Star",
                weight: 3
            },
            {
                name: "Pulse",
                weight: 4
            },
            {
                name: "Dark",
                weight: 10
            },
            {
                name: "Light",
                weight: 10
            },
            {
                name: "Fog",
                weight: 10
            },
            {
                name: "Cave",
                weight: 10
            },
            {
                name: "Underground",
                weight: 10
            },
            {
                name: "Interplanetary",
                weight: 1
            },
            {
                name: "Galactic",
                weight: 1
            },
            {
                name: "Galaxy",
                weight: 3
            },
            {
                name: "Golden",
                weight: 10
            },
            {
                name: "Silver",
                weight: 10
            },
            {
                name: "Phase",
                weight: 5
            },
            {
                name: "Night",
                weight: 10
            },
            {
                name: "Day",
                weight: 10
            },
            {
                name: "Canyon",
                weight: 10
            },
            {
                name: "Death",
                weight: 3
            },
            {
                name: "Crowned",
                weight: 10
            },
            {
                name: "Stone",
                weight: 8
            },
            {
                name: "Saber",
                weight: 4
            },
            {
                name: "Shade",
                weight: 4
            },
            {
                name: "Aether",
                weight: 3
            },
            {
                name: "Astral",
                weight: 1
            },
            {
                name: "Ghoulish",
                weight: 9
            },
            {
                name: "Wild",
                weight: 10
            },
            {
                name: "Demonic",
                weight: 2
            },
            {
                name: "Infernal",
                weight: 2
            },
            {
                name: "Draconic",
                weight: 4
            },
            {
                name: "Dwarf",
                weight: 8
            },
            {
                name: "Elven",
                weight: 9
            },
            {
                name: "Dream",
                weight: 10
            },
            {
                name: "Storm",
                weight: 6
            },
            {
                name: "Giant",
                weight: 10
            },
            {
                name: "Tiny",
                weight: 10
            },
            {
                name: "Rare",
                weight: 10
            },
            {
                name: "Ground",
                weight: 10
            },
            {
                name: "Zombie",
                weight: 5
            },
            {
                name: "Heavenly",
                weight: 2
            },
            {
                name: "Chaos",
                weight: 1
            },
            {
                name: "Swamp",
                weight: 10
            },
            {
                name: "Boulder",
                weight: 10
            },
            {
                name: "Sinister",
                weight: 10
            },
            {
                name: "Thorny",
                weight: 10
            },
            {
                name: "Evil",
                weight: 10
            },
            {
                name: "Imperial",
                weight: 10
            },
            {
                name: "Royal",
                weight: 10
            },
            {
                name: "Mythical",
                weight: 2
            },
            {
                name: "Legendary",
                weight: 1
            },
            {
                name: "Demon",
                weight: 4
            },
            {
                name: "Sewer",
                weight: 10
            },
            {
                name: "Farm",
                weight: 10
            },
            {
                name: "Tame",
                weight: 10
            },
            {
                name: "Two-headed",
                weight: 3
            },
            {
                name: "Grassland",
                weight: 10
            },
            {
                name: "Plateau",
                weight: 10
            },
            {
                name: "White",
                weight: 10
            },
            {
                name: "Red",
                weight: 10
            },
            {
                name: "Dark",
                weight: 10
            },
            {
                name: "Black",
                weight: 10
            },
            {
                name: "Green",
                weight: 10
            },
            {
                name: "Blue",
                weight: 10
            },
            {
                name: "Grey",
                weight: 10
            },
            {
                name: "Twin-headed",
                weight: 3
            },
            {
                name: "Dimensional",
                weight: 4
            },
            {
                name: "Gigantic",
                weight: 1
            },
            {
                name: "Lone",
                weight: 10
            },
            {
                name: "Divine",
                weight: 1
            },
            {
                name: "Holy",
                weight: 1
            },
            {
                name: "Unholy",
                weight: 1
            },
            {
                name: "Sacred",
                weight: 1
            },
            {
                name: "Common",
                weight: 10
            },
            {
                name: "Metaverse",
                weight: 10
            },
            {
                name: "Crypto",
                weight: 10
            },
            {
                name: "Garden",
                weight: 10
            },
            {
                name: "Chubby",
                weight: 10
            },
            {
                name: "Dire",
                weight: 10
            },
            {
                name: "Fat",
                weight: 10
            },
            {
                name: "Mimic",
                weight: 1
            },
            {
                name: "Ancient",
                weight: 1
            },
            {
                name: "Guardian",
                weight: 2
            },
            {
                name: "Demi",
                weight: 4
            },
            {
                name: "Sanguine",
                weight: 6
            },
            {
                name: "Undead",
                weight: 8
            },
            {
                name: "Mystic",
                weight: 5
            },
            {
                name: "Original",
                weight: 2
            },
            {
                name: "Devil",
                weight: 4
            },
            {
                name: "Woodland",
                weight: 10
            },
            {
                name: "Nature",
                weight: 10
            },
            {
                name: "Magical",
                weight: 10
            },
            {
                name: "Atrocious",
                weight: 5
            },
            {
                name: "Spooky",
                weight: 10
            },
            {
                name: "Foreign",
                weight: 10
            },
            {
                name: "Baby",
                weight: 5
            },
            {
                name: "Carnivorous",
                weight: 6
            },
            {
                name: "Disaster",
                weight: 3
            },
            {
                name: "Crown",
                weight: 5
            },
            {
                name: "Amphibious",
                weight: 5
            },
            {
                name: "Fluffy",
                weight: 10
            },
            {
                name: "Nightmare",
                weight: 6
            },
            {
                name: "Regular",
                weight: 4
            },
            {
                name: "Ordinary",
                weight: 4
            },
            {
                name: "Wicked",
                weight: 5
            },
            {
                name: "Cursed",
                weight: 5
            },
            {
                name: "Dreamy",
                weight: 3
            },
            {
                name: "Arch",
                weight: 2
            },
            {
                name: "Horned",
                weight: 6
            },
            {
                name: "Majestic",
                weight: 4
            },
            {
                name: "Prime",
                weight: 4
            },
            {
                name: "Cavern",
                weight: 10
            },
            {
                name: "Elemental",
                weight: 10
            },
            {
                name: "Psychic",
                weight: 6
            },
            {
                name: "Thunder",
                weight: 4
            },
            {
                name: "Yokai",
                weight: 5
            },
            {
                name: "Vampiric",
                weight: 6
            },
            {
                name: "Vampire",
                weight: 3
            },
            {
                name: "Subterranean",
                weight: 10
            },
            {
                name: "Mediterannean",
                weight: 8
            },
            {
                name: "Tropical",
                weight: 10
            },
            {
                name: "Angelic",
                weight: 4
            },
            {
                name: "Angel",
                weight: 2
            },
            {
                name: "Tubby",
                weight: 10
            },
            {
                name: "Man-eater",
                weight: 3
            },
            {
                name: "Edible",
                weight: 5
            },
            {
                name: "Eldritch",
                weight: 4
            },
            {
                name: "Queen",
                weight: 5
            },
            {
                name: "King",
                weight: 5
            },
            {
                name: "Guard",
                weight: 8
            },
            {
                name: "Exotic",
                weight: 7
            },
            {
                name: "Armoured",
                weight: 5
            },
        ]

        this.foodSuffix = [
            {
                name: 'Macaroni',
                weight: 10
            },
            {
                name: 'Bowl',
                weight: 10
            },
            {
                name: "Ratatouille",
                weight: 10
            },
            {
                name: "Mueniere",
                weight: 10
            },
            {
                name: "Diet",
                weight: 10
            },
            {
                name: "Chowder",
                weight: 10
            },
            {
                name: "Omelet",
                weight: 10
            },
            {
                name: "Gazpacho",
                weight: 10
            },
            {
                name: "Chops",
                weight: 10
            },
            {
                name: "Steak",
                weight: 10
            },
            {
                name: "Porridge",
                weight: 10
            },
            {
                name: "Soup",
                weight: 10
            },
            {
                name: "Curry",
                weight: 10
            },
            {
                name: "Bread",
                weight: 5
            },
            {
                name: "Cake",
                weight: 2
            },
            {
                name: "Purée",
                weight: 2
            },
            {
                name: "Buns",
                weight: 5
            },
            {
                name: "Milk",
                weight: 2
            },
            {
                name: "Bonbons",
                weight: 2
            },
            {
                name: "Crispies",
                weight: 2
            },
            {
                name: "Cookies",
                weight: 2
            },
            {
                name: "Mousse",
                weight: 2
            },
            {
                name: "Strudel",
                weight: 3
            },
            {
                name: "Pretzel",
                weight: 3
            },
            {
                name: "Toast",
                weight: 5
            },
            {
                name: "Pie",
                weight: 10
            },
            {
                name: "Dinner",
                weight: 10
            },
            {
                name: "Sinigang",
                weight: 10
            },
            {
                name: "Kaldereta",
                weight: 10
            },
            {
                name: "Spaghetti",
                weight: 8
            },
            {
                name: "Adobo",
                weight: 10
            },
            {
                name: "Escabeche",
                weight: 10
            },
            {
                name: "Sarsiado",
                weight: 10
            },
            {
                name: "Afritada",
                weight: 10
            },
            {
                name: "Barbecue",
                weight: 10
            },
            {
                name: "Pastel",
                weight: 10
            },
            {
                name: "Inasal",
                weight: 10
            },
            {
                name: "Embutido",
                weight: 10
            },
            {
                name: "Hamonado",
                weight: 10
            },
            {
                name: "Kinilaw",
                weight: 10
            },
            {
                name: "Lumpia",
                weight: 10
            },
            {
                name: "Pinakbet",
                weight: 10
            },
            {
                name: "Sisig",
                weight: 10
            },
            {
                name: "Torta",
                weight: 10
            },
            {
                name: "Bulalo",
                weight: 10
            },
            {
                name: "Dinakdakan",
                weight: 10
            },
            {
                name: "Dinuguan",
                weight: 5
            },
            {
                name: "Ginataan",
                weight: 10
            },
            {
                name: "Menudo",
                weight: 10
            },
            {
                name: "Mechado",
                weight: 10
            },
            {
                name: "Pochero",
                weight: 10
            },
            {
                name: "Tinola",
                weight: 10
            },
            {
                name: "Paella",
                weight: 10
            },
            {
                name: "Longganisa",
                weight: 10
            },
            {
                name: "Chicharon",
                weight: 10
            },
            {
                name: "Siomai",
                weight: 10
            },
            {
                name: "Siopao",
                weight: 10
            },
            {
                name: "Empanada",
                weight: 10
            },
            {
                name: "Stew",
                weight: 10
            },
            {
                name: "Broil",
                weight: 10
            },
            {
                name: "Waffles",
                weight: 5
            },
            {
                name: "Pizza",
                weight: 10
            },
            {
                name: "Hamburger",
                weight: 10
            },
            {
                name: "Burger",
                weight: 10
            },
            {
                name: "Gnocchi",
                weight: 10
            },
            {
                name: "Risotto",
                weight: 10
            },
            {
                name: "Ravioli",
                weight: 10
            },
            {
                name: "Lasagne",
                weight: 10
            },
            {
                name: "Carbonara",
                weight: 10
            },
            {
                name: "Agnolotti",
                weight: 5
            },
            {
                name: "Muffuletta",
                weight: 5
            },
            {
                name: "Muffins",
                weight: 5
            },
            {
                name: "Sushi",
                weight: 10
            },
            {
                name: "Karaage",
                weight: 10
            },
            {
                name: "Tonkatsu",
                weight: 10
            },
            {
                name: "Onigiri",
                weight: 10
            },
            {
                name: "Katsudon",
                weight: 10
            },
            {
                name: "Ramen",
                weight: 5
            },
            {
                name: "Oyakodon",
                weight: 10
            },
            {
                name: "Unadon",
                weight: 10
            },
            {
                name: "Noodles",
                weight: 5
            },
            {
                name: "Maki",
                weight: 10
            },
            {
                name: "Yaki Soba",
                weight: 5
            },
            {
                name: "Yaki Udon",
                weight: 10
            },
            {
                name: "Agemono",
                weight: 10
            },
            {
                name: "Korokke",
                weight: 10
            },
            {
                name: "Croquette",
                weight: 10
            },
            {
                name: "Tempura",
                weight: 10
            },
            {
                name: "Gyoza",
                weight: 10
            },
            {
                name: "Kushiyaki",
                weight: 10
            },
            {
                name: "Motoyaki",
                weight: 10
            },
            {
                name: "Takoyaki",
                weight: 5
            },
            {
                name: "Okonomiyaki",
                weight: 10
            },
            {
                name: "Teriyaki",
                weight: 10
            },
            {
                name: "Yakiniku",
                weight: 10
            },
            {
                name: "Yakitori",
                weight: 10
            },
            {
                name: "Shabu-shabu",
                weight: 10
            },
            {
                name: "Sukiyaki",
                weight: 10
            },
            {
                name: "Bento",
                weight: 10
            },
            {
                name: "Ice-cream",
                weight: 2
            },
            {
                name: "Brownies",
                weight: 2
            },
            {
                name: "Cheesecake",
                weight: 2
            },
            {
                name: "Dumpling",
                weight: 10
            },
            {
                name: "Creme brulee",
                weight: 2
            },
            {
                name: "Pudding",
                weight: 2
            },
            {
                name: "Cupcake",
                weight: 2
            },
            {
                name: "on stick",
                weight: 10
            },
            {
                name: "Salad",
                weight: 10
            },
            {
                name: "Roll",
                weight: 2
            },
            {
                name: "Tart",
                weight: 2
            },
            {
                name: "Loaf",
                weight: 5
            },
            {
                name: "Sandwich",
                weight: 10
            },
            {
                name: "Macaroons",
                weight: 2
            },
            {
                name: "Surprise",
                weight: 6
            },
            {
                name: "Fudge",
                weight: 2
            },
            {
                name: "Sundae",
                weight: 2
            },
            {
                name: "Wafer",
                weight: 2
            },
            {
                name: "Toffee",
                weight: 2
            },
            {
                name: "Lollies",
                weight: 2
            },
            {
                name: "Jelly",
                weight: 2
            },
            {
                name: "Sorbet",
                weight: 2
            },
            {
                name: "Delight",
                weight: 2
            },
            {
                name: "Fruitcake",
                weight: 2
            },
            {
                name: "Doughnuts",
                weight: 10
            },
            {
                name: "Pastry",
                weight: 2
            },
            {
                name: "Pancakes",
                weight: 5
            },

            {
                name: "Pankeyks",
                weight: 5
            },
            {
                name: "Special",
                weight: 6
            },
            {
                name: "House Special",
                weight: 6
            },
            {
                name: "Fruit Salad",
                weight: 6
            },
            {
                name: "",
                weight: 10
            },
        ]

        this.eat = [
            {
                name: "ate",
                weight: 10
            },
            {
                name: "wolfed down",
                weight: 10
            },
            {
                name: "globbered",
                weight: 10
            },
            {
                name: "gobbled up",
                weight: 10
            },
            {
                name: "attacked",
                weight: 10
            },
            {
                name: "bit down",
                weight: 10
            },
            {
                name: "chewed",
                weight: 10
            },
            {
                name: "chewed down",
                weight: 10
            },
            {
                name: "devoured",
                weight: 10
            },
            {
                name: "ingested",
                weight: 10
            },
            {
                name: "nibbled",
                weight: 10
            },
            {
                name: "swallowed",
                weight: 10
            },
            {
                name: "munched",
                weight: 10
            },
            {
                name: "wolfed",
                weight: 10
            },
            {
                name: "chowed",
                weight: 10
            },
            {
                name: "chowed down",
                weight: 10
            },
            {
                name: "gobbled",
                weight: 10
            },
            {
                name: "partook",
                weight: 10
            },
        ]

        this.drinks = [
            {
                name: "Milk",
                weight: 10
            },
            {
                name: "",
                weight: 10
            },
        ]

        this.drink = []

        this.garnish = []

        this.foodType = [
            {
                name: "breakfast",
                weight: 10
            },
            {
                name: "lunch",
                weight: 10
            },
            {
                name: "dinner",
                weight: 10
            },
            {
                name: "snack",
                weight: 10
            },
            {
                name: "midnight snack",
                weight: 10
            },
            {
                name: "brunch",
                weight: 10
            },
        ]
    }

    decideFood() {
        return this.gachaDrawName(this.food)
    }

    decideCookType() {
        return this.gachaDrawName(this.cookType)
    }

    decideMonster() {
        return this.gachaDrawName(this.monster)
    }

    decideModifier() {
        return this.gachaDrawName(this.modifier)
    }

    decideFoodSuffix() {
        return this.gachaDrawName(this.foodSuffix)
    }

    decideFoodPrefix() {
        return this.gachaDrawName(this.foodPrefix)
    }

    decideFoodType() {
        return this.gachaDrawName(this.foodType)
    }

    decideEat() {
        return this.gachaDrawName(this.eat)
    }

    decideFoodStuff() {

        let m1, m2
        [m1, m2] = this.gachaDrawTwo(this.modifier)
        let x1, x2
        [x1, x2] = this.gachaDrawTwo(this.monster)
        let s1, s2
        [s1, s2] = this.gachaDrawTwo(this.foodSuffix)

        const food = this.decideFood()
        const prefix = this.decideFoodPrefix()
        const cookType = this.decideCookType()

        const foodStuff = [
            {
                name: `${cookType} ${m1.name} ${x1.name}`,
                weight: 10
            },
            {
                name: `${cookType} ${m1.name} ${m2.name} ${x1.name}`,
                weight: 10
            },
            {
                name: `${cookType} ${prefix} ${m1.name} ${m2.name} ${x1.name} ${s1.name}`,
                weight: 1
            },
            {
                name: `${cookType} ${m1.name} ${m2.name} ${x1.name} ${s1.name}`,
                weight: 3
            },
            {
                name: `${cookType} ${m2.name} ${x1.name} ${s1.name}`,
                weight: 6
            },
            {
                name: `${cookType} ${prefix} ${m2.name} ${x1.name} ${s1.name}`,
                weight: 4
            },
            {
                name: `${prefix} ${food} ${s1.name}`,
                weight: 10
            },
            {
                name: `${cookType} ${prefix} ${food}`,
                weight: 10
            },
            {
                name: `${food} ${s1.name} & ${prefix} ${x1.name} ${s2.name}`,
                weight: 10
            },
            {
                name: `${prefix} ${food} & ${x1.name} ${s1.name}`,
                weight: 3
            },
            {
                name: `${cookType} ${food}`,
                weight: 7
            },
            {
                name: `${m1.name} ${x1.name} ${s1.name}`,
                weight: 10
            },
            {
                name: `${cookType} ${food} ${s1.name}`,
                weight: 10
            },
        ]

        return this.gachaDrawName(foodStuff)
    }

}

module.exports = Food
