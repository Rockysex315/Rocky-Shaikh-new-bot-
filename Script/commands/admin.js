const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
    name: "admin",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ULLASH", //don't change my credit 
    description: "Show Owner Info",
    commandCategory: "info",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function({ api, event }) {
    var time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

    var callback = () => api.sendMessage({
        body: `
🌺🍒🐰❀𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍💝🐰🍒 

╔════•|      ✿      |•════╗
💐আ্ঁস্ঁসা্ঁলা্ঁমু্ঁ💚আ্ঁলা্ঁই্ঁকু্ঁম্ঁ💐
╚════•|      ✿      |•════╝

________________________________________

💠𝐁𝐎𝐓 𝐍𝐀𝐌𝐄💠 :  𝐑𝐎𝐂𝐊𝐘 S SONA

🌼𝐁𝐎𝐓 𝐀𝐃𝐌𝐈𝐍🌼 : 『😽👉  𝐃𝐉 𝐑𝐎𝐂𝐊𝐘 👈😽』

🔥𝐁𝐈𝐎 𝐀𝐃𝐌𝐈𝐍🔥 : [ ⊱༅༎😽💚༅༎⊱


-আমি ভদ্র, বেয়াদব দুটোই🥱✌️

-তুমি যেটা ডি'জার্ভ করো, আমি সেটাই দেখাবো!🙂


⊱༅༎😽💚༅༎⊱ ]

🏠𝐀𝐃𝐃𝐑𝐄𝐒𝐒🏠 : 𝐈𝐍𝐃𝐈𝐀

_____________🅲🅾🅽🆃🅰🅲🆃_____________

💥𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 (❷) https://www.facebook.com/profile.php?id=61564434359130

💥𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 (❷)💥 : https://www.facebook.com/pyrmn

✴️𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗✴️ : /

❇️𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑✳ ※※※※ ❮𝐌𝐒❯ 𝐑𝐎𝐂𝐊𝐘❯ 父︻दु/⃦̸̸̵̵͇̿̿̿̿Ω̵̵͇̿̿๏ـــــــــــــــــــــــــــــــــــــــــــ๏๏๏⸙➊②➌𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺』 《𝐈𝐃‣⃟ 𝐏𝐘ɑ͜͡𝐑𓆪𒄬‣༑༑⃝𝐌๏н͜ɑ͜͡ßßɑ͜͡𝐓⸙ 𝐑ɑ͜͡ƞ𝐃ɪ̽͜𓆪»𝐑๏ƞɑ͜͡𑁍 𒄬‣𝐅ɪ̽͜ƞɠɼs͜͡ ⃝𝐊ɼɑ͜͡༑༑⃝ɑ͜͡𝐁н͜ɪ̽͜⸙𒄬‣ ⃝𝐌ɑ͜͡𝐊ɑ͜͡𓆪»𝐇ɑ͜͡ɪ̽} 

🌺𝐎𝐓𝐇𝐄𝐑 𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍🌺____________________

𝐓𝐘𝐏𝐄 /𝐀𝐃𝐌𝐈𝐍  

♻️➟ 𝐔𝐏𝐓𝐈𝐌𝐄 ♻️

🔰𝐓𝐎𝐃𝐀𝐘 𝐈𝐒 𝐓𝐈𝐌𝐄🔰 : 

🐰🍒𝐁𝐎𝐓 𝐈𝐒 𝐑𝐔𝐍𝐍𝐈𝐍𝐆🍒🐰

💚🌺𝐓𝐇𝐀𝐍𝐊𝐒 𝐅𝐎𝐑 𝐔𝐒𝐈𝐍𝐆🌺💚 ─꯭─⃝͎̽𓆩 Rocky s sona‣᭄𓆪___//😘😇😈🩵🪽 『😽🖤🌺』

        `,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));
  
    return request(encodeURI(`https://www.facebook.com/profile.php?id=61564434359130`/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`))
        .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
        .on('close', () => callback());
};
