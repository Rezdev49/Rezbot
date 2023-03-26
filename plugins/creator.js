function handler(m) {
  
  const kontak = {
	"displayName": 'Developer Rezbot',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:${conn.getName('6283811034750@s.whatsapp.net')}\nitem1.TEL;waid=6283811034750:6283811034750\nitem1.X-ABLabel:Busy.\nURL;My Web: https://rezdev.my.id\nEMAIL;Email Owner: rezdev499@gmail.com\nORG: HALLO TEMAN TEMAN\nTEL;Nomer bot ku;waid=6287819364117:6287819364117\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler