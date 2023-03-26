let fetch = require('node-fetch')

let handler = async (m, { conn, command, args }) => {
   if (!args[0]) return conn.reply(m.chat, 'Masukkan Linknya Kak', m)

  await m.reply('_Sedang diproses..._')
  
   let img = await (await fetch(`https://api.ibeng.tech/api/maker/ssweb2?url=${args[0]}&apikey=tamvan`)).buffer()

  
   conn.sendMessage(m.chat, { image: img, caption: '© Rezbot' }, { quoted: m })
}
handler.help = ['ssweb']
handler.tags = ['internet']
handler.command = /^(sspc|sslaptop|ssweb|sshp)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            // console.log(json)
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})


const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
                    'User-Agent': 'GoogleBot',
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}