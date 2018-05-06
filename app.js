const Discord = require("discord.js");
const client = new Discord.Client();
const http = require("http");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.indexOf('API') === 0) {
    var username = msg.content.slice(3)
    http.get('http://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/' + username + '?api_key=' + process.env.apikey, (res) => {
      msg.reply(res);
    });
  }
});

client.login(process.env.token);
