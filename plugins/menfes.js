let handler = async (m, { conn, text }) => {

let [nomor, orang, pesan] = text.split('|')
if (!nomor) throw 'Nomornya mana kak?\nContoh : #menfes 6289999999999|Orang|Halo kamuh\n\nNote :\nMenulis nomor harus\n6289999 ✓\nJgn seperti ini\n0889999 ×\n\nHarus diisi semua..!!'
if (!orang) throw 'Dari siapa kak?\nContoh : #menfes 6289999999999|Orang|Halo kamuh\n\nNote :\nMenulis nomor harus\n6289999 ✓\nJgn seperti ini\n0889999 ×\n\nHarus diisi semua..!!'
if (!pesan) throw 'Pesannya mana kak?\nContoh : #menfes 6289999999999|Orang|Halo kamuh\n\nNote :\nMenulis nomor harus\n6289999 ✓\nJgn seperti ini\n0889999 ×\n\nHarus diisi semua..!!'
let tulisan = `Hai kak ada menfes nih....

Dari: ${orang}
Pesan: ${pesan}`
let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
await m.reply(`*Sukses mengirim menfes ke nomor ${nomor}*`)
conn.reply(fixedNumber, tulisan, {
key : {
 fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "status@broadcast" }) 
        }, 
message: {
imageMessage: {
viewOnce: true
}
}
})}
handler.help = ['menfes <number>|<mesage>']
handler.tags = ['main']
handler.command = /^menfes(wa)?$/i
handler.private = true
handler.limit = true
module.exports = handler