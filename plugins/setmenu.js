let handler = async (m, { conn, command, text }) => {
    let type = command.replace(/^set(menu|help|\?)/, '').toLowerCase()
    if (type == '') {
      if (text) {
        conn.menu = text
        conn.reply(m.chat, 'Menu berhasil diatur\n' + info, m)
      } else {
        conn.menu = {}
        conn.reply(m.chat, 'Menu direset', m)
      }
    } else {
      conn.menu = typeof conn.menu == 'object' ? conn.menu : {}
      if (text) {
        conn.menu[type] = text
        conn.reply(m.chat, 'Menu ' + type + ' berhasil diatur\n' + info, m)
      } else {
        delete conn.menu[type]
        conn.reply(m.chat, 'Menu ' + type + ' direset', m)
      }
    }
  }
  handler.help = ['', 'before', 'header', 'body', 'footer', 'after'].map(v => 'setmenu' + v + ' <teks>')
  handler.tags = ['owner']
  handler.command = /^set(menu|help|\?)(before|header|body|footer|after)?$/i
  handler.owner = true
  module.exports = handler
  
  let info = `
  Universal:
  %% (%)
  %p (Prefix)
  %totalcmd (total commmand)
  %all (hit all command)
  %sall (sukses hit all command)
  %oname (Nama owner)
  %nobot (nomer bot)
  %namabot (nama bot)
  %weton (Weton Hari ini)
  %week (Hari)
  %date (Tanggal)
  %dateIslamic (Tanggal islam)
  %uptime (Uptime Bot)
  %readmore (pesan baca selengkapnya)
  
  Bagian Menu Header & Footer:
  %category (Kategori)
  
  Bagian Menu Body:
  %cmd (Command)
  `.trim()