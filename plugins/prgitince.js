//modified @ PrinceRudh 
	

const Rudh = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true

Rudh.addCommand({pattern: 'git', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!
    var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var plk_here = new Date().toLocaleDateString(get_localized_date)
var afnplk = '```โฑ Time :' + plk_say + '```\n\n ```๐ Date :' + plk_here + '```'
	const buttons = [

        {buttonId: 'id1', buttonText: {displayText: '๐๐๐ง \n\n\n โโโโโโโโโโโโโโโโโโโโ \n      โ ~ษชแดsแดแด สแดแดสสแด~ โ \n โโโโโโโโโโโโโโโโโโโโ \n โโโโโโโโโโโโโโโโโโโโ \n โฃโ \n โฃโ *แดแดแด แดสแดแดแดส* : แดสษชษดแดแด สแดแดส \n โฃโ \n โฃโ *ษดแดแดสแดส* : wa.me/919895809960 \n โฃโ \n โฃโ *สแดแด ษขสแดแดแด* https://chat.whatsapp.com/Hgg2xYpPhTHLk77Jcisdq6 \n โฃโ \n โฃโ *ษชษดsแดแด* :https://instagram.com/princerudh \n โฃโ \n โฃโ *สแด* :https://youtube.com/princerudh \n โฃโ \n โฃโ *สแดแด แด ษชแดแดแด* :https://youtu.be/zUGBjETc7PA \n โฃโ \n โฃโ *ษขษชแด* :https://github.com/prince-rudh/Rudhra2.0 \n โฃโ \n โฃโ *ษขษชแด* : https://github.com/prince-rudh/Rudhra  \n โฃโ \n โฃโ     โโโโโโโโโโโโโ\n โฃโ     โโโโโโโโโโโโโ \n โฃโ         โขแดสษชษดแดแด สแดแดส๐จ \n โฃโ \n โโโโโโโโโโโโโโโโโโโโ \n โโโโโโโโโโโโโโโโโ \n โโโโโโโโโโโโโโโโโโโโ \n โฃโ        โฉ *สแดแดสสแด* โช \n โโโโโโโโโโโโโโโโโโโโ'}, type: 1},

      ]
      
      const buttonMessage = {
          contentText: ' สส แดแดแดแด....๐๐ป\n\n         โ *สแดแด ษชษดาแด* โ\n\n๐พ ษดแดแดแด  : ' + Config.BOTV2 + '\n๐พ sแดแดแดแดs : แดแดสสษชแด\n๐พ แดษชแดแด   : ```' + plk_say + '```\n๐พ แดแดแดแด : ```' + plk_here + '```\n๐พ แดแดสาษชx : [ . ]\n\n         โ *แดสแดแดแดแดส* โ\n\n๐จ๐ปโ๐ป *แดสษชษดแดแด สแดแดส* \n\n          โ *แดสแดษดแด สแดแด* โ\n\n๐พ แดสษชแดแด แดแดษดแด แดษดแด แดษดแดแดส แดสแด สแดแด\n',
          footerText: 'โขแดสษชษดแดแด สแดแดส',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage, { mimetype: Mimetype.buttonsMessage, quoted: message.data, ptt: true,quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { orderMessage: { itemCount: 99999, status: 200, thumbnail: fs.readFileSync('P3R3R03.jpg'), surface: 200, message: Config.BOTV2, orderTitle: Config.BOTV2, "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOTV2 + '\n', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1080, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('P3R3R03.jpg')}}}});
	
}));
