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
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃      🌟--------------------------------------------
🌺🍒🐰❀𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍💝🐰🍒      
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ 💠𝐁𝐎𝐓 𝐍𝐀𝐌𝐄💠 : ─꯭─⃝͎̽𓆩𝐑𝐎𝐂𝐊𝐘'𝐒 𝐁𝐀𝐁𝐘 🥰
┫
👤 𝐁𝐎𝐓 𝐀𝐃𝐌𝐈𝐍 𝐍𝐚𝐦𝐞      : 𝐑𝐎𝐂𝐊𝐘 𝐒𝐇𝐀𝐈𝐊𝐇 ッ
┃ 
🚹 𝐆𝐞𝐧𝐝𝐞𝐫    : 𝐌𝐚𝐥𝐞
┃ 
❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧  : 𝐈𝐧 𝐂𝐨𝐦𝐩𝐥𝐢𝐜𝐚𝐭𝐞𝐝
┃ 
🎂 𝐀𝐠𝐞       : 20
┃ 
🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧  : 𝐈𝐬𝐥𝐚𝐦
┃ 
🏫 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 : 𝐊𝐎𝐋𝐊𝐀𝐓𝐀 𝐈𝐍𝐃𝐈𝐀
┃ 
🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬  : 𝐖𝐀𝐒𝐓, 𝐁𝐚𝐧𝐠𝐥

┣━━━━━━━━━━━━━━━━
_____________🅲🅾🅽🆃🅰🅲🆃_____________
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┃ 🎭 𝐓𝐢𝐤𝐭𝐨𝐤   : ullash01
┃ 📢 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 : Rocky91220
┃ 𝐖𝐇𝐀𝐓𝐒𝐇𝐀𝐏 𝐍𝐎: 91220858**
🌐 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 :https://www.facebook.com/61564434359130
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🕒 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐓𝐢𝐦𝐞:  ${time}
┗━━━━━━━━━━━━━━━━━━━━━┛
        `,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));
  
    return request(encodeURI(`https://graph.facebook.com/100000478146113/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`))
        .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
        .on('close', () => callback());
};
