/* eslint-disable no-inline-comments */
module.exports = {

	//	These values will be ignored if you have set the environment variables (must be in uppercase)

	prefix: 'm!', // required, command prefix
	botToken: 'MTIxNjI3Nzk3MzMwOTg0OTY4MA.GZDgXB.BiFlV-KM9uX6c0OLeIUgA8wowFnR62NL3DxDBo', // required, https://discordjs.guide/preparations/setting-up-a-bot-application.html#your-token
	clientId: '1216277973309849680', // optional, the bot's client ID, leave empty to disable slash commands
	geniusApiToken: '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', // optional, but recommended for lyrics search - https://genius.com/api-clients

	// still under development, so you should leave these empty
	webplayer: '', // optional
	cors: '*', // optional - stored in an array for multiple socket connections in the future. Set to "*" to accept all
};

