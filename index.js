// require('dotenv').config()

const tweetHelper = require('./tweetHelper/test2')

// for (var i = 15 - 1; i >= 0; i--) {
// 	console.log(tweetHelper.generate());
// }

async function go() {
	// for (var i = 15 - 1; i >= 0; i--) {
	const phrase = await tweetHelper.generate()
	console.log(`${phrase}: ${phrase.length}`);
	// }
}

go()


// const Twit = require('twit');
// const TwitterBot = require('node-twitterbot').TwitterBot;

// const Bot = new TwitterBot({
//  consumer_key: process.env.CONSUMER_KEY,
//  consumer_secret: process.env.CONSUMER_SECRET,
//  access_token: process.env.ACCESS_TOKEN,
//  access_token_secret: process.env.ACCESS_TOKEN_SECRET
// });

// Bot.tweet(tweetHelper.generate());