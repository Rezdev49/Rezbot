let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
const thumb = fs.readFileSync('./thumbnail.jpg')
let handler = async (m, { conn }) => {

let name = global.DATABASE.data.users[m.sender].name
let level = global.DATABASE.data.users[m.sender].level
let exp = global.DATABASE.data.users[m.sender].exp
let paus = global.DATABASE.data.users[m.sender].paus
let kepiting = global.DATABASE.data.users[m.sender].kepiting
let gurita = global.DATABASE.data.users[m.sender].gurita
let cumi = global.DATABASE.data.users[m.sender].cumi
let buntal = global.DATABASE.data.users[m.sender].buntal
let dory = global.DATABASE.data.users[m.sender].dory
let lumba = global.DATABASE.data.users[m.sender].lumba
let lobster = global.DATABASE.data.users[m.sender].lobster
let hiu = global.DATABASE.data.users[m.sender].hiu
let udang = global.DATABASE.data.users[m.sender].udang
let ikan = global.DATABASE.data.users[m.sender].ikan
let orca = global.DATABASE.data.users[m.sender].orca
let nila = global.DATABASE.data.users[m.sender].nila
let bawal = global.DATABASE.data.users[m.sender].bawal
let lele = global.DATABASE.data.users[m.sender].lele
let past = `*《 ISI KOLAM 》*
  
Kolam: *${name}*

Level: *${level}*
Exp: *${exp}*

*JENIS-JENIS*
🐳 Paus: *${paus}*   
🦀 Kepiting: *${kepiting}*   
🐙 Gurita: *${gurita}*   
🦑 Cumi: *${cumi}*   
🐡 Buntal: *${buntal}*  
🐠 Dory: *${dory}*
🐬 Lumba: *${lumba}*
🦞 Lobster: *${lobster}*
🦈 Hiu: *${hiu}*
🦐 Udang: *${udang}*
🐟 Ikan: *${ikan}*
🐋 Orca: *${orca}*
🐟 Lele: *${lele}*
🐠 Nila: *${nila}*
🐡 Bawal: *${bawal}*
🎏 Total Isi: *${bawal + nila + lele + paus + kepiting + gurita + cumi + buntal + dory + lumba + lobster + hiu + udang + ikan + orca}* Jenis`
let isi = ` *🦀Kepiting = ${kepiting}*
*🐠Dory = ${dory}*
*🦞Lobster = ${lobster}*
*🐟Ikan = ${ikan}*
*🦐Udang = ${udang}*
*🐬Lumba² = ${lumba}*
*🦑Cumi² = ${cumi}*
*🐋Paus = ${paus}*
*🐙Gurita = ${gurita}*
*🦈Hiu = ${hiu}*
*🐡Buntal = ${buntal}*
*🐳Orca = ${orca}*
🐟 Lele: *${lele}*
🐠 Nila: *${nila}*
🐡 Bawal: *${bawal}*`.trim()
  conn.sendButtonLoc(m.chat, thumb, past, wm, 'Pasar', '#pasar', m)
  }
  handler.help = ['aquarium', 'tempatikan', 'aquariumikan']
  handler.tags = ['rpg']
  handler.command = /^(tempat(ikan)?|aquarium(ikan)?)$/i
module.exports = handler
handler.register = true

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)