module.exports.config = {
    name: "admin",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ULLASH", //don't change my credit 
    description: "Show Owner Info",
    commandCategory: "info",
    usages: "",
    cooldowns: 5
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
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
🌺🍒🐰❀𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍💝🐰🍒 

╔════•|      ✿      |•════╗
💐আ্ঁস্ঁসা্ঁলা্ঁমু্ঁ💚আ্ঁলা্ঁই্ঁকু্ঁম্ঁ💐
╚════•|      ✿      |•════╝

________________________________________

💠𝐁𝐎𝐓 𝐍𝐀𝐌𝐄💠 : ─꯭─⃝͎̽𓆩𝐑𝐎𝐂𝐊𝐘'𝐒 𝐁𝐀𝐁𝐘 🥰

🌼𝐁𝐎𝐓 𝐀𝐃𝐌𝐈𝐍🌼 : 『😽👉  𝐃𝐉 𝐑𝐎𝐂𝐊𝐘 👈😽』

🔥𝐁𝐈𝐎 𝐀𝐃𝐌𝐈𝐍🔥 : [ ⊱༅༎😽💚༅༎⊱


-আমি ভদ্র, বেয়াদব দুটোই🥱✌️

-তুমি যেটা ডি'জার্ভ করো, আমি সেটাই দেখাবো!🙂


⊱༅༎😽💚༅༎⊱ ]

🏠𝐀𝐃𝐃𝐑𝐄𝐒𝐒🏠 : 𝐈𝐍𝐃𝐈𝐀

_____________🅲🅾🅽🆃🅰🅲🆃_____________

💥𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 (❶)💥 : https://www.facebook.com/profile.php?id=61564434359130

💥𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 (❷)💥 : https://www.facebook.com/profile.php?id=100089930390139

✴️𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗✴️ : /

❇️𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑✳️ : {🌻𝐌𝐑.𝐁𝐎𝐒𝐒 𝐃𝐉 𝐑𝐎𝐂𝐊𝐘 
𝐕𝐈𝐑𝐓𝐔𝐀𝐋 𝐓𝐎𝐏 𝐅𝐌𝐙 𝐊𝐈𝐍𝐆
𝐘𝐎𝐔'𝐑 𝐍𝐄𝐗𝐓 𝐕𝐀𝐓𝐀𝐑 𝐗𝐀𝐍'𝐒
𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐌𝐀𝐒𝐓𝐄𝐑
𝐈𝐍𝐃𝐈𝐀 𝐇𝐀𝐓𝐄𝐑𝐒
𝐅𝐄𝐄𝐋 𝐓𝐇𝐄 𝐏𝐎𝐖𝐄𝐑 𝐎𝐅
𝐘𝐎𝐔'𝐑 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋 𝐃𝐀𝐃🌻} 

🌺𝐎𝐓𝐇𝐄𝐑 𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍🌺____________________

💚🌺𝐓𝐇𝐀𝐍𝐊𝐒 𝐅𝐎𝐑 𝐔𝐒𝐈𝐍𝐆🌺💚 ─꯭─⃝͎̽𓆩𝐑𝐎𝐂𝐊𝐘'𝐒 𝐁𝐀𝐁𝐘🥰 『😽🖤🌺』
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/profile.php?id=61564434359130`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://i.postimg.cc/rsXBXNBB/Messenger-creation-1-DD2054-A-0203-4739-87-B5-2-C4794783-C75.jpg`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
