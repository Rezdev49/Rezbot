let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [+62 821-7793-0256]
│ •  [+62 838-1103-4750]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler