const { Client, GatewayIntentBits, Partials, Collection, Guild } = require("discord.js");
const {GuildExpressions, GuildMembers, GuildMessages} = GatewayIntentBits;
const {User, Message, GuildMember, ThreadMemberMember} = Partials;

const client = new Client({
    intents: [3276799],
    partials:[User, Message, GuildMember, ThreadMemberMember]
});

const { loadEvents } = require ("./Handlers/EventHandler");


client.config = require("./config.json");
client.events = new Collection;
client.commands = new Collection();

loadEvents(client);

client.login(client.config.token).then(() => {
    console.log(`Cliente ${client.user.username} iniciado`);
    client.user.setActivity(`GTA VI`);
  })
  .catch((err) => console.log(err));