/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "love",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Islamick Chat",
  description: "story VEDIO",
  commandCategory: "M H BD",
  usages: "love7 vedio",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["•┄┅════❁🌺❁════┅┄•\n\n - তুমি ভালোবাসা মানে কি বুজ..??\n - ভালোবাসা বলে কিছু হয় না সব চুদার ধন্দা...🌸🙈😍\n\n•┄┅════❁🌺❁════┅┄•"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
"https://i.imgur.com/yq80EIe.mp4",
"https://i.imgur.com/lNN3F0p.mp4",
"https://i.imgur.com/XpwJ7DV.mp4",
"https://i.imgur.com/dS5exJp.mp4",
"https://i.imgur.com/JHSZgXh.mp4",
"https://i.imgur.com/nLSZXW4.mp4",
"https://i.imgur.com/J5zk6w5.mp4",
"https://i.imgur.com/TjoLuAM.mp4",
"https://i.imgur.com/Ow4z3qc.mp4",
"https://i.imgur.com/RhkhACv.mp4",
"https://i.imgur.com/YotKtqe.mp4",
"https://i.imgur.com/BNSeKwB.mp4",
"https://i.imgur.com/97lTqAp.mp4",
"https://i.imgur.com/o3yqXTk.mp4",
"https://i.imgur.com/InK6alM.mp4",   
];
     var callback = () => api.sendMessage({body:` ${know} `,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
