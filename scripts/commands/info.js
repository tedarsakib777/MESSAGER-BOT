module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`     ⊰᯽⊱┈──╌❊╌──┈⊰᯽⊱
۞ 𝗕𝗢𝗧 𝗔𝗗𝗠𝗜𝗡 𝗜𝗡𝗙𝗢 ۞
◎ ══════ ❈ ══════ ◎
╭─╮ 
  🔥 
╰─╯𝗡𝗔𝗠𝗘 👉𝗦𝗔𝗞𝗜𝗕 𝗠𝗔𝗛𝗠𝗨𝗗
╭─╮ 
  🔥 
╰─╯𝗔𝗗𝗗𝗥𝗘𝗦𝗦👉𝗦𝗬𝗛𝗟𝗘𝗧 
╭─╮ 
  🔥 
╰─╯𝗪𝗛𝗔𝗧𝗦,𝗔𝗣𝗣👉𝟎𝟏𝟑𝟏𝟎𝟕𝟔𝟐𝟓𝟗𝟓
╭─╮ 
  🔥 
╰─╯𝗥𝗘𝗟𝗔𝗧𝗜𝗢𝗡👉𝗦𝗜𝗡𝗚𝗘𝗟

   BOT OWNER FB ID
[ANY HELP CONTACT FB]

 ➷➷➷➷➷➷➷➷➷➷➷➷➷➷

https://www.facebook.com/SAKIB.MAHMUD.V1

⊰᯽⊱┈──╌❊╌──┈⊰᯽⊱
┏•━•━•━ ◎ ━•━•━•┓
 ❂ 𝗕𝗢𝗧  𝗢𝗪𝗡𝗘𝗥 ❂
┗•━•━•━ ◎ ━•━•━•┛
╭────────────╮
✜ 𝗦𝗔𝗞𝗜𝗕 𝗠𝗔𝗛𝗠𝗨𝗗 ✜
╰────────────╯`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/100000959749712/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
