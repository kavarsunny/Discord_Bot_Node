const { REST, Routes }=require("discord.js")

const commands = [
  {
    name: 'create',
    description: 'craete new url!',
  },
];

const rest = new REST({ version: '10' }).setToken("MTMzNTk5NzQwMjQwNjE5MTIzNw.GBjX-E.ws0GuNA_ew0xOqbDvJ_7N4kUmqIchQRWd2J3a4");

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationCommands("1335997402406191237"),
      { body: commands }
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
