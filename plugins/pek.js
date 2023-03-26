let fs = require ('fs')
let path = require('path')
let { MessageType } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, usedPrefix: _p, DevMode }) => {
  try {
    let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'id'
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
    let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let tags = {
      'rpgabsen': '❏ R P G - A B S E N',
  'rpg': '❏ R P G - M E N U',
  'game': '❏ G A M E S - M E N U',
  'xp': '❏ EXP & L I M I T',
  'sticker': '❏ C O N V E R T E R',
  'main': '❏ M A I N - M E N U',
  'kerang': '❏ K E R A N G - M E N U',
  'quotes': '❏ Q U O T E S',
  'admin': '❏ A D M I N - M E N U',
  'group': '❏ G R O U P - M E N U',
  'internet': '❏ I N T E R N E T',
  'anonymous': '❏ A N O N Y M O U S',
  'downloader': '❏ D O W N L O A D E R',
  'berita': '❏ B E R I T A',
  'tools': '❏ T O O L S - M E N U',
  'fun': '❏ F U N - M E N U',
  'database': '❏ D A T A - B O T', 
  'vote': '❏ V O T I N G',
  'absen': '❏ A B S E N',
  'catatan': '❏ C A T A T A N',
  'jadian': '❏ P A C A R A N',
  'islami': '❏ I S L A M I',
  'owner': '❏ D E V E L O P E R',
  'advanced': '❏ E V A L - C O D E',
  'info': '❏ I N F O R M A S I',
  'audio': '❏ A U D I O - M E N U',
  'maker': '❏ M A K E R - M E N U',
    }
    for (let plugin of Object.values(global.plugins))
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!tag in  tags) tags[tag] = tag
    let help = Object.values(global.plugins).map(plugin => {
      return {
        help: plugin.help,
        tags: plugin.tags,
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let menu of help)
        if (menu.tags && menu.tags.includes(tag))
          if (menu.help) groups[tag].push(menu)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || ` ┌──「 ${conn.user.name} 」
│============================
├  ${ucapan()}, %name!
├ Nama : %name!
├ Hari: *%week %weton*
├ Tanggal: *%date*
├ Waktu: *%time*
├ Uptime: *%uptime (%muptime)*
│============================`
    let header = conn.menu.header || '「 %category 」'
    let body   = conn.menu.body   || '•%cmd (Ⓛ)'
    let footer = conn.menu.footer || '\n'
    let after  = conn.menu.after  || '\n'
    let _text  = before + '\n'
    for (let tag in groups) {
      _text += header.replace(/%category/g, tags[tag]) + '\n'
      for (let menu of groups[tag]) {
        for (let help of menu.help)
          _text += body.replace(/%cmd/g, menu.prefix ? help : '%p' + help).replace(/%islimit/g, menu.limit ? ' (Limit)' : '')  + '\n'
      }
      _text += footer + '\n'
    }
    _text += after
    text =  typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      name, weton, week, date, time,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).join`|`})`, 'g'), (_, name) => replace[name])
    //conn.reply(m.chat, text.trim(), m)
    await conn.send2ButtonImg(m.chat, thumb, text.trim(), 'RezBotz', 'OWNER', '#owner', 'DONASI', '#donasi', m)
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu2|help2|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = (new Date().getUTCHours() + 7) % 24
  res = "Woi. Pagi"
  if (time >= 4) {
    res = "Selamat Pagi🌥️"
  }
  if (time >= 12) {
    res = "Selamat Siang🍟"
  }
  if (time >= 15) {
    res = "Selamat Sore🌆"
  }
  if (time >= 19) {
    res = "Selamat Malam🌌"
  }
  return res
}