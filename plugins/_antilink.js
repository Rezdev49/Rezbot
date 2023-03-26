let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    await m.reply(`*「 ANTI LINK 」*\n\nDetected maaf kak *${await conn.getName(m.sender)}* antilink di grup ini sudah di aktifkan jadi link grup yg di kirim ke grup ini akan aku hapus_-`)
    if (isAdmin) return m.reply('*Eh sorry you admins, hehe..*')
    if (!isBotAdmin) return m.reply('*Bot bukan admin tidak dapat menghapus link _-*')
    let linkGC = ('https://chat.whatsapp.com/' + await conn.groupInviteCode(m.chat))
    let isLinkconnGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkconnGc.test(m.text)
    if (isgclink) return m.reply('*「 ANTI LINK 」*\n\nOrder denied, bot will not remove link.\nBecause the group link itself')
    await conn.sendMessage(m.chat, { delete: m.key })
  }
  return true
}

module.exports = handler