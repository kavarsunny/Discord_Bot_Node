const{Client,GatewayIntentBits}=require("discord.js");
    const client=new Client({intents:[GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent]});

client.on('messageCreate',(message)=>{
    if(message.author.bot)return;
    if(message,content.startWith('create')){
        const url =message.content.split('create')[1]
        return message.reply({
            content:'generating short if for '+url
        })
    }
message.reply({
    content:'hi from boat',
})
})

client.on('interactionCreate',
    (interaction)=>{
        console.log(interaction);
        interaction.reply("pong");
    }
)
client.login("MTMzNTk5NzQwMjQwNjE5MTIzNw.GBjX-E.ws0GuNA_ew0xOqbDvJ_7N4kUmqIchQRWd2J3a4");