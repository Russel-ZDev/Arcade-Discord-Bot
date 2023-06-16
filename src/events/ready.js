const { ActivityType } = require("discord.js")
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
	
    let activities = [ `Arcade`, `${client.user.username}` ], i = 0;
    setInterval(() => client.user.setActivity({ name: `${activities[i++ % activities.length]}`, type: ActivityType.Watching }), 22000);
	
	//let channel = client.channels.cache.get('id');
	//channel.send('Bot Started!')

	//Sends console log of bot start
	console.log('Bot Started')
}};
