let fetch = require('node-fetch')

let handler = async (m, { conn, command }) => {
	let url = 'https://api.akuari.my.id/randomimage/darkmeme17'
	conn.sendButton(m.chat, 'Waifu siapa nih?', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.tags = ['anime']
handler.help = ['waifu']
handler.command = /^(dark(meme)?)$/i

module.exports = handler