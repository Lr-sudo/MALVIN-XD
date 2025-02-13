const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"mK71J8hveiHOcLGeeaBZUVvJVRCgquJM6tJLsKWr21g="},"public":{"type":"Buffer","data":"9wdfHzuRtjql73PBGTiIlm8Ur9aa5bqjRuLJcxNGQBU="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"sFsMz0O5z9pB90GFDBERYhYbRKwdeKu7q9fR7KpyYFQ="},"public":{"type":"Buffer","data":"qDaA06EAhhehiHrZyWA3JN1Zc4uuDAkKFKrSW6Nd7xk="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"aF9VNT3HZZE9aOuZty284lweB1A0eIwP1Q2sorxDL30="},"public":{"type":"Buffer","data":"Bp1KvrEHN+KBDJrBKRC4IUpCEfHzL/2/smo/ybtVVkU="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"+ADpk30YMCvmXFXkTzRp4ujSzMk8pxMe4x+5wYy6Y1Y="},"public":{"type":"Buffer","data":"pTolLCLXg696YxgZDhtbhUuK/AG2S4FfUAyRrIkLAVw="}},"signature":{"type":"Buffer","data":"5HQ7iyUDoMMMY5BtmC7bI9nUNpnHGxSIpRvmH4msw7xHpBzX7sgsIrV8fS2i1HII8G26IDipoIb0FjyKfuHsAA=="},"keyId":1},"registrationId":58,"advSecretKey":"lm95+bu7MRW/U1IgGRu8jEn05fXbC9bK58IRL/oC/jA=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"ckNb5ML6TKG1vl3Pea0l2g","phoneId":"dd15717d-f95d-4401-9148-471404801568","identityId":{"type":"Buffer","data":"AVap3jwP2L090YudFF99bTbo/FY="},"registered":true,"backupToken":{"type":"Buffer","data":"FMmsXkZPFuLM9LXDgvpu5YgYSA4="},"registration":{},"pairingCode":"DK42ZKWN","me":{"id":"237692548624:2@s.whatsapp.net","name":"La Mélodie"},"account":{"details":"CKeH2bEEEM+gtL0GGAEgACgA","accountSignatureKey":"IsUVkWMzvM1Aur0E0SHkMx4sLVpRcvZQ9HXiQX78R0Y=","accountSignature":"i6vXAOg8eHecTwd9D6SZUtrPor7nwcpzN5nKCUxn1JsGt7EscOYrj2AD7zM4s9Y8V7uHDV5wVzrAsQ60AViwCg==","deviceSignature":"xItbLuZI5tR+AnigB3g+LYvS6im3gtjQPeXRJPZO2G2gCLMUrtVjFQIZIa0O0kF2rUEQWnsWULk8lZWem4s7CA=="},"signalIdentities":[{"identifier":{"name":"237692548624:2@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BSLFFZFjM7zNQLq9BNEh5DMeLC1aUXL2UPR14kF+/EdG"}}],"platform":"smba","lastAccountSyncTimestamp":1739395165,"myAppStateKeyId":"AAAAAAcH"}",
// add your Session Id 

PREFIX: process.env.PREFIX || ".",
// add your prifix for bot

BOT_NAME: process.env.BOT_NAME || "✦ᴍᴀʟᴠɪɴ xᴅ",
// add bot name here for menu

CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    

CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🩶,🤍",
// chose custom react emojis by yourself 

DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 

OWNER_NUMBER: process.env.OWNER_NUMBER || "267692548624",
// add your bot owner number

OWNER_NAME: process.env.OWNER_NAME || "✦ᴍᴀʟᴠɪɴ ᴛᴇᴄʜ🪀✦",
// add bot owner name

DESCRIPTION: process.env.DESCRIPTION || "> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ✦ɴᴇxᴜs ᴛᴇᴄʜ✦ ɪɴᴄ*",
// add bot owner name    

ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/bddvfr.jpg",
// add img for alive msg

MENU_IMG: process.env.MENU_IMG || "https://files.catbox.moe/bddvfr.jpg",
// dont change menu image

LIVE_MSG: process.env.LIVE_MSG || "> ✦ᴍᴀʟᴠɪɴ xᴅ✦ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦ᴍᴀʟᴠɪɴ xᴅ✦ ғʀᴏᴍ ɴᴇxᴜs ᴛᴇᴄʜ ɪɴᴄ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* github.com/kingmalvn/MALVIN-XD",
// add alive msg here 

READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs

AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs

ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words

AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen

AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 

AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*🎉👀 Status Seen by ᴍᴀʟᴠɪɴ xᴅ 🚀🔥*",
// set the auto reply massage on status reply    

MODE: process.env.MODE || "private",
// make bot public-private-inbox-group 

ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 

AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices

AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 

AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 

HEART_REACT: process.env.HEART_REACT || "false",
// make this true or false for heart reactions only 

OWNER_REACT: process.env.OWNER_REACT || "true",
// make it true or fasle for only react on owner msg only 

ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 

PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod

AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   

AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 

};
